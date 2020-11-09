const categoryItems = document.querySelector(".list__items");
console.log("object :>> ", categoryItems);
let eve;
// console.log("object :>>mealImages ", mealImages);
const mealCaption = document.querySelectorAll(".caption");
categoryItems.style.display = "none";
let isNextPage = true;
// category slider
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

    // show beef category as page loaded and add event listener to each category
    // not this// isNextPage = true;
    showCategory("Beef");
    data.forEach((category) => {
      document
        .getElementById(category.strCategory)
        .addEventListener("click", (e) => {
          // isNextPage = false;
          document
            .querySelector(".category")
            .scrollIntoView({ behavior: "smooth" });

          removeAllChildNodes(categoryItems);
          console.log(" :>> ");
          showCategory(category.strCategory);
        });
    });

    function removeAllChildNodes(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }

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

function showCategory(name) {
  console.log("name :>> ", name);
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
      // window.removeEventListener("scroll", scro);
      showCategoryItems(data);
      // setTimeout(() => {
      const mealImages = document.querySelectorAll(".mealImg");
      console.log("mealImages :>> ", mealImages);

      // if (mealImages[mealImages.length - 1].complete) {
      console.log("mealImages :>> loaded");

      window.addEventListener("scroll", scro);
      // }
      // }, 8000);
      function scro() {
        console.log("scrolled :>> ");
        setTimeout(() => {
          if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight &&
            isNextPage
            // &&
            // mealImages[11].complete
          ) {
            showCategoryItems(data);
            // console.log(mealImages.length, " 1time :>> ", mealImages[11]);
          }
        }, 1000);
        // try {
        //   if (
        //     window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        //     isNextPage &&
        //     mealImages[11].complete
        //   ) {
        //     showCategoryItems(data);
        //     console.log(mealImages.length, " 1time :>> ", mealImages[11]);
        //   } else {
        //     setTimeout(() => {
        //       if (
        //         window.innerHeight + window.scrollY >=
        //           document.body.offsetHeight &&
        //         isNextPage &&
        //         mealImages[mealImages.length - 1].complete
        //       ) {
        //         showCategoryItems(data);
        //         console.log("3time :>> ");
        //       }
        //     }, 3000);
        //   }
        // } catch {
        //   console.log("err :>> ");
        // }
        categoryItems.style.display = "flex";
      }
    });

  async function showCategoryItems(data) {
    let temp = "";
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

        data.shift();
      }
    }
    console.log("isNextPage :>> ", isNextPage);
    // setTimeout(() => (isNextPage = true), 3000);
    // not this// isNextPage = true;

    console.log(document.querySelectorAll(".list__item").length);
  }
  // setTimeout(() => {
  //   // "categoryItems.complate :>> "
  //   console.log("object1 :>> ", categoryItems);
  //   console.log("console.log( mealImages); ", mealImages);
  //   console.log("num.length :>> ", nume[nume.length - 1].complete);
  //   // console.log(
  //   //   "num.length :>> ",
  //   //   categoryItems[categoryItems.length - 1].complete
  //   // );
  // }, 6000);
}

window.addEventListener("load", function () {
  console.log("Its loaded ");
});
