// const searchAdvanced = document.querySelector(".search__advanced");
// const searchDrop = document.querySelector(".search__drop");
// searchDrop.style.display = "none";
// searchAdvanced.addEventListener(
//   "click",
//   () => (searchDrop.style.display = "flex")
// );
console.log("box :>> ", window.location);
const searchInput = document.querySelector(".search__input");
const searchResult = document.querySelector(".searchResult");
const results = document.querySelector(".results");
const searchTitle = document.getElementById("search__title");
searchInput.addEventListener("keypress", search);
function search(e) {
  if (e.key === "Enter" && e.target.value != " " && e.target.value != "") {
    results.innerHTML = "";
    console.log("e.target :>> ", e.target.value);
    searchTitle.textContent = `Search results for: ${e.target.value}`;
    const searchMeal = new FindMeal(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`
    );
    searchMeal
      .GetAPI()
      .then((res) => res.data.meals)
      .then((data) => {
        console.log("data :>> ", data);
        searchResult.style.display = "block";

        // searchTitle.textContent = `You searched for: ${e.target.value}`;
        let temp = [];
        const limit = data.length;
        for (let i = 0; i < limit; i++) {
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
            results.appendChild(listItems);
            temp.push(data[0].idMeal);
            // temp.push(data[0].strMeal);
            listItems.addEventListener("click", () => {
              // console.log(" :>> ", window.location);
              window.location = `./singlePage.html?${temp[i]}`;
            });
            // console.log("data :>> ");
            data.shift();
          }
        }
      })
      .catch(
        (err) => (results.textContent = `no result for ${searchInput.value}`)
      );
  }
}
