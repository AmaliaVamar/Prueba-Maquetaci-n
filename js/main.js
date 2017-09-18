"use strict"

var btnNav = document.getElementById("btnNav");
var menuSmall = document.getElementById("menuSmall");

function showMenu(){
  menuSmall.classList.toggle("show-menu");
}
btnNav.addEventListener("click", showMenu);



var btnCategories = document.getElementById("categoriesOpenList");
var listCategories = document.getElementById("categoriesList");

function showList(){
  listCategories.classList.toggle("show-list");
}
btnCategories.addEventListener("click", showList);



var btnSubList = document.getElementById("btnSubList");
var subList = document.getElementById("subList");

function showSubList(){
  subList.classList.toggle("show-sublist");
}
btnSubList.addEventListener("click", showSubList);

var form = document.getElementById("form");
var modal = document.getElementById("modal");
var modalTextEmail = document.getElementById("modalTextEmail");
var modalText = document.getElementById("modalText");
var modalClose = document.getElementById("modalClose");
var inputName = document.getElementById("inputName");
var inputEmail = document.getElementById("inputEmail");
var inputSend = document.getElementById("inputSend");

function sendData (e) {
  e.preventDefault();
  var name = inputName.value;
  var email = inputEmail.value;
  var emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if((name === "" || email === "") || !emailTest.test(email)){
    if(name === ""){
      inputName.classList.add("error-data");
    }if(email === ""){
      inputEmail.classList.add("error-data");
    }if(!emailTest.test(email)){
      modalTextEmail.innerHTML = ("Introduzca un email válido");
      inputEmail.classList.add("error-data");
    }
    modal.classList.add("modal-open");
    modalText.innerHTML = ("Revise los campos");
  } else {
    modal.classList.add("modal-open");
    modalText.innerHTML = ("Datos enviados");
    form.reset();
  }

}
inputSend.addEventListener("click", sendData);

function closeModal() {
  modal.classList.remove("modal-open");
  modalText.innerHTML = "";
  modalTextEmail.innerHTML = "";
}
modalClose.addEventListener("click", closeModal);

function removeErrorName(){
  inputName.classList.remove("error-data");
}

function removeErrorEmail(){
  inputEmail.classList.remove("error-data");
}
