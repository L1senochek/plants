"use strict"

const btnDropdownWrapper = document.querySelectorAll('.contacts__btn-dropdown__wrapper');
const btnContacts = document.querySelectorAll('.contacts__btn');
const btnDropdown = document.querySelectorAll('.contacts__btn-dropdown');
const contactsAdressesWrapper = document.querySelectorAll('contacts__adresses__wrapper');
const contactsAdresses  = document.getElementsByClassName('contacts__adresses');
const dropdownLinks = document.querySelectorAll('.dropdown__link__wrapper');
const adressesCanadaigua = document.querySelectorAll('.adresses-canadaigua');
const adressesNewYork = document.querySelectorAll('.adresses-new-york');
const adressesYonkers = document.querySelectorAll('.adresses-yonkers');
const adressesSherrill = document.querySelectorAll('.adresses-sherrill');
const btnSvg = document.querySelectorAll('.btn__svg');

let btnDropdownArr =[];

for (const iterator of btnDropdown) {
  btnDropdownArr.push(iterator);
}  

btnContacts[0].addEventListener("click", function() {
  btnDropdownWrapper.forEach(x => x.classList.toggle('btn-dropdown__wrapper-active'));
  btnContacts.forEach(x => x.classList.toggle('contacts__btn-active'));
  btnDropdown.forEach(x => x.classList.toggle('_dropdown-active'));
  removeAll();
  if (btnContacts[0].classList.contains('_btn-active') && btnContacts[0].classList.contains('contacts__btn-active')) {
    btnContacts.forEach(x => x.classList.remove('contacts__btn-active'));
  } 
  btnContacts.forEach(x => x.classList.toggle('_btn-active'));
});

function removeAll() {
  let elemCanadaigua = document.getElementById('adresses-canadaigua');
  let elemNewYork = document.getElementById('adresses-new-york');
  let elemYonkers = document.getElementById('adresses-yonkers');
  let elemSherrill = document.getElementById('adresses-sherrill');
  elemCanadaigua.classList.remove('_adresses-canadaigua__active');
  elemNewYork.classList.remove('_adresses-new-york__active');
  elemYonkers.classList.remove('_adresses-yonkers__active');
  elemSherrill.classList.remove('_adresses-sherrill__active');
}

dropdownLinks.forEach(link =>{
  link.addEventListener('click', selectLink);
});

function selectLink() {
  let textLink = this.innerText;
  let selectedLink = this.closest('.contacts__btn-dropdown__wrapper');
  let currentLinkText = selectedLink.querySelector('.btn__city');
  currentLinkText.innerText = textLink;
  btnContacts.forEach(x => x.classList.remove('contacts__btn-active'));
  btnContacts.forEach(x => x.classList.remove('_btn-active'));
  btnDropdown.forEach(x => x.classList.remove('_dropdown-active'));
  btnContacts.forEach(x => x.classList.add('_selected-city'));

  if (textLink === 'Canandaigua, NY') {
    removeAdressesNewYork();
    removeAdressesYonkers();
    removeAdressesSherrill();
    adressesCanadaigua.forEach(x => x.classList.toggle('_adresses-canadaigua__active'));
  } else if(textLink === 'New York City'){
    removeAdressesCanadaigua();
    removeAdressesYonkers();
    removeAdressesSherrill();
    adressesNewYork.forEach(x => x.classList.toggle('_adresses-new-york__active'));
  } else if(textLink === 'Yonkers, NY'){
    removeAdressesCanadaigua();
    removeAdressesNewYork();
    removeAdressesSherrill();
    adressesYonkers.forEach(x => x.classList.toggle('_adresses-yonkers__active'));
  } else if(textLink === 'Sherrill, NY'){
    removeAdressesCanadaigua();
    removeAdressesNewYork();
    removeAdressesYonkers();
    adressesSherrill.forEach(x => x.classList.toggle('_adresses-sherrill__active'));
  }

  function removeAdressesCanadaigua() {
    adressesCanadaigua.forEach(x => x.classList.remove('_adresses-canadaigua__active'));
  }
  function removeAdressesNewYork() {
    adressesNewYork.forEach(x => x.classList.remove('_adresses-new-york__active'));
  }
  function removeAdressesYonkers() {
    adressesYonkers.forEach(x => x.classList.remove('_adresses-yonkers__active'));
  }
  function removeAdressesSherrill() {
    adressesSherrill.forEach(x => x.classList.remove('_adresses-sherrill__active'));
  }
}