const category = new FindMeal(
  "https://www.themealdb.com/api/json/v1/1/categories.php"
);
category
  .GetAPI()
  .then((res) => res.data.categories)
  .then((data) => {
    console.log("data :>> ", data);
    let divs;
    data.forEach((category) => {
      divs += `
      <div id=${category.strCategory} class="category__item">
            <div class="category__img">
              <img src=${category.strCategoryThumb} alt="beef" />
            </div>
            <p class='category__name'>${category.strCategory}</p>
          </div>
      `;
    });
    document.querySelector(".siema2").innerHTML = divs;
    showCategory("Beef");
    data.forEach((category) => {
      document
        .getElementById(category.strCategory)
        .addEventListener("click", (e) => {
          showCategory(category.strCategory);
        });
    });

    const mySiema2 = new Siema({
      selector: ".siema2",
      perPage: {
        100: 3,
        375: 4,
        576: 5,
        768: 6,
      },
    });
  });
// category slider
const categoryItems = document.querySelector(".list__items");
const mealImages = document.querySelectorAll(".mealImg");
const mealCaption = document.querySelectorAll(".caption");
categoryItems.style.display = "none";

function showCategory(name) {
  if (document.querySelector(".selected")) {
    document.querySelector(".selected").classList.remove("selected");
  }
  document.getElementById(name).classList.add("selected");
  document.querySelector(".list__name").textContent = name;

  const food = new FindMeal(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
  );
  food
    .GetAPI()
    .then((res) => res.data.meals)
    .then((data) => {
      data.forEach((meal, index) => {
        if (index <= mealImages.length - 1) {
          mealImages[index].setAttribute("src", meal.strMealThumb);
          mealCaption[index].textContent = meal.strMeal;
        }
      });
      categoryItems.style.display = "flex";
    });
}
