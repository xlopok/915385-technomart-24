var linkFeedback = document.querySelector(".button-red2"); //Отслеживаем  ссылку для вызова окна НАПИШИТЕ НАМ
var form = document.querySelector(".appointment .appointment-form"); // form
var modalMap = document.querySelector("section.modal-map"); // modal map


var catalogBuyLink = document.querySelectorAll(".catalog-item .actions .buy"); //Отслеживаем кномпу для вызова УСПЕШНАЯ ПОКУПКА на странице каталога



// Отслеживание клика по кнопке для показа попапа фидбека на гл странице

if (linkFeedback) {

    
    var popupFeedback = document.querySelector(".appointment");
    var closeFeedback =  popupFeedback.querySelector(".appointment .button-close");
    var feedbackName = popupFeedback.querySelector(".appointment-item input[name=name]");
    

    linkFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-feedback-open");
    feedbackName.focus();
});
//Отслеживание клика по кнопке закрытия попапа фидбека на гл странице
    closeFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-feedback-open");
    popupFeedback.classList.remove("modal-error");
  });


  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (popupFeedback.classList.contains("modal-feedback-open")) {
        evt.preventDefault();
        popupFeedback.remove("modal-feedback-open");
        popupFeedback.classList.remove("modal-error");
      }
    }
  });




};







if(form) {

    var feedbackPassword = popupFeedback.querySelector(".appointment-item input[name=email]");
    var feedbackTextarea = popupFeedback.querySelector(".appointment-form .feedback-area-bar");
    form.addEventListener("submit", function(evt) {

        if (!feedbackName.value || !feedbackPassword.value || !feedbackTextarea.value ) {
        evt.preventDefault();
        // popupFeedback.classList.remove("modal-error");
        alert("Заполните все поля, чтобы отправить форму");
        // popupFeedback.classList.add("modal-error");
        }
    });
};

// БОЛЬШАЯ КАРТА НА ГЛАВНОЙ

if(modalMap) {
    var miniMap = document.querySelector(".contacts p img");
    var closeMap = document.querySelector(".modal-map button");

    

    miniMap.addEventListener("click", function(evt) {
        evt.preventDefault();
        modalMap.classList.add("modal-map-open");
    });

    closeMap.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalMap.classList.remove("modal-map-open");
       
      });


};


window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (modalMap.classList.contains("modal-map-open")) {
        evt.preventDefault();
        modalMap.remove("modal-map-open");
        modalMap.classList.remove("modal-error");
      }
    }
  });




//Отслеживание клика по кнопке покупки для показа попапа успешной покупки на странице каталога

if (catalogBuyLink) {

    
    var popupBuy = document.querySelector(".hidden-catalog");
    var closeBuy = popupBuy.querySelector(".hidden-catalog .button-close");

    for (var i = 0; i < catalogBuyLink.length; i++) {
    var self = catalogBuyLink[i];

    self.addEventListener('click', function (evt) {  
        // prevent browser's default action
        evt.preventDefault();
        popupBuy.classList.add("hidden-catalog-open");    
    });
}

//Отслеживание клика по кнопке закрытия попапа фидбека на гл странице
closeBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBuy.classList.remove("hidden-catalog-open");
    popupFeedback.classList.remove("modal-error");
  });

//   window.addEventListener("keydown", function(evt) {
//     if (evt.keyCode === 27) {
//       if (popupBuy.classList.contains("hidden-catalog-open")) {
//         evt.preventDefault();
//         popupBuy.remove("hidden-catalog-open");
//         popupBuy.classList.remove("modal-error");
//       }
//     }
//   });

};




// ESC = CLOSE POPUP


