var cafeOption1 = document.querySelector('.cafe-eat');
var cafeOption2 = document.querySelector('.cafe-drink');
var cafeEatOption = document.querySelector('.cafe-eat-option');
var cafeDrinkOption = document.querySelector('.cafe-drink-option');


function showCafeEat(){
    cafeOption1.classList.add('point-cafe-eat');
    cafeOption2.classList.remove('point-cafe-drink');
    cafeEatOption.classList.remove('js-display-none');
    cafeDrinkOption.classList.remove('js-display-block');
    cafeDrinkOption.classList.add('js-display-none');

}

function showCafeDrink(){
    cafeOption1.classList.remove('point-cafe-eat');
    cafeOption2.classList.add('point-cafe-drink');
    cafeEatOption.classList.add('js-display-none');
    cafeDrinkOption.classList.add('js-display-block');
    cafeDrinkOption.classList.remove('js-display-none');
}

cafeOption1.addEventListener('click', showCafeEat);
cafeOption2.addEventListener('click', showCafeDrink);