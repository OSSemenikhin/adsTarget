
/*

npm i browser-sync
npm i --save-dev fs
npm i --save-dev gulp-htmlmin
npm i --save-dev del
npm i --save-dev gulp-concat
npm i --save-dev gulp-autoprefixer
npm i --save-dev gulp-clean-css
npm i --save-dev gulp-sass
npm i --save-dev sass
npm i --save-dev gulp-sourcemaps
npm i --save-dev gulp-group-css-media-queries
npm i --save-dev gulp-babel
npm i --save-dev @babel/core
npm i --save-dev @babel/preset-env
npm i --save-dev babel-loader
npm i --save-dev gulp-uglify-es
npm i --save-dev gulp-notify
npm i --save-dev gulp-svg-sprite
npm i --save-dev gulp-imagemin@7.1.0
npm i --save-dev gulp-webp
npm i --save-dev gulp-webp-html
npm i --save-dev gulp-pug
npm i --save-dev gulp-ttf2woff
npm i --save-dev gulp-ttf2woff2

 */

const devFolder = './dev';
const distFolder = './dist';
const srcFolder = './src';
const assetsFolder = './src/assets';
const watchFolder = './src/**/*.*';


const backgroundFeedback = './src/assets/img/feedback/background.svg';


const path = {
  dev: {
    html: devFolder + '/',
    css: devFolder + '/css/',
    js: devFolder + '/js/',
    img: devFolder + '/img/',
    svg: devFolder + '/img/svg/',
    iconsSvg: devFolder + '/img/iconsSvg/',
    fonts: devFolder + '/fonts/',
    favicon: devFolder + '/favicon/',
    bgFeedback: devFolder + '/img/feedback/',
  },
  dist: {
    html: distFolder + '/',
    css: distFolder + '/css/',
    js: distFolder + '/js/',
    img: distFolder + '/img/',
    svg: distFolder + '/img/svg/',
    iconsSvg: distFolder + '/img/iconsSvg/',
    fonts: distFolder + '/fonts/',
    favicon: distFolder + '/favicon/',
    bgFeedback: distFolder + '/img/feedback/',
  },
  src: {
    pug: srcFolder + '/pug/**/index.pug',
    html: srcFolder + '/*.html',
    css: srcFolder + '/styles/**/*.scss',
    js: srcFolder + '/js/*.js',
    img: assetsFolder + '/img/**/*.{jpg, JPG, jpeg, svg, gif, ico, webp}',
    imgPng: assetsFolder + '/img/**/*.png',
    svg: assetsFolder + '/img/svg/**/*.svg',
    iconsSvg: assetsFolder + '/img/iconsSvg/**/*.svg',
    fonts: assetsFolder + '/fonts/**/*.ttf',
    favicon: assetsFolder + '/favicon/*.ico',
    bgFeedback: backgroundFeedback,
  },
  watch: {
    pug: srcFolder + '/pug/**/*.pug',
    html: srcFolder + '/**/*.html',
    css: srcFolder + '/styles/**/*.scss',
    js: srcFolder + '/js/**/*.js',
    img: assetsFolder + '/img/**/*.{jpg, JPG, jpeg, png, svg, gif, ico, webp}',
    svg: assetsFolder + '/img/svg/*.svg',
    iconsSvg: assetsFolder + '/img/icons/**/*.svg',
    favicon: assetsFolder + '/favicon/*.ico',
  },
};

const {
  src,
  dest
} = require('gulp');
const gulp = require('gulp');
const fs = require('fs');
const browserSync = require('browser-sync').create();
const htmlMin = require('gulp-htmlmin');
const del = require('del');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const scss = sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const groupMediaQueries = require('gulp-group-css-media-queries');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const svgSprite = require('gulp-svg-sprite');
// const image = require('gulp-image');
// const imageMin = require('imagemin');
// const imageminWebp = require('imagemin-webp');
const imageMin = require('gulp-imagemin');
// const imageMin = require('gulp-imagemin');
const webp = require('gulp-webp');
const webpHtml = require('gulp-webp-html');
const pug = require('gulp-pug');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

const jsImport = require('gulp-js-import');


// BROWSER SYNC
const watchFilesBrowserSync = (opts) => {
  browserSync.init({
    server: {
      baseDir: path.dev.html,
    }
  });
}

// PUG
const pug2html = () => {
  return src(path.src.pug)
    .pipe(pug())
    .pipe(dest(path.dist.html))
}
const pug2htmlDev = () => {
  return src(path.src.pug)
    .pipe(pug())
    .pipe(dest(path.dev.html))
    .pipe(browserSync.stream())
}

