let meals = [];
let numOfSlides = 1;
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const siema = document.querySelector(".siemass");
let innerHTML = `<div class="randomMeal__item">
<div class="randomMeal__img"></div>
<div class="randomMeal__info">
  <div class='randomMeal__name'></div>
  <button class="btn--primary randomMeal__category"></button>
</div>
</div>
`;
// first slide while loading
const firstSiema = new siemaUpdae(
  siema,
  innerHTML,
  {
    selector: ".siemass",
    perPage: 1,
  },
  ".next",
  ".prev"
);

firstSiema.createSiema();
fetchi();

function nextSlide() {
  numOfSlides++;
  let slides;
  slides = innerHTML.repeat(numOfSlides);
  firstSiema.innerHtmlText = slides;
  firstSiema.updateSiema();
  fetchi();
}

function fetchi() {
  const randomImages = document.querySelectorAll(".randomMeal__img");
  const randomNames = document.querySelectorAll(".randomMeal__name");
  const randomCategories = document.querySelectorAll(".randomMeal__category");
  let randomMeal = new FindMeal(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  randomMeal
    .GetAPI()
    .then((res) => res.data.meals)
    .then((data) => {
      randomImages[
        randomImages.length - 1
      ].style.background = `url(${data[0].strMealThumb})
       no-repeat center center/cover`;
      randomNames[randomNames.length - 1].textContent = data[0].strMeal;
      randomNames[randomNames.length - 1].textContent = data[0].strMeal;
      randomNames[randomNames.length - 1].textContent = data[0].strMeal;
      randomCategories[randomCategories.length - 1].textContent =
        data[0].strCategory;
      meals.push(data[0]);
      if (meals != []) {
        randomImages.forEach((rndImage, index) => {
          rndImage.style.background = `url(${meals[index].strMealThumb}) center center / cover no-repeat`;
        });
        randomNames.forEach((rndName, index) => {
          rndName.textContent = meals[index].strMeal;
        });
        randomCategories.forEach((rndCategory, index) => {
          rndCategory.textContent = meals[index].strCategory;
        });
      }
    });
}
