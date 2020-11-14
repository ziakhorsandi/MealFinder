const categoryItems = document.querySelector(".list__items");
categoryItems.style.display = "none";
let eve;

// category slider 1
const category = new FindMeal(
  "https://www.themealdb.com/api/json/v1/1/categories.php"
);
category
  .GetAPI()
  .then((res) => res.data.categories)
  .then((data) => {
    let divs;
    data.forEach((category) => {
      divs += `
      <div id=${category.strCategory} class="category__item">
            <div class="category__img">
              <img src=${category.strCategoryThumb} alt=${category.strCategory} />
            </div>
            <p class='category__name'>${category.strCategory}</p>
          </div>
      `;
    });
    document.querySelector(".siema2").innerHTML = divs;

    const mySiema2 = new Siema({
      selector: ".siema2",
      perPage: {
        100: 3,
        375: 4,
        576: 5,
        768: 6,
      },
    });

    // show beef category as page loaded and add event listener to each category
    showCategory("Beef");

    // change category with click event
    data.forEach((category) => {
      document
        .getElementById(category.strCategory)
        .addEventListener("click", (e) => {
          document
            .querySelector(".category")
            .scrollIntoView({ behavior: "smooth" });
          removeAllChildNodes(categoryItems);
          showCategory(category.strCategory);
        });
    });
  });

// category slider 2
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
      showCategoryItems(data);
      const mealImages = document.querySelectorAll(".mealImg");
      window.addEventListener("scroll", scro);
      function scro() {
        setTimeout(() => {
          if (
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight
          ) {
            showCategoryItems(data);
          }
        }, 1000);
        categoryItems.style.display = "flex";
      }
    });

  // show meals of the selected category
  async function showCategoryItems(data) {
    let temp = [];
    for (let i = 0; i < 12; i++) {
      if (data[0]) {
        let listItems = document.createElement("div");
        listItems.classList = "list__item";
        listItems.innerHTML = `
        <div class="minicard mb-2">
          <div class="minicard__img"><img src=${data[0].strMealThumb} class="mealImg">
          </div>
          <div class="minicard__txt px-2 mt-1 Rubik-Regular font-cl-sec-5"><span class="mt-1 caption">${data[0].strMeal}</span></div>
        </div>
      `;
        await categoryItems.appendChild(listItems);
        temp.push(data[0].idMeal);
        // temp.push(data[0].strMeal);
        listItems.addEventListener("click", () => {
          console.log("hi :>> ", listItems);
          console.log("hi3 :>> ", temp[i]);
          window.location = `./singlePage.html?${temp[i]}`;
        });
        data.shift();
      }
    }
  }
}
