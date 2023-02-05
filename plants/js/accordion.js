// "use strict"

const accordeonPriceItem = document.querySelectorAll('.price-item');
const itemAccordion = document.querySelectorAll('.item__accordion');

accordeonPriceItem.forEach(item => {
      item.addEventListener('click', e => {
        let panel = item.nextElementSibling;
      if (e.target.classList.contains('prise-item__accordion')) {
        panel.style.height = "0px";
        panel.style.backgroundColor= "#EDF2EC";
        e.target.classList.remove('prise-item__accordion');
        return;
      }
      accordeonPriceItem.forEach(e=>e.classList.remove('prise-item__accordion', e.nextElementSibling.style.height = "0px"));
      e.target.classList.add('prise-item__accordion');
      panel.style.display = "block";
      panel.style.height = "117px";
      panel.style.backgroundColor= "#D6E7D2";
    });
  });