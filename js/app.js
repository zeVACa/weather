// === poppup ===

let popup = {
   p: document.querySelector('.popup__text'),
   text: [
      'Привет, меня зовут Sun. Я был создан для того, чтоб помочь выбрать тебе день для отдыха на свежем воздухе :)',
      'Для того, чтоб я мог помочь тебе, прошу ответить на пару вопросов',
      'ты можешь выбрать найти свой город или выбрать из шорт-листа'
   ],
   currentPage: 0,
   buttonNext: document.querySelector('.popup__next'),
   buttonBack: document.querySelector('.popup__back'),
   closeButton: document.querySelector('.popup__close'),

   toNextPage: function () {
      if (popup.currentPage < popup.text.length - 1)
         popup.currentPage++;

      popup.p.textContent = popup.text[popup.currentPage];
      document.querySelector('.popup__counter').textContent = popup.currentPage + 1;

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

document.querySelector('.quantity-pages').textContent = popup.text.length;

popup.buttonNext.onclick = popup.toNextPage;
popup.buttonBack.onclick = popup.toEarlyPage;
popup.closeButton.onclick = popup.toClose;

// 