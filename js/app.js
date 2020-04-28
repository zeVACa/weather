

let popup = {
   p: document.querySelector('.popup__text'),
   text: [
      'Привет, меня зовут Sun. Я был создан для того, чтоб помочь выбрать тебе день для отдыха на свежем воздухе :)',
      'Для того, чтоб я мог помочь тебе, прошу ответить на пару вопросов',
      'ты можешь выбрать найти свой город или выбрать из шорт-листа'
   ],
   isActive: [[0, 1], [1, 1][1, 0]],
   currentPage: 0,
   buttonNext: document.querySelector('.popup__next'),
   buttonBack: document.querySelector('.popup__back'),
   closeButton: document.querySelector('.popup__close'),

   toNextPage: function () {
      if (popup.currentPage < popup.text.length - 1)
         popup.currentPage++;

      popup.p.textContent = popup.text[popup.currentPage];
      document.querySelector('.popup__counter').textContent = popup.currentPage + 1;

      // if (popup.isActive[popup.currentPage][0] && popup.currentPage <= popup.isActive.length) {
      //    popup.buttonBack.classList.add('arrow_active');
      //    console.log(1);
      // } else {
      //    popup.buttonBack.classList.remove('arrow_acive');
      // }

      if (popup.currentPage === popup.text.length - 1)
         popup.buttonNext.classList.remove('arrow_active');


      if (popup.currentPage > 0)
         popup.buttonBack.classList.add('arrow_active');

   },

   toEarlyPage: function () {
      if (popup.currentPage > 0)
         popup.currentPage--;

      popup.p.textContent = popup.text[popup.currentPage];
      document.querySelector('.popup__counter').textContent = popup.currentPage + 1;

      if (popup.currentPage === 0)
         popup.buttonBack.classList.remove('arrow_active');


      if (popup.currentPage < popup.text.length - 1)
         popup.buttonNext.classList.add('arrow_active');
   },

   toClose: function () {
      document.querySelector('.popup').classList.add('hidden');
   }
}

popup.buttonNext.onclick = popup.toNextPage;
popup.buttonBack.onclick = popup.toEarlyPage;
popup.closeButton.onclick = popup.toClose;

// .popup.bac

// i = 0;
// document.querySelector('.popup__next').onclick = () => {
//    if (i < popup.text.length - 1)
//       i++;

//    document.querySelector('.popup__text').textContent = popup.text[i];
// }

// if (popup.isActive[i][0]) {
//    document.querySelector('.popup__next').classList.add('active');
// } else {
//    document.querySelector('.popup__next').classList.remove('active');
// }

// document.querySelector('.popup__back').onclick = () => {
//    if (i > 0)
//       i--;

//    document.querySelector('.popup__text').textContent = popup.text[i];
// }