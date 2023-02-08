"use strict"

const btnDropdownWrapper = document.querySelectorAll('.contacts__btn-dropdown__wrapper');
const btnContacts = document.querySelectorAll('.contacts__btn');
const btnDropdown = document.querySelectorAll('.contacts__btn-dropdown');
const contactsAdressesWrapper = document.querySelectorAll('contacts__adresses__wrapper');
const contactsAdresses = document.getElementsByClassName('contacts__adresses');
const dropdownLinks = document.querySelectorAll('.dropdown__link__wrapper');
const adressesCanadaigua = document.querySelectorAll('.adresses-canadaigua');
const adressesNewYork = document.querySelectorAll('.adresses-new-york');
const adressesYonkers = document.querySelectorAll('.adresses-yonkers');
const adressesSherrill = document.querySelectorAll('.adresses-sherrill');
const btnSvg = document.querySelectorAll('.btn__svg');
let btnDropdownArr = [];

for (const iterator of btnDropdown) {
  btnDropdownArr.push(iterator);
}

btnContacts[0].addEventListener("click", function () {
  toggleClass(btnDropdownWrapper, 'btn-dropdown__wrapper-active');
  toggleClass(btnContacts, 'contacts__btn-active');
  toggleClass(btnDropdown, '_dropdown-active');
  removeAll();
  if (btnContacts[0].classList.contains('_btn-active') && btnContacts[0].classList.contains('contacts__btn-active')) {
    removedClass(btnContacts, 'contacts__btn-active');
  }
  toggleClass(btnContacts, '_btn-active');
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

function removedClass(parameter, activeClass) {
  return parameter.forEach(x => x.classList.remove(activeClass));
}

function toggleClass(parameter, activeClass) {
  return parameter.forEach(x => x.classList.toggle(activeClass));
}

dropdownLinks.forEach(link => {
  link.addEventListener('click', selectLink);
});

function selectLink() {
  let textLink = this.innerText;
  let selectedLink = this.closest('.contacts__btn-dropdown__wrapper');
  let currentLinkText = selectedLink.querySelector('.btn__city');
  currentLinkText.innerText = textLink;
  removedClass(btnContacts, 'contacts__btn-active');
  removedClass(btnContacts, '_btn-active');
  removedClass(btnDropdown, '_dropdown-active');
  btnContacts.forEach(x => x.classList.add('_selected-city'));

  if (textLink === 'Canandaigua, NY') {
    removeAdresses(adressesYonkers, '_adresses-yonkers__active');
    removeAdresses(adressesYonkers, '_adresses-yonkers__active');
    removeAdresses(adressesSherrill, '_adresses-new-york__active');
    addAdresses(adressesCanadaigua, '_adresses-canadaigua__active');
  } else if (textLink === 'New York City') {
    removeAdresses(adressesCanadaigua, '_adresses-canadaigua__active');
    removeAdresses(adressesYonkers, '_adresses-yonkers__active');
    removeAdresses(adressesSherrill, '_adresses-new-york__active');
    addAdresses(adressesNewYork, '_adresses-new-york__active');
  } else if (textLink === 'Yonkers, NY') {
    removeAdresses(adressesCanadaigua, '_adresses-canadaigua__active');
    removeAdresses(adressesNewYork, '_adresses-new-york__active');
    removeAdresses(adressesSherrill, '_adresses-new-york__active');
    addAdresses(adressesYonkers, '_adresses-yonkers__active');
  } else if (textLink === 'Sherrill, NY') {
    removeAdresses(adressesCanadaigua, '_adresses-canadaigua__active');
    removeAdresses(adressesNewYork, '_adresses-new-york__active');
    removeAdresses(adressesYonkers, '_adresses-yonkers__active');
    addAdresses(adressesSherrill, '_adresses-sherrill__active');
  }
}

function addAdresses(adresses, active) {
  adresses.forEach(x => x.classList.toggle(active));
}

function removeAdresses(adresses, active) {
  adresses.forEach(x => x.classList.remove(active));
}