// "use strict"

const accordeonPriceItem = document.querySelectorAll('.price-item');
const itemAccordion = document.querySelectorAll('.item__accordion');

accordeonPriceItem.forEach(item => {
  item.addEventListener('click', e => {
    let accordeonItem = item.nextElementSibling;
    if (e.target.classList.contains('prise-item__accordion')) {
      accordeonItem.style.height = "0px";
      accordeonItem.style.backgroundColor = "#EDF2EC";
      e.target.classList.remove('prise-item__accordion');
      return;
    }
    accordeonPriceItem.forEach(e => e.classList.remove('prise-item__accordion', e.nextElementSibling.style.height = "0px"));
    e.target.classList.add('prise-item__accordion');
    accordeonItem.style.display = "block";
    accordeonItem.style.height = "117px";
    accordeonItem.style.backgroundColor = "#D6E7D2";
  });
});