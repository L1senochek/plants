console.log(` 100 баллов:
\n
\n 1) При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service (+50)
\n  1.1) При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной (+ 20)
\n  1.2) Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. 
\n       При этом пользователь не может нажать одновременно все три кнопки услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной), 
\n       а привязанные к ней позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестають быть в блюре если это была единственная нажатая кнопка). (+20)
\n  1.3) Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10
\n 2) Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50
\n  2.1) При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. 
\n       Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. (+25)
\n  2.2) Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25
\n 3) В разделе contacts реализован select с выбором городов (+25)
\n  3.1) В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе (+15)
\n  3.2) При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу (+10)`);