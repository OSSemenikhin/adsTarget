const $$ = {};
$$.choozzie = {
  generateId() {
    const symbols =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let id = "_";
    while (id.length < 7) {
      const random = symbols[Math.floor(Math.random() * symbols.length)];
      id += random;
    }
    if (document.querySelector(`#${id}`)) choozzie.generateId();
    return id;
  },
  create(options) {
    /*
      OPTIONS
        options = {
          element: '',*
          current: num,*                                   --* current || placeholder
          placeholder: '',*                                --* current || placeholder
          icon: 'svg',*
          currentHidden: true,
          dataSet: { data: '', value: '', },
          items: [
            {
              name: '',
              secondName: '',
              dataSet: { data: '', value: '' },
              onClick: function,
            },
          ],
          classToAdd: {
            header: '',
            current: '',
            icon: '',
            list: '',
            item: '',
          },*
        }

      ATTR
      ${itemDataSet} - for options.items.dataSet
      data-choozzie_value=${item.name}_${options.element} - for add options.items.onClick to addEventListener
      data-choozzie_target=${options.element} <> data-choozzie_current="${options.element}" - push data from target to current
      data-choozzie_hidden="true" - hide current option element
    */
    if(!options.hasOwnProperty('collapse')) options.collapse = true;

    const createItem = (opt, ind, item, sel = false) => {
      const selected = sel
        ? `aria-selected="true"`
        : "";
      const hideCurrent = sel
        ? opt.currentHidden ? `data-choozzie_hidden="true"` : ""
        : "";
      const itemDataSet = item.dataSet
        ? `data-${item.dataSet.data} = ${item.dataSet.value}`
        : "";
      const classNameItem = options.classToAdd.item
        ? options.classToAdd.item
        : "";
      const classNameOption = options.classToAdd.option
        ? options.classToAdd.option
        : "";
      if (opt.checkBox) {
        return /*html*/ `<li id=${opt.element}_${ind + 1}
                            class="${classNameItem} choozzie__item"
                            >
                              <label class="${classNameOption} choozzie__option"
                                      ${itemDataSet}
                                      data-choozzie_target=${opt.element}
                                      data-choozzie_value=${item.secondName ? item.secondName : item.name}_${opt.element}
                                      role="option"
                                      tabindex="-1"
                                    >
                                    <input class="choozzie__checkbox--hidden" type="checkbox">
                                    <span class="choozzie__checkbox"></span>
                                    <span class="choozzie__name">
                                      ${item.name}
                                    </span>
                              </label>
                        </li>`;
      } else if (item.input) {
        return /*html*/ `<li id=${opt.element}_${ind + 1}
                            class="${classNameItem} choozzie__item"
                            >
                            <label class="${classNameOption} choozzie__option"
                            ${itemDataSet}
                            data-choozzie_target=${opt.element}
                            data-choozzie_value=${item.secondName ? item.secondName : item.name}_${opt.element}
                            role="option"
                            tabindex="-1"
                          >
                            <span class="choozzie__name">
                              ${item.name}
                            </span>
                            <input class="choozzie__input" type="text" placeholder=${item.placeholder}>
                    </label>
                        </li>`;


      } else {
        return /*html*/ `<li id=${opt.element}_${ind + 1}
                            class="${classNameItem} choozzie__item"
                            ${hideCurrent}
                            >
                              <button class="${classNameOption} choozzie__option"
                                      ${itemDataSet}
                                      data-choozzie_target=${opt.element}
                                      data-choozzie_value=${item.secondName ? item.secondName : item.name}_${opt.element}
                                      role="option"
                                      tabindex="-1"
                                      ${selected}
                                    >
                                      ${item.name}
                              </button>
                        </li>`;


      }
    };

    const createItems = () => {
      let items = "";
      for (let i = 0; i < options.items.length; i++) {
        if (options.current && options.current == (i + 1)) {
          items = items + createItem(options, i, options.items[i], true);
        } else {
          items = items + createItem(options, i, options.items[i]);
        }
      }
      return items;
    };

    const classNameHeader = options.classToAdd.header
      ? options.classToAdd.header
      : "";
    const classNameCurrent = options.classToAdd.current
      ? options.classToAdd.current
      : "";
    const classNameIcon = options.classToAdd.icon
      ? options.classToAdd.icon
      : "";
    const classNameList = options.classToAdd.list
      ? options.classToAdd.list
      : "";
    const placeholder = options.current
      ? options.items[options.current - 1].name
      : options.placeholder;
    const activeDescendant = options.current
      ? `aria-activedescendant=${options.element}_${options.current}`
      : "";

    const wrapper = document.getElementById(options.element);
    wrapper.classList.add("choozzie");
    if (options.dataSet) {
      wrapper.setAttribute(
        `data-${options.dataSet.data}`,
        `${options.dataSet.value}`
      );
    }
    wrapper.innerHTML = /*html*/ `
      <button class="${classNameHeader} choozzie__button"
              id="${options.element}_button"
              aria-haspopup="listbox"
              aria-labelledby="${options.element}_button"
              >
              <span class="${classNameCurrent} choozzie__current"
              data-choozzie_current="${options.element}"
                      >
                      ${placeholder}
                </span>
                <span class="${classNameIcon} choozzie__icon" aria-hidden="true">
                ${options.icon}
                </span>
                <span class="choozzie__aria-label"
                      id="${options.element}_aria-label"
                    >
                    Нажмите на стрелку, чтобы выбрать элемент
                </span>
      </button>
      <ul class="${classNameList} choozzie__list"
          id="${options.element}_list"
          role="listbox"
          tabindex="-1"
          aria-labelledby="ariaLabel"
          ${activeDescendant}
          >${createItems(options)}</ul>
    `;

    const list = document.getElementById(`${options.element}_list`);
    const listPt = Number(getComputedStyle(list).paddingTop.slice(0, 3));
    const listPb = Number(getComputedStyle(list).paddingBottom.slice(0, 3));
    const listPaddingTopBottom = listPt + listPb;
    const listHeight = list.clientHeight - listPaddingTopBottom;
    const itemsNodes = list.childNodes;
    const itemsArr = Array.from(list.childNodes);
    let col = 1;
    let row = 1;
    let height = 0;
    for (let i = 0; i < itemsNodes.length; i++) {
      height = height + itemsNodes[i].clientHeight;
      if (height > listHeight) {
        col++;
        row = 1;
        height = itemsNodes[i].clientHeight;
      }
      itemsNodes[i].choozzieCol = col;
      itemsNodes[i].choozzieRow = row;
      row++;
    }
    const choozzie = {
      opt: options,
      wrapper: wrapper,
      button: wrapper.querySelector(`#${options.element}_button`),
      list: list,

      state: {
        open: false,
        activeDescendant: options.current
          ? `${options.element}_${options.current}`
          : null,
        itemNodes: itemsNodes,
        itemArr: itemsArr,
        col: col,

        setActiveDescendant(desc) {
          choozzie.state.activeDescendant = desc;
        },
      },

      checkBoxesCollapse(element){
        const newCurrent = element ? element.querySelector('.choozzie__checkbox--hidden') : null;
        const checkBoxes = choozzie.list.querySelectorAll('.choozzie__checkbox--hidden');
        checkBoxes.forEach(item => {
          if (item != newCurrent) {
            item.checked = false;
          }
        });
      },

      chooseCurrent(element) {
        if (choozzie.opt.checkBox && choozzie.opt.checkBoxCollapse) choozzie.checkBoxesCollapse(element);
        choozzie.opt.items.map((item) => {
          if (element.textContent.trim() === item.name) {
            if (item.onClick) item.onClick(element, item);
          }
        });
        const checkSelected = wrapper.querySelector('[aria-selected="true"]');
        if (checkSelected) checkSelected.removeAttribute("aria-selected");
        element.setAttribute("aria-selected", "true");
        if (choozzie.opt.currentHidden) {
          const checkHidden = wrapper.querySelector('[data-choozzie_hidden="true"]');
          checkHidden.removeAttribute("data-choozzie_hidden");
          element.parentElement.setAttribute("data-choozzie_hidden", "true");
        };
        const current = wrapper.querySelector(`[data-choozzie_current=${element.dataset.choozzie_target}]`);
        if (!choozzie.opt.holdPlaceholder) current.textContent = element.textContent.trim();
        choozzie.list.setAttribute(`aria-activedescendant`, element.parentElement.id);
      },

      reset(element) {
        const current = document.querySelector(`[data-choozzie_current=${element}]`);
        current.textContent = options.placeholder;
        choozzie.state.activeDescendant = options.current
          ? `${options.element}_${options.current}`
          : null;
          choozzie.checkBoxesCollapse();
      },

      onClick(event) {
        if (event.target.dataset.choozzie_target) {
          choozzie.chooseCurrent(event.target);
          if(choozzie.opt.collapse) {
            choozzie.close();
          }
          choozzie.state.activeDescendant = event.target.parentElement.id;
        }
        else if (event.target !== choozzie.button &&
          !event.target.classList.contains('choozzie__checkbox--hidden') &&
          !event.target.classList.contains('choozzie__input')) {
          choozzie.close();
        }
      },

      open() {
        // if (destroyed) return console.log('Choozzie is destroyed...');
        choozzie.list.classList.add("open");
        choozzie.button.classList.add("open");
        choozzie.button.setAttribute("aria-expanded", "true");
        choozzie.state.open = true;
        document.addEventListener("click", choozzie.onClick);
      },

      close() {
        choozzie.defocusItem();
        choozzie.list.classList.remove("open");
        choozzie.button.classList.remove("open");
        choozzie.button.removeAttribute("aria-expanded");
        document.removeEventListener("click", choozzie.onClick);
        choozzie.state.open = false;
      },

      destroy() {
        choozzie.button.removeEventListener("click", choozzie.open);
        choozzie.button.removeEventListener("keydown", (e) => {
          choozzie.onKey(e);
        });
        choozzie.list.removeEventListener("keydown", choozzie.onKey);
        choozzie.wrapper.classList.remove('choozzie');
        choozzie.wrapper.innerHTML = '';
      },

      focusItem(element) {
        choozzie.defocusItem();
        if (element) element.classList.add("focused");
      },

      defocusItem() {
        document
          .querySelectorAll(".focused")
          .forEach((element) => element.classList.remove("focused"));
      },

      choseFirstItem() {
        const firstItem = wrapper.querySelector(
          `#${choozzie.list.children[0].id}`
        );
        choozzie.focusItem(firstItem);
        choozzie.chooseCurrent(firstItem.children[0]);
        choozzie.state.activeDescendant = firstItem.id;
      },

      choseLastItem() {
        const items = wrapper.querySelectorAll(".choozzie__item");
        choozzie.focusItem(items[items.length - 1]);
        choozzie.chooseCurrent(items[items.length - 1].children[0]);
        choozzie.state.activeDescendant = items[items.length - 1].id;
      },

      choseNewCurrent(element) {
        choozzie.focusItem(element);
        choozzie.chooseCurrent(element.children[0]);
        choozzie.state.activeDescendant = element.id;
      },

      checkDescendantAndOpen() {
        if (choozzie.state.activeDescendant === null) choozzie.choseFirstItem();
        else
          choozzie.focusItem(
            document.getElementById(choozzie.state.activeDescendant)
          );
        choozzie.open();
      },

      checkLastFocusedItem() {
        if (choozzie.state.activeDescendant)
          choozzie.focusItem(
            document.getElementById(choozzie.state.activeDescendant)
          );
        else choozzie.choseFirstItem();
      },

      onKey(event) {
        const focused = wrapper.querySelector(".focused");
        switch (event.key) {
          case "Home":
            if (!choozzie.state.open) break;
            else choozzie.choseFirstItem();
            break;
          case "End":
            if (!choozzie.state.open) break;
            else choozzie.choseLastItem();
            break;
          case "Escape":
            choozzie.close();
            break;
          case "Tab":
            if (choozzie.state.open) choozzie.close();
            break;
          case "Enter":
            if (!choozzie.state.open) {
              choozzie.open();
              if (choozzie.state.activeDescendant !== null)
                choozzie.focusItem(
                  document.getElementById(choozzie.state.activeDescendant)
                );
            } else if (choozzie.state.open) {
              event.preventDefault();
              choozzie.close();
            }
            break;
          case "ArrowDown":
            event.preventDefault();
            if (!choozzie.state.open) choozzie.checkDescendantAndOpen();
            else if (choozzie.state.open && !focused)
              choozzie.checkLastFocusedItem();
            else {
              let newCurrent = document.getElementById(choozzie.state.activeDescendant);
              newCurrent = newCurrent.nextElementSibling;
              if (newCurrent) {
                choozzie.choseNewCurrent(newCurrent);
              } else choozzie.choseFirstItem();
            }
            break;
          case "ArrowUp":
            event.preventDefault();
            if (!choozzie.state.open) choozzie.checkDescendantAndOpen();
            else if (choozzie.state.open && !focused)
              choozzie.checkLastFocusedItem();
            else {
              let newCurrent = document.getElementById(choozzie.state.activeDescendant);
              newCurrent = newCurrent.previousSibling;
              if (newCurrent) {
                choozzie.choseNewCurrent(newCurrent);
              } else choozzie.choseLastItem();
            }
            break;
          case "ArrowRight":
            event.preventDefault();
            if (choozzie.state.open && !focused)
              choozzie.checkLastFocusedItem();
            else if (choozzie.state.open && focused) {
              let itemToFocus = -1;
              for (const item of choozzie.state.itemArr) {
                if (
                  item.choozzieCol === focused.choozzieCol + 1 &&
                  item.choozzieRow === focused.choozzieRow
                ) {
                  itemToFocus =
                    choozzie.state.itemNodes[
                      choozzie.state.itemArr.indexOf(item)
                    ];
                }
              }
              if (itemToFocus !== -1) choozzie.choseNewCurrent(itemToFocus);
              else {
                if (focused.choozzieCol === choozzie.state.col) {
                  for (const item of choozzie.state.itemArr) {
                    if (
                      item.choozzieCol === 1 &&
                      item.choozzieRow === focused.choozzieRow
                    ) {
                      itemToFocus =
                        choozzie.state.itemNodes[
                          choozzie.state.itemArr.indexOf(item)
                        ];
                      choozzie.choseNewCurrent(itemToFocus);
                    }
                  }
                } else choozzie.choseLastItem();
              }
            }
            break;
          case "ArrowLeft":
            event.preventDefault();
            if (choozzie.state.open && !focused)
              choozzie.checkLastFocusedItem();
            else if (choozzie.state.open && focused) {
              let itemToFocus = -1;
              for (const item of choozzie.state.itemArr) {
                if (
                  item.choozzieCol === focused.choozzieCol - 1 &&
                  item.choozzieRow === focused.choozzieRow
                ) {
                  itemToFocus =
                    choozzie.state.itemNodes[
                      choozzie.state.itemArr.indexOf(item)
                    ];
                }
              }
              if (itemToFocus !== -1) choozzie.choseNewCurrent(itemToFocus);
              else if (focused.choozzieCol === 1) {
                for (const item of choozzie.state.itemArr) {
                  if (
                    item.choozzieCol === choozzie.state.col &&
                    item.choozzieRow === focused.choozzieRow
                  ) {
                    itemToFocus =
                      choozzie.state.itemNodes[
                        choozzie.state.itemArr.indexOf(item)
                      ];
                    choozzie.choseNewCurrent(itemToFocus);
                  }
                  if (itemToFocus !== -1) choozzie.choseNewCurrent(itemToFocus);
                  else choozzie.choseLastItem();
                }
              }
            }
            break;
        }
      },
    };

    options.items.forEach((item) => {
      if (item.onClick) {
        const element = document.querySelector(
          `[data-choozzie_value=${item.secondName ? item.secondName : item.name}_${options.element}]`
        );
      }
    });

    choozzie.button.addEventListener("click", choozzie.open);
    choozzie.button.addEventListener("keydown", (e) => {
      choozzie.onKey(e);
    });
    choozzie.list.addEventListener("keydown", choozzie.onKey);
    return choozzie;
  },
};
window.$$ = $$;