// HTML
const htmlMinify = () => {
  return src(path.src.html)
    .pipe(webpHtml())
    .pipe(htmlMin({
      collapseWhitespace: true,
    }))
    .pipe(dest(path.dist.html))
}
const htmlMinifyDev = () => {
  return src(path.src.html)
    .pipe(webpHtml())
    .pipe(htmlMin({
      collapseWhitespace: true,
    }))
    .pipe(dest(path.dev.html))
    .pipe(browserSync.stream())
}

// SCSS
const styles = () => {
  return src(path.src.css)
    // .pipe(concat('style.scss'))
    .pipe(scss({
      outputStyle: 'expanded',
    }))
    .pipe(autoprefixer())
    .pipe(cleanCss({
      level: 2,
    }))
    .pipe(dest(path.dist.css))
}
const stylesDev = () => {
  return src(path.src.css)
    .pipe(sourcemaps.init())
    // .pipe(concat('style.scss'))
    .pipe(scss({
      outputStyle: 'expanded',
    }))
    .pipe(autoprefixer())
    .pipe(groupMediaQueries())
    .pipe(cleanCss({
      level: 2,
    }))
    .pipe(sourcemaps.write())
    .pipe(dest(path.dev.css))
    .pipe(browserSync.stream())
}


// JS
const scripts = () => {
  return src([
    path.src.js,
    // 'src/js/main.js',
    // 'src/js/t.js',
  ])
    .pipe(jsImport())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    // .pipe(concat('app.js'))
    .pipe(uglify({
      toplevel: true,
    }).on('error', notify.onError))
    .pipe(dest(path.dist.js))
}
const scriptsDev = () => {
  [
    "main.js",
    "target.js"
  ].forEach(item => {
    return src([
      `src/js/${item}`
    ])
      .pipe(jsImport())
      // .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['@babel/env']
      }))
      // .pipe(concat('app.js'))
      .pipe(uglify({
        toplevel: true,
      }).on('error', notify.onError()))
      // .pipe(sourcemaps.write())
      .pipe(dest(path.dev.js))
      .pipe(browserSync.stream())
  });
}
const scriptsDevMain = () => {
  return src([
    // path.src.js,
    'src/js/main.js',
    // 'src/js/t.js',
  ])
    .pipe(jsImport())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    // .pipe(concat('app.js'))
    .pipe(uglify({
      toplevel: true,
    }).on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest(path.dev.js))
    .pipe(browserSync.stream())
}

const scriptsDevTarget = () => {
  return src([
    'src/js/target.js',
  ])
    .pipe(jsImport())
    // .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    // .pipe(concat('app.js'))
    .pipe(uglify({
      toplevel: true,
    }).on('error', notify.onError()))
    // .pipe(sourcemaps.write())
    .pipe(dest(path.dev.js))
    .pipe(browserSync.stream())
}

// const scriptsDev1 = () => {
//   return src([
//     'src/js/t.js',
//   ])
//     .pipe(jsImport())
//     // .pipe(sourcemaps.init())
//     .pipe(babel({
//       presets: ['@babel/env']
//     }))
//     // .pipe(concat('app.js'))
//     .pipe(uglify({
//       toplevel: true,
//     }).on('error', notify.onError()))
//     // .pipe(sourcemaps.write())
//     .pipe(dest(path.dev.js))
//     .pipe(browserSync.stream())
// }


// IMAGES
const images = () => {
  return src(path.src.img)
    .pipe(webp({
      quality: 70,
    }))
    .pipe(dest(path.dist.img))
    .pipe(src(path.src.img))
    .pipe(imageMin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      interlaced: true,
      optimizationLevel: 3,
    }))
    .pipe(dest(path.dist.img))
}
const imagesDev = () => {
  return src(path.src.img)
    .pipe(webp({
      quality: 70,
    }))
    .pipe(dest(path.dev.img))
    .pipe(src(path.src.img))
    .pipe(imageMin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      interlaced: true,
      optimizationLevel: 3,
    }))
    .pipe(dest(path.dev.img))
    .pipe(browserSync.stream())
}
const imagesPng = () => {
  return src(path.src.imgPng)
    .pipe(webp({
      quality: 70,
    }))
    .pipe(dest(path.dist.img))
    .pipe(src(path.src.imgPng))
    .pipe(imageMin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      interlaced: true,
      optimizationLevel: 3,
    }))
    .pipe(dest(path.dist.img))
}
const imagesPngDev = () => {
  return src(path.src.imgPng)
    .pipe(webp({
      quality: 70,
    }))
    .pipe(dest(path.dev.img))
    .pipe(src(path.src.imgPng))
    .pipe(imageMin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      interlaced: true,
      optimizationLevel: 3,
    }))
    .pipe(dest(path.dev.img))
    .pipe(browserSync.stream())
}

