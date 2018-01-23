var digits = "01234567";
var longitudeCode = 3;
var $linkToVerifyView = $('.verify-phone-next');
var $phoneNumberInput = $('#phone-number');


// Función que carag a jQuery
$(document).ready(loadPage);

// Función central. Carga las demás funciones declaradas posteriormente
function loadPage() {
  loadSplashView();
  loadMainView();
  $phoneNumberInput.keyup(validatePhoneNumber);
  $linkToVerifyView.click(codeGenerator);
}

// Función del splash y su determinación de tiempo
function loadSplashView() {
  setTimeout(function() {
    $("#view-splash").fadeOut(1500);
  },3000);
}

// Función de primee view para usuario - Login y sign up 
function loadMainView() {
  setTimeout(function() {
    $("#signup").fadeIn(1500);
  },3000);
}


// Funcion de validación de validación de numero y activación de botón
function validatePhoneNumber() {
  var $buttonToVerifyView = $('.verify-phone');

  if($(this).val().trim().length === 10) {
    $buttonToVerifyView.removeAttr('disabled');
  }else {
    $buttonToVerifyView.attr('disabled', true);
  }
}

// Función de generador de codigo random para usuario 
function codeGenerator(e){
  e.preventDefault();
  code = "";
  for(var i = 0; i < longitudeCode; i++) {
    randomNumber = Math.floor(Math.random() * digits.length);
    code += digits.substr(randomNumber, 1);
  }
  alert('Your code is: LAB-' + code);
  window.location.href = "verify-view.html";
}
