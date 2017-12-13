var link = document.querySelector(".button-feedback");
var bgpopup = document.querySelector(".feedback-container");
var popup = document.querySelector(".feedback-popup");
var close = document.querySelector(".feedback-button-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");


link.addEventListener("click", function(evt){
   evt.preventDefault(); 
   popup.classList.add("feedback-popup-show");
   bgpopup.classList.add("feedback-container-show");
   login.focus();
   
});

close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("feedback-popup-show");
    bgpopup.classList.remove("feedback-container-show");
    popup.classList.remove("modal-error");
});

bgpopup.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("feedback-popup-show");
    bgpopup.classList.remove("feedback-container-show")
});

form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    console.log(login.value);
    console.log(email.value);
    console.log(comment.value);
    
    if (!login.value || !email.value){
       evt.preventDefault();
       popup.classList.add("modal-error");
    } else {
      localStorage.setItem("login", login.value);
    }
    });

window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27){
    if (popup.classList.contains("feedback-popup-show")){
      popup.classList.remove("feedback-popup-show");  
      popup.classList.remove("modal-error");  
    } else{
    if (bgpopup.classList.contains("feedback-container-show")){
     bgpopup.classList.remove("feedback-container-show");   
    }    
    }
       
  }                   

});


















