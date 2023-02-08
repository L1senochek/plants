"use strict"

const btnService = document.querySelectorAll('.btns__btn');
const btns = document.querySelector('.services__btns');
const servicesItem = document.querySelectorAll('.services-item');
const itemPlanting = document.querySelectorAll('.planting-item');
const itemGardens = document.querySelectorAll('.garden-item');
const itemLawn = document.querySelectorAll('.lawn-item');
const btnGardens = document.querySelectorAll('.gardens');
const btnLawn = document.querySelectorAll('.lawn');
const btnPlanting = document.querySelectorAll('.planting');
const btnsArr = [];
const plantingArr = [];
const gardensArr = [];
const lawnArr = [];
const servicesItemArr = [];

function pushArr(item, arr) {
  for (const iterator of item) {
    arr.push(iterator);
  }
  return arr;
}

pushArr(itemPlanting, plantingArr);
pushArr(itemGardens, gardensArr);
pushArr(itemLawn, lawnArr);
pushArr(servicesItem, servicesItemArr);
pushArr(btnService, btnsArr);

for (let i = 0; i < btnsArr.length; i++) {
  btnsArr[i].addEventListener("click", function () {
    btnsArr[i].classList.toggle('_btnActive');
    const btnActive = document.querySelectorAll('._btnActive');
    let arrActive = [];
    if (btnActive) {
      btnActive.forEach(node => {
        arrActive.push(node);
      });
    }
    const setFullArr = Array.from(new Set(btnsArr));
    const setActive = Array.from(new Set(arrActive));
    let filterArr = setFullArr.filter(i => !setActive.includes(i));
    if (arrActive.length >= 2) {
      filterArr.forEach(element => {
        element.setAttribute('disabled', true);
      });
    } else {
      filterArr.forEach(element => {
        element.removeAttribute('disabled', true);
      });
    }
    ////////////////////////////////////////////////////////////////////////
    function removeAllBlur() {
      servicesItemArr.forEach(servicesItemelem => {
        servicesItemelem.classList.remove('_activeBlur');
      });
      return servicesItemArr;
    }
    function addBlur(arr) {
      arr.forEach(elem => {
        elem.classList.toggle('_activeBlur');
      });
      return arr;
    }
    if (arrActive.length === 0) {
      removeAllBlur();
    } else if (arrActive.length === 1) {
      removeAllBlur();
      if (arrActive[0].classList.contains('gardens')) {
        addBlur(lawnArr);
        addBlur(plantingArr);
      } else if (arrActive[0].classList.contains('lawn')) {
        addBlur(gardensArr);
        addBlur(plantingArr);
      } else if (arrActive[0].classList.contains('planting')) {
        addBlur(gardensArr);
        addBlur(lawnArr);
      }
    } else if (arrActive.length === 2) {
      removeAllBlur();
      if ((arrActive[0].classList.contains('gardens') && arrActive[1].classList.contains('lawn')) || (arrActive[1].classList.contains('gardens') && arrActive[0].classList.contains('lawn'))) {
        addBlur(plantingArr);
      } else if ((arrActive[0].classList.contains('lawn') && arrActive[1].classList.contains('planting')) || (arrActive[1].classList.contains('lawn') && arrActive[0].classList.contains('planting'))) {
        addBlur(gardensArr);
      } else if ((arrActive[0].classList.contains('gardens') && arrActive[1].classList.contains('planting')) || (arrActive[1].classList.contains('gardens') && arrActive[0].classList.contains('planting'))) {
        addBlur(lawnArr);
      }
    }
  });
};