// SVG SPRITES
const svgDev = () => {
  return src(path.src.iconsSvg)
    .pipe(dest(path.dev.iconsSvg))
}
const svg = () => {
  return src(path.src.iconsSvg)
    .pipe(dest(path.dist.iconsSvg))
}
const svgSpritesDev = () => {
  return src(path.src.svg)
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg',
        },
      },
    }))
    .pipe(dest(path.dev.svg))
}
const svgSprites = () => {
  return src(path.src.svg)
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg',
        },
      },
    }))
    .pipe(dest(path.dist.svg))
}
// FEEDBACK BACKGROUND
const bgFeedbackDev = () => {
  return src(path.src.bgFeedback)
    .pipe(dest(path.dev.bgFeedback))
}
const bgFeedback = () => {
  return src(path.src.bgFeedback)
    .pipe(dest(path.dist.bgFeedback))
}

const faviconDev = () => {
  return src(path.src.favicon)
    .pipe(dest(path.dev.favicon))
}
const favicon = () => {
  return src(path.src.favicon)
    .pipe(dest(path.dist.favicon))
}


// FONTS
const fonts = () => {
  src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path.dist.fonts))
  return src(path.src.fonts)
    .pipe(ttf2woff2())
    .pipe(dest(path.dist.fonts))
}
const fontsDev = () => {
  src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path.dev.fonts))
  return src(path.src.fonts)
    .pipe(ttf2woff2())
    .pipe(dest(path.dev.fonts))
}

const fontsStyleDev = () => {
  let file_content = fs.readFileSync(srcFolder + '/styles/_fonts.scss');
  if (file_content == '') {
    fs.writeFile(srcFolder + '/styles/_fonts.scss', '', cb);
    return fs.readdir(path.dev.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(srcFolder + '/styles/_fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
          }
          c_fontname = fontname;
        }
      }
    })
  }
}

const cb = () => { }

// CLEAN FOLDER
const cleanDev = () => {
  return del([path.dev.html])
}
const cleanDist = () => {
  return del([path.dist.html])
}


// WATCH FILES
const watchFiles = (opts) => {
  gulp.watch([path.watch.html], htmlMinifyDev);
  gulp.watch([path.watch.css], stylesDev);
  // gulp.watch([path.watch.js], scriptsDev);
  gulp.watch([path.watch.js], scriptsDevMain);
  gulp.watch([path.watch.js], scriptsDevTarget);
  // gulp.watch([path.watch.js], scriptsDev1);
  gulp.watch([path.watch.img], imagesDev);
  gulp.watch([path.watch.pug], pug2htmlDev);
  gulp.watch([path.watch.svg], svgSpritesDev);
  gulp.watch([path.watch.svg], svgDev);
};

const dev = gulp.series(
  cleanDev,
  gulp.parallel(
    htmlMinifyDev,
    imagesPngDev,
    imagesDev,
    svgSpritesDev,
    svgDev,
    bgFeedbackDev,
    // scriptsDev,
    scriptsDevMain,
    scriptsDevTarget,
    // scriptsDev1,
    stylesDev,
    fontsDev,
    faviconDev,
    pug2htmlDev,
  )
);

const build = gulp.series(
  cleanDist,
  gulp.parallel(
    htmlMinify,
    styles,
    scripts,
    svgSprites,
    svg,
    bgFeedback,
    favicon,
    images,
    pug2html,
    fonts,
    imagesPng
  )
);

const watch = gulp.series(dev, gulp.parallel(watchFiles, watchFilesBrowserSync));

exports.pug2html = pug2html;
exports.pug2htmlDev = pug2htmlDev;
exports.htmlMinify = htmlMinify;
exports.htmlMinifyDev = htmlMinifyDev;
exports.styles = styles;
exports.stylesDev = stylesDev;
exports.scripts = scripts;
// exports.scriptsDev = scriptsDev;
exports.scriptsDevMain = scriptsDevMain;
exports.scriptsDevTarget = scriptsDevTarget;
// exports.scriptsDev1 = scriptsDev1;
exports.svgSprites = svgSprites;
exports.svgSpritesDev = svgSpritesDev;
exports.svg = svg;
exports.svgDev = svgDev;
exports.images = images;
exports.imagesDev = imagesDev;
exports.fonts = fonts;
exports.fontsDev = fontsDev;
exports.imagesPngDev = imagesPngDev;
exports.build = build;
exports.dev = dev;
exports.watch = watch;
exports.default = watch;
