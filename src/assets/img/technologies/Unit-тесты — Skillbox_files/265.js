(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{"11OC":function(t,e,n){"use strict";n.r(e),n.d(e,"VideoTutorialModule",(function(){return rt}));var i=n("2kYt"),s=n("KJ42"),a=n("Jzyt"),o=n("VOoQ"),c=n("mmPc"),r=n("oAs+"),l=n("5ZF5"),d=n("ap39"),u=n("AKDd"),p=n("JxFn"),m=n("sEIs"),f=n("ruzS"),h=n("oXWE"),_=n("D57K"),g=n("ABPI"),v=n("RmUC"),b=n("bxfK"),O=n("z/bm"),x=n("cdws"),C=n("cXTK"),y=n("QBoQ"),w=n("QffU"),S=n("NXKV"),M=n("xzqx"),P=n("g7ml"),k=n("ZTXN"),E=n("ROBh"),F=n("6Oco"),T=n("YtkY"),I=n("8j5Y"),A=n("J+dc"),q=n("TLy2"),j=n("4e/d"),G=n("w0kG"),L=n("5uDM"),$=n("qV/k"),z=n("sn6r"),N=n("lDeo"),W=n("8Wzv"),D=n("EM62"),B=n("8BgZ"),X=n("RQ93"),Y=n("puZz"),H=n("GsfJ"),J=n("sHnX"),Q=n("xf/+"),R=n("kJHU"),V=n("cfBW");function K(t,e){if(1&t){const t=D.Hc();D.Gc(0,"app-lesson-video-player",8),D.Sc("nextLesson",(function(){D.ud(t);const n=e.ngIf;return D.Wc(3).onNextLesson(n.item)}))("saveWatchTime",(function(e){return D.ud(t),D.Wc(3).saveWatchTime(e)}))("isFullscreen",(function(e){return D.ud(t),D.Wc(3).onFullscreenChange(e)})),D.Xc(1,"cache"),D.Fc()}if(2&t){const t=e.ngIf,n=D.Wc(2).ngIf,i=D.Wc();D.ed("lessonToken",n.id)("courseId",n.topic.course_id)("src",null==n.video?null:n.video.link)("trackable",D.ad(1,10,n,i.isTrackableVideo,i))("nextLessonTitle",i.getNextLessonTitle(t.topic,t.item))("autoplay",i.playerAutoplay)("fullscreen",i.fullscreen)("duration",null==n||null==n.video?null:n.video.duration)("startAt",i.startAt)("timecodes",n.video_timecodes)}}const Z=function(t,e){return{topic:t,item:e}};function U(t,e){if(1&t&&(D.Gc(0,"div",6),D.Ed(1,K,2,14,"app-lesson-video-player",7),D.Xc(2,"async"),D.Xc(3,"async"),D.Fc()),2&t){const t=D.Wc(2);D.nc(1),D.ed("ngIf",D.kd(5,Z,D.Yc(2,1,t.nextTopic$),D.Yc(3,3,t.nextTopicItem$)))}}function tt(t,e){if(1&t){const t=D.Hc();D.Gc(0,"app-sb-text-card",9),D.Gc(1,"app-sb-text-card-header",10),D.Gd(2),D.Xc(3,"transloco"),D.Fc(),D.Gc(4,"app-sb-text-card-body"),D.Gc(5,"app-skb-froala-content",11),D.Sc("openedGallery",(function(){return D.ud(t),D.Wc(2).logOpenedGallery()})),D.Fc(),D.Fc(),D.Fc()}if(2&t){const t=D.Wc().ngIf;D.nc(2),D.Hd(D.Yc(3,2,"tutorial.videoTutorial.titleDescription")),D.nc(3),D.ed("content",t.description)}}function et(t,e){if(1&t&&D.Bc(0,"app-sb-materials-card",12),2&t){const t=D.Wc().ngIf;D.ed("files",t.materials)("lessonToken",t.id)}}function nt(t,e){if(1&t){const t=D.Hc();D.Gc(0,"app-tutorial-evaluation",13),D.Sc("selectionAnswersChange",(function(e){return D.ud(t),D.Wc(2).onEvaluationAnswerChange(e)})),D.Xc(1,"async"),D.Fc()}if(2&t){const t=D.Wc(2);D.ed("controller",D.Yc(1,2,t.evaluationController$))("steps",t.evaluationSteps)}}function it(t,e){if(1&t){const t=D.Hc();D.Gc(0,"app-faq-block",15),D.Sc("faqExpandedState",(function(e){return D.ud(t),D.Wc(3).faqExpandedStateLog(e)})),D.Fc()}if(2&t){const t=D.Wc().ngIf;D.ed("questions",t)}}function st(t,e){if(1&t&&(D.Ec(0),D.Ed(1,it,1,1,"app-faq-block",14),D.Dc()),2&t){const t=e.ngIf;D.nc(1),D.ed("ngIf",null==t?null:t.length)}}function at(t,e){if(1&t&&(D.Ec(0),D.Ed(1,U,4,8,"div",1),D.Gc(2,"div",2),D.Ed(3,tt,6,4,"app-sb-text-card",3),D.Ed(4,et,1,2,"app-sb-materials-card",4),D.Ed(5,nt,2,4,"app-tutorial-evaluation",5),D.Xc(6,"async"),D.Ed(7,st,2,1,"ng-container",0),D.Xc(8,"async"),D.Fc(),D.Dc()),2&t){const t=e.ngIf,n=D.Wc();D.nc(1),D.ed("ngIf",t.video),D.nc(2),D.ed("ngIf",t.description),D.nc(1),D.ed("ngIf",null==t.materials?null:t.materials.length),D.nc(1),D.ed("ngIf",D.Yc(6,5,n.canShowEvaluations$)),D.nc(2),D.ed("ngIf",D.Yc(8,7,n.questions$))}}const ot=[{path:"",component:(()=>{let t=class{constructor(t,e,n,i,s,a,o,c,r){this.surveysLessonQualityService=t,this.studentsLessonsService=e,this.tutorialService=n,this.tutorialEvaluationsService=i,this.completionService=s,this.route=a,this.titleService=o,this.logBus=c,this.coursesFacade=r,this.evaluationSteps=W.b,this.startAt=0,this.isFullscreen=!1,this.saveWatchTimeSig$=new k.a,this.titleService.setTitle(this.route.snapshot.data.detail.name);const{token:l}=g.a.reduceSnapshot(this.route.snapshot);this.detail$=this.route.data.pipe(Object(T.a)((t=>t.detail)),Object(I.a)((t=>this.setStartTime(t)))),this.isAvailableForRating$=this.tutorialService.topicItem$.pipe(Object(T.a)((t=>this.isAvailableForRating(t)))),this.completionService.completeNonTrackingTutorial(this.detail$),this.nextTopicItem$=this.tutorialService.nextItem$,this.nextTopic$=this.tutorialService.nextTopic$,this.playerAutoplay=this.tutorialService.getPlayerAutoplayState(),this.fullscreen=this.tutorialService.getFullScreenState(),this.setupQuestionsObservable(),this.initSaveWatchTimeStream(),this.initEvaluation(l)}ngOnInit(){var t;const{courseSlug:e}=g.a.reduceSnapshot(this.route.snapshot);this.courseId=null===(t=Object(w.a)(this.coursesFacade.selectCourseTreeBySlug(e)))||void 0===t?void 0:t.id}onEvaluationAnswerChange(t){this.tutorialEvaluationsService.submitAnswers(t)}getNextLessonTitle(t,e){return t||e?`${t._order}.${e._order} ${e.name}`:null}onNextLesson(t){t&&this.tutorialService.navigateToTopicItem(t,this.isFullscreen)}onFullscreenChange(t){this.isFullscreen=t}isTrackableVideo(t){return!this.completionService.isNonTrackingTutorial(t)}saveWatchTime(t){this.saveWatchTimeSig$.next(t)}faqExpandedStateLog(t){this.tutorialService.topicItem$.pipe(Object(A.a)(1),Object(M.b)(this)).subscribe((e=>{this.logBus.log(new b.a({immediateDispatch:!0,message:new x.a({event_type:O.a.LESSON.FAQ_CLICK,event_params:{switchTo:P.a[t.expandedState],lesson_token:e.id,question_id:t.questionId}})}))}))}logOpenedGallery(){this.tutorialService.topicItem$.pipe(Object(A.a)(1),Object(M.b)(this)).subscribe((t=>{this.logBus.log(new b.a({immediateDispatch:!0,message:new x.a({event_type:C.a.EventTypeEnum.video_tutorial_opened_gallery,event_params:{course_id:this.courseId,lesson_id:t.id}})}))}))}setStartTime(t){var e,n;this.route.snapshot.queryParams.start?(null===(e=t.video)||void 0===e?void 0:e.duration)&&+this.route.snapshot.queryParams.start<(null===(n=t.video)||void 0===n?void 0:n.duration)&&(this.startAt=+this.route.snapshot.queryParams.start):this.startAt=t.video_progress_timestamp||0}initEvaluation(t){this.tutorialEvaluationsService.init(t).pipe(Object(M.b)(this)).subscribe(),this.tutorialEvaluationsService.setSurveyTreeSource(this.surveysLessonQualityService.v3SurveysLessonQualityVideosLatestRead()),this.evaluationController$=this.tutorialEvaluationsService.getController(),this.canShowEvaluations$=this.tutorialEvaluationsService.hasEvaluations().pipe(Object(T.a)((t=>!t)))}isAvailableForRating(t){return!!(null==t?void 0:t.video_duration)&&((null==t?void 0:t.user_status)===f.ob.UserStatusEnum.START||(null==t?void 0:t.user_status)===f.ob.UserStatusEnum.DONE)}setupQuestionsObservable(){this.questions$=this.route.data.pipe(Object(q.a)((t=>this.studentsLessonsService.v3StudentsLessonsFaqQuestionsList({lessonId:t.detail.id}))),Object(j.a)((()=>Object(E.a)([]))))}initSaveWatchTimeStream(){this.saveWatchTimeSig$.pipe(Object(G.a)(this.detail$),Object(q.a)((([t,e])=>{const n=e.id;return this.studentsLessonsService.v3StudentsLessonsPartialUpdate({lessonId:n,data:{video_progress_timestamp:t}}).pipe(Object(L.a)((t=>{const e=this.courseId,i=t.user_status;return this.coursesFacade.selectLesson(e,n).pipe(Object(A.a)(1),Object(I.a)((t=>{(null==t?void 0:t.user_status)!==i&&this.coursesFacade.updateTopicItemUserStatus(e,n,i)})))})),Object(j.a)((()=>F.a)))})),Object(M.b)(this)).subscribe()}};return t.\u0275fac=function(e){return new(e||t)(D.Ac(f.Sf),D.Ac(f.Ef),D.Ac(N.a),D.Ac(z.a),D.Ac($.a),D.Ac(m.a),D.Ac(S.a),D.Ac(v.a),D.Ac(y.a))},t.\u0275cmp=D.uc({type:t,selectors:[["app-video-tutorial"]],features:[D.mc([z.a,i.b])],decls:2,vars:3,consts:[[4,"ngIf"],["class","section__video",4,"ngIf"],[1,"section__content-wrapper"],["class","section__description",4,"ngIf"],["class","section__materials",3,"files","lessonToken",4,"ngIf"],["class","setion__lesson-evaluations",3,"controller","steps","selectionAnswersChange",4,"ngIf"],[1,"section__video"],[3,"lessonToken","courseId","src","trackable","nextLessonTitle","autoplay","fullscreen","duration","startAt","timecodes","nextLesson","saveWatchTime","isFullscreen",4,"ngIf"],[3,"lessonToken","courseId","src","trackable","nextLessonTitle","autoplay","fullscreen","duration","startAt","timecodes","nextLesson","saveWatchTime","isFullscreen"],[1,"section__description"],["data-i18n","tutorial.videoTutorial.titleDescription"],["appGalleryElements","",3,"content","openedGallery"],[1,"section__materials",3,"files","lessonToken"],[1,"setion__lesson-evaluations",3,"controller","steps","selectionAnswersChange"],[3,"questions","faqExpandedState",4,"ngIf"],[3,"questions","faqExpandedState"]],template:function(t,e){1&t&&(D.Ed(0,at,9,9,"ng-container",0),D.Xc(1,"async")),2&t&&D.ed("ngIf",D.Yc(1,1,e.detail$))},directives:[i.u,B.a,X.a,Y.c,Y.a,H.a,J.a,Q.a,R.a,P.b],pipes:[i.b,V.a,a.g],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .layout__column--offset-bottom[_ngcontent-%COMP%]{margin-bottom:20px}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{display:none}@media (max-width:767.9px){[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{display:block;padding:16px 20px 0}}[_nghost-%COMP%]  .ui-skb-stepper__step{width:100%}@media (min-width:1024px){[_nghost-%COMP%]   .section__video[_ngcontent-%COMP%]{margin-bottom:64px}[_nghost-%COMP%]   .section__description[_ngcontent-%COMP%], [_nghost-%COMP%]   .section__materials[_ngcontent-%COMP%]{margin-bottom:80px}}[_nghost-%COMP%]   .section__content-wrapper[_ngcontent-%COMP%]{width:100%}@media (min-width:1280px){[_nghost-%COMP%]   .section__content-wrapper[_ngcontent-%COMP%]{width:768px;margin:0 auto}}@media (min-width:1600px){[_nghost-%COMP%]   .section__content-wrapper[_ngcontent-%COMP%]{width:1024px}}[_nghost-%COMP%]   .section__video[_ngcontent-%COMP%]{margin-bottom:40px}[_nghost-%COMP%]   .section__description[_ngcontent-%COMP%], [_nghost-%COMP%]   .section__materials[_ngcontent-%COMP%]{margin-bottom:64px}[_nghost-%COMP%]   app-faq-block[_ngcontent-%COMP%]{margin-top:64px}@media (min-width:1024px){[_nghost-%COMP%]   app-faq-block[_ngcontent-%COMP%]{margin-top:80px}}"],changeDetection:0}),t=Object(_.b)([Object(M.a)()],t),t})(),data:{skipTitleService:!0,type:f.ob.LessonTypeEnum.VIDEOLESSON},resolve:{detail:h.a}}];let ct=(()=>{class t{}return t.\u0275mod=D.yc({type:t}),t.\u0275inj=D.xc({factory:function(e){return new(e||t)},providers:[h.a],imports:[[m.j.forChild(ot)],m.j]}),t})(),rt=(()=>{class t{constructor(){n.e(2023).then(n.t.bind(null,"XiFz",7))}}return t.\u0275mod=D.yc({type:t}),t.\u0275inj=D.xc({factory:function(e){return new(e||t)},providers:[{provide:a.d,useValue:"tutorial"}],imports:[[i.c,ct,d.a,p.a,c.a,u.a,o.a,a.f,r.a,s.a,l.a]]}),t})()},"8ZLB":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("cqP4"),s=n("EM62");let a=(()=>{class t{constructor(){this.converters=[{function:i.a.toGB,notation:"\u0413\u0411"},{function:i.a.toMB,notation:"\u041c\u0411"},{function:i.a.toKB,notation:"\u041a\u0411"}]}transform(t){const e=this.findFirstIntergerConverter(t,this.converters);return this.getTranformedStringFromConverter(e||this.converters[this.converters.length-1],t)}findFirstIntergerConverter(t,e){return e.find((e=>e.function(t)>1))}getTranformedStringFromConverter(t,e){const n=t.function(e),i=t.notation;return`${(Math.round(100*n)/100).toFixed(2)} ${i}`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=s.zc({name:"convertFileSize",type:t,pure:!0}),t})()},AKDd:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var i=n("2kYt"),s=n("5JCl"),a=n("/Ffh"),o=n("MfMy"),c=n("Jzyt"),r=n("EM62");let l=(()=>{class t{}return t.\u0275mod=r.yc({type:t}),t.\u0275inj=r.xc({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})();var d=n("mmPc"),u=n("sOFU");let p=(()=>{class t{}return t.\u0275mod=r.yc({type:t}),t.\u0275inj=r.xc({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})();var m=n("MR/C");let f=(()=>{class t{constructor(t){this.svgIconsRegistry=t,this.svgIconsRegistry.registerIcons([o.svgIconDownloadV2])}}return t.\u0275mod=r.yc({type:t}),t.\u0275inj=r.xc({factory:function(e){return new(e||t)(r.Oc(m.a))},imports:[[i.c,d.a,l,u.a,a.a,p,s.a,c.f]]}),t})()},JxFn:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("2kYt"),s=n("qOZC"),a=n("5h/E"),o=n("TxMa"),c=n("27A0"),r=n("HF2I"),l=n("VNCl"),d=n("EM62");let u=(()=>{class t{}return t.\u0275mod=d.yc({type:t}),t.\u0275inj=d.xc({factory:function(e){return new(e||t)},imports:[[i.c,a.ec,o.a,s.a,c.a,r.a,l.a]]}),t})()},TxMa:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("2kYt"),s=n("nIj0"),a=n("e41O"),o=n("5h/E"),c=n("Jzyt"),r=n("rgpp"),l=n("Ntwn"),d=n("EM62");let u=(()=>{class t{}return t.\u0275mod=d.yc({type:t}),t.\u0275inj=d.xc({factory:function(e){return new(e||t)},providers:[l.a],imports:[[i.c,r.a,a.c,s.E,o.ic,c.f]]}),t})()},VOoQ:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("2kYt"),s=n("Jzyt"),a=n("5QkL"),o=n("oAs+"),c=n("EM62");let r=(()=>{class t{}return t.\u0275mod=c.yc({type:t}),t.\u0275inj=c.xc({factory:function(e){return new(e||t)},imports:[[i.c,o.a,a.a,s.f]]}),t})()},g7ml:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return f}));var i=n("EM62"),s=n("Jzyt"),a=n("umBd"),o=n("2kYt"),c=n("I1js"),r=n("K5i5"),l=n("p5sF"),d=n("GsfJ");function u(t,e){if(1&t&&i.Bc(0,"app-skb-froala-content",5),2&t){const t=i.Wc().$implicit;i.ed("content",t.answer)}}function p(t,e){if(1&t){const t=i.Hc();i.Gc(0,"app-sb-accordion-panel",3),i.Sc("expandedState",(function(n){i.ud(t);const s=e.$implicit;return i.Wc().faqExpandedState.emit({expandedState:n,questionId:s.id})})),i.Gc(1,"app-sb-accordion-panel-header"),i.Gc(2,"app-sb-accordion-panel-title"),i.Gd(3),i.Fc(),i.Fc(),i.Ed(4,u,1,1,"app-skb-froala-content",4),i.Fc()}if(2&t){const t=e.$implicit;i.nc(3),i.Id(" ",t.title," ")}}const m={collapsed:"close",expanded:"open"};let f=(()=>{class t{constructor(){this.faqExpandedState=new i.t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.uc({type:t,selectors:[["app-faq-block"]],inputs:{questions:"questions"},outputs:{faqExpandedState:"faqExpandedState"},features:[i.mc([{provide:s.d,useValue:"tutorial"}])],decls:5,vars:4,consts:[["data-i18n","tutorial.faqBlock.titleFaq",1,"faq__title"],[1,"faq__questions"],[3,"expandedState",4,"ngFor","ngForOf"],[3,"expandedState"],["class","faq__accordion-content",3,"content",4,"appSbAccodrionPanelContent"],[1,"faq__accordion-content",3,"content"]],template:function(t,e){1&t&&(i.Gc(0,"h3",0),i.Gd(1),i.Xc(2,"transloco"),i.Fc(),i.Gc(3,"app-sb-accordion",1),i.Ed(4,p,5,1,"app-sb-accordion-panel",2),i.Fc()),2&t&&(i.nc(1),i.Hd(i.Yc(2,2,"tutorial.faqBlock.titleFaq")),i.nc(3),i.ed("ngForOf",e.questions))},directives:[a.a,o.t,c.a,r.a,l.e,l.b,d.a],pipes:[s.g],styles:["[_nghost-%COMP%]{display:block;color:var(--ui-sb-color-text-main)}[_nghost-%COMP%]   .faq__title[_ngcontent-%COMP%]{font-size:20px;line-height:26px;font-weight:600;margin-bottom:16px}@media (min-width:1024px){[_nghost-%COMP%]   .faq__title[_ngcontent-%COMP%]{font-size:24px;line-height:32px}}@media (min-width:1600px){[_nghost-%COMP%]   .faq__title[_ngcontent-%COMP%]{font-size:28px;line-height:36px}}[_nghost-%COMP%]   .faq__questions[_ngcontent-%COMP%]{margin-bottom:24px}[_nghost-%COMP%]   .faq__accordion-content[_ngcontent-%COMP%]{width:100%;padding-bottom:24px}@media (min-width:1024px){[_nghost-%COMP%]   .faq__accordion-content[_ngcontent-%COMP%]{width:688px}}@media (min-width:1600px){[_nghost-%COMP%]   .faq__accordion-content[_ngcontent-%COMP%]{width:760px}}[_nghost-%COMP%]   .faq__accordion-content[_ngcontent-%COMP%]     img{display:block;max-width:100%}app-sb-accordion-panel[_ngcontent-%COMP%]:not(.expanded){content-visibility:auto;contain-intrinsic-height:72px}"],changeDetection:0}),t})()},mmPc:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("2kYt"),s=n("EM62");let a=(()=>{class t{}return t.\u0275mod=s.yc({type:t}),t.\u0275inj=s.xc({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})()},"oAs+":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("2kYt"),s=n("EM62");let a=(()=>{class t{}return t.\u0275mod=s.yc({type:t}),t.\u0275inj=s.xc({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})()},sOFU:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("2kYt"),s=n("EM62");let a=(()=>{class t{}return t.\u0275mod=s.yc({type:t}),t.\u0275inj=s.xc({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})()},"x8+c":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));class i{constructor(t){this.fullname=t}get baseName(){return this.fullname.includes(".")?this.fullname.split(".").slice(0,-1).join("."):this.fullname}get extension(){if(this.fullname.includes(".")){const t=this.fullname.split(".");return`.${t[t.length-1]}`}return""}}},"xf/+":function(t,e,n){"use strict";n.d(e,"a",(function(){return F}));var i=n("D57K"),s=n("EM62"),a=n("RlGw"),o=n("cXTK"),c=n("TPBJ"),r=n("Jzyt"),l=n("xzqx"),d=n("x8+c"),u=function(t){return t.BASENAME="basename",t.EXTENSION="extension",t}({});let p=(()=>{class t{transform(t,e){const n=new d.a(t);switch(e){case u.BASENAME:return n.baseName;case u.EXTENSION:return n.extension;default:return t}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=s.zc({name:"fileName",type:t,pure:!0}),t})();var m=n("QQZH"),f=n("6Oco"),h=n("TLy2"),_=n("RQ93"),g=n("puZz");const v=[[["app-sb-list-item"]]],b=["app-sb-list-item"];let O=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.uc({type:t,selectors:[["app-sb-list"]],ngContentSelectors:b,decls:1,vars:0,template:function(t,e){1&t&&(s.dd(v),s.cd(0))},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),t})();var x=n("2kYt"),C=n("6BpR");const y=["*"];let w=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.uc({type:t,selectors:[["app-sb-list-item"]],ngContentSelectors:y,decls:1,vars:0,template:function(t,e){1&t&&(s.dd(),s.cd(0))},styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--ui-sb-color-stroke-main)}@media (min-width:768px){[_nghost-%COMP%]:first-child{border-top:1px solid var(--ui-sb-color-stroke-main)}}"],changeDetection:0}),t})();var S=n("jR34"),M=n("8ZLB");function P(t,e){if(1&t&&(s.Gc(0,"span",11),s.Gd(1),s.Xc(2,"convertFileSize"),s.Fc()),2&t){const t=s.Wc().$implicit;s.nc(1),s.Hd(s.Yc(2,1,t.size))}}const k=function(t){return{lesson_token:t}};function E(t,e){if(1&t){const t=s.Hc();s.Gc(0,"app-sb-list-item",4),s.Sc("click",(function(){s.ud(t);const n=e.$implicit;return s.Wc().onDownloadClick(n)})),s.Gc(1,"div",5),s.Gc(2,"span",6),s.Gd(3),s.Xc(4,"fileName"),s.Fc(),s.Gc(5,"span",7),s.Gd(6),s.Xc(7,"fileName"),s.Fc(),s.Fc(),s.Gc(8,"div",8),s.Ed(9,P,3,3,"span",9),s.Bc(10,"svg-icon",10),s.Fc(),s.Fc()}if(2&t){const t=e.$implicit,n=s.Wc();s.ed("appStatLogOnClick",n.statLogEvents.lesson_file_download)("eventParams",s.jd(11,k,n.lessonToken)),s.nc(3),s.Hd(s.Zc(4,5,n.resolveFileName(t),n.fileNameType.BASENAME)),s.nc(3),s.Hd(s.Zc(7,8,n.resolveFileName(t),n.fileNameType.EXTENSION)),s.nc(3),s.ed("ngIf",t.size)}}let F=(()=>{let t=class{constructor(t,e){this.fileSizeService=t,this.cdr=e,this.materialDownloadClicked=new s.t,this.allMaterialsDownloadClicked=new s.t,this.fileNameType=u,this.filesHelper=a.a,this.statLogEvents=o.a.EventTypeEnum,this.resolveFileSizesSig$=new m.a(1)}ngOnInit(){this.resolveFileSizesSig$.pipe(Object(h.a)((()=>Array.isArray(this.files)&&this.files.length>0?this.fileSizeService.resolve(this.files.map((({file:t})=>t))):f.a)),Object(l.b)(this)).subscribe((t=>{t.forEach(((t,e)=>this.files[e].size=t)),this.cdr.detectChanges()}))}ngOnChanges(t){t.files&&this.resolveFileSizesSig$.next()}downloadAll(t){this.filesHelper.saveAllFileAs(t,this.resolveFileName.bind(this)),this.allMaterialsDownloadClicked.emit()}resolveFileName(t){return this.filesHelper.getFullFileName(t)}onDownloadClick(t){this.filesHelper.saveFileAs(t.file,this.resolveFileName(t)),this.materialDownloadClicked.emit()}};return t.\u0275fac=function(e){return new(e||t)(s.Ac(c.a),s.Ac(s.j))},t.\u0275cmp=s.uc({type:t,selectors:[["app-sb-materials-card"]],inputs:{files:"files",lessonToken:"lessonToken"},outputs:{materialDownloadClicked:"materialDownloadClicked",allMaterialsDownloadClicked:"allMaterialsDownloadClicked"},features:[s.mc([{provide:r.d,useValue:"tutorial"}]),s.lc],decls:11,vars:11,consts:[[1,"materials-card"],["data-i18n","tutorial.materialsCard.titleMaterials",1,"materials-card__title"],["class","materials-card__item","data-e2e","materials__item-download-trigger",3,"appStatLogOnClick","eventParams","click",4,"ngFor","ngForOf"],["data-e2e","materials__download-all-trigger","data-i18n","tutorial.materialsCard.downloadAll",1,"ui-sb-button--default","ui-sb-button--small","ui-sb-button--view-1","materials-card__button",3,"appStatLogOnClick","eventParams","click"],["data-e2e","materials__item-download-trigger",1,"materials-card__item",3,"appStatLogOnClick","eventParams","click"],[1,"materials-card__header","skb-p1"],["data-e2e","materials__item-name",1,"skb-p1","materials-card__file-name"],["data-e2e","materials__item-extension",1,"skb-p1","materials-card__file-type"],[1,"materials-card__footer","skb-p1"],["class","skb-p1 materials-card__file-size","data-e2e","materials__item-size",4,"ngIf"],["name","download_v_2",1,"small","materials-card__file-icon"],["data-e2e","materials__item-size",1,"skb-p1","materials-card__file-size"]],template:function(t,e){1&t&&(s.Gc(0,"app-sb-text-card",0),s.Gc(1,"app-sb-text-card-header",1),s.Gd(2),s.Xc(3,"transloco"),s.Fc(),s.Gc(4,"app-sb-text-card-body"),s.Gc(5,"app-sb-list"),s.Ed(6,E,11,13,"app-sb-list-item",2),s.Fc(),s.Fc(),s.Gc(7,"app-sb-text-card-footer"),s.Gc(8,"button",3),s.Sc("click",(function(){return e.downloadAll(e.files)})),s.Gd(9),s.Xc(10,"transloco"),s.Fc(),s.Fc(),s.Fc()),2&t&&(s.nc(2),s.Hd(s.Yc(3,5,"tutorial.materialsCard.titleMaterials")),s.nc(4),s.ed("ngForOf",e.files),s.nc(2),s.ed("appStatLogOnClick",e.statLogEvents.lesson_all_files_download)("eventParams",s.jd(9,k,e.lessonToken)),s.nc(1),s.Id(" ",s.Yc(10,7,"tutorial.materialsCard.downloadAll")," "))},directives:[_.a,g.c,g.a,O,x.t,g.b,C.a,w,x.u,S.a],pipes:[r.g,p,M.a],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .materials-card__title[_ngcontent-%COMP%]{font-size:24px;line-height:36px;margin-bottom:24px;font-weight:600}@media (max-width:767.9px){[_nghost-%COMP%]   .materials-card__button[_ngcontent-%COMP%]{justify-content:center;width:100%}}[_nghost-%COMP%]   .materials-card__item[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .materials-card__item[_ngcontent-%COMP%]   .materials-card__file-icon[_ngcontent-%COMP%]{transition:color var(--skb-transition)}[_nghost-%COMP%]   .materials-card__item[_ngcontent-%COMP%]:hover   .materials-card__file-icon[_ngcontent-%COMP%]{color:var(--ui-sb-color-element-brand)}[_nghost-%COMP%]   .materials-card__header[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto -webkit-min-content;grid-template-columns:auto min-content;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}[_nghost-%COMP%]   .materials-card__footer[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:nowrap;margin-left:40px}[_nghost-%COMP%]   .materials-card__file-name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}[_nghost-%COMP%]   .materials-card__file-size[_ngcontent-%COMP%]{margin-right:20px;color:var(--ui-sb-color-text-secondary);white-space:nowrap}@media (max-width:767.9px){[_nghost-%COMP%]   .materials-card__file-size[_ngcontent-%COMP%]{display:none}}[_nghost-%COMP%]   .materials-card__file-icon[_ngcontent-%COMP%]{color:var(--ui-sb-color-icon-secondary)}"],changeDetection:0}),t=Object(i.b)([Object(l.a)()],t),t})()}}]);