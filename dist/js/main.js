const slides = [
  `<div class="randomMeal__item">
<div class="randomMeal__img"></div>
<div class="randomMeal__info">
  <div class="randomMeal__name"><p>Big Mac</p></div>
  <button class="randomMeal__category btn--primary">Beef</button>
</div>
</div>`,
  `<div class="randomMeal__item">
<div class="randomMeal__img"></div>
<div class="randomMeal__info">
  <div class="randomMeal__name"><p>Big Mac</p></div>
  <button class="randomMeal__category btn--primary">Beef</button>
</div>
</div>`,
  `<div class="randomMeal__item">
<div class="randomMeal__img"></div>
<div class="randomMeal__info">
  <div class="randomMeal__name"><p>Big Mac</p></div>
  <button class="randomMeal__category btn--primary">Beef</button>
</div>
</div>`,
  `<div class="randomMeal__item">
<div class="randomMeal__img"></div>
<div class="randomMeal__info">
  <div class="randomMeal__name"><p>Big Mac</p></div>
  <button class="randomMeal__category btn--primary">Beef</button>
</div>
</div>`,
];

const siema = document.querySelector('.siemass');
let innerHTML = '';
slides.forEach((element) => {
  innerHTML += element;
});

const firstSiema = new siemaUpdae(
  siema,
  innerHTML,
  {
    selector: '.siemass',
    perPage: 1,
  },
  '.next',
  '.prev'
);
firstSiema.createSiema();

const mySiema2 = new Siema({
  selector: '.siema2',
  perPage: 4,
  // loop: true,
});
