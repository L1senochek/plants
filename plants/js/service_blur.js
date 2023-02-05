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

for (const iterator of itemPlanting) {
  plantingArr.push(iterator);
}
for (const iterator of itemGardens) {
  gardensArr.push(iterator);
}
for (const iterator of itemLawn) {
  lawnArr.push(iterator);
}
for (const iterator of servicesItem) {
  servicesItemArr.push(iterator);
}
for (const iterator of btnService) {
  btnsArr.push(iterator);
}
const arr = [];
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
    function removeAllBlur () {
      servicesItemArr.forEach(servicesItemelem => {
        servicesItemelem.classList.remove('_activeBlur');
      });
      return servicesItemArr;
    }
    function addGardensBlur() {
      gardensArr.forEach(gardenselem => {
        gardenselem.classList.toggle('_activeBlur');
      });
      return gardensArr;
    }
    function addLawnBlur() {
      lawnArr.forEach(lawnelem => {
        lawnelem.classList.toggle('_activeBlur');
      });
      return lawnArr;
    }
    function addPlantingBlur() {
      plantingArr.forEach(plantingelem => {
        plantingelem.classList.toggle('_activeBlur');
      });
      return plantingArr;
    }
    if (arrActive.length === 0) {
      removeAllBlur ();
    } else if(arrActive.length === 1){
      removeAllBlur ();
      if (arrActive[0].classList.contains('gardens')) {
        addLawnBlur();
        addPlantingBlur();
      } else if(arrActive[0].classList.contains('lawn')){
        addGardensBlur();
        addPlantingBlur();
      } else if(arrActive[0].classList.contains('planting')){
        addGardensBlur();
        addLawnBlur();
      }  
    } else if(arrActive.length === 2){
      removeAllBlur ();     
      if ((arrActive[0].classList.contains('gardens') && arrActive[1].classList.contains('lawn')) || (arrActive[1].classList.contains('gardens') && arrActive[0].classList.contains('lawn'))) {
        addPlantingBlur();
      } else if((arrActive[0].classList.contains('lawn') && arrActive[1].classList.contains('planting')) || (arrActive[1].classList.contains('lawn') && arrActive[0].classList.contains('planting'))){
        addGardensBlur();
      } else if((arrActive[0].classList.contains('gardens') && arrActive[1].classList.contains('planting')) || (arrActive[1].classList.contains('gardens') && arrActive[0].classList.contains('planting'))){
        addLawnBlur();
      }
    }
  });
};