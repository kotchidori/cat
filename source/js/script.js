const menu = document.querySelector(`.main-menu`);
const openButton = document.querySelector(`.header__burger`);

openButton.addEventListener(`click`, () => {
    menu.classList.toggle(`main-menu--hide`);
    if (openButton.classList.contains(`header__burger--open`)) {
        openButton.classList.remove(`header__burger--open`);
        openButton.classList.add(`header__burger--close`);
    } else {
        openButton.classList.remove(`header__burger--close`);
        openButton.classList.add(`header__burger--open`);
    }
})

// const menu = document.querySelector(`.main-menu`);
// const openButton = document.querySelector(`.header__burger`);

// openButton.addEventListener(`click`, () => {
//   menu.classList.toggle(`main-menu--hide`);
  
//   if(openButton.classList.contains(`header__burger--open`)) {
// 	 openButton.classList.remove(`header__burger--open`);
// 	 openButton.classList.add(`header__burger--close`);
//   } else {
// 	openButton.classList.remove(`header__burger--close`);
// 	openButton.classList.add(`header__burger--open`);
//   }
// });
