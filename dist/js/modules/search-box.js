const searchInput = document.querySelector(".search__input");
const searchResult = document.querySelector(".searchResult");
const results = document.querySelector(".results");
const searchTitle = document.getElementById("search__title");
searchInput.addEventListener("keypress", search);
function search(e) {
  if (e.key === "Enter" && e.target.value != " " && e.target.value != "") {
    results.innerHTML = "";
    searchTitle.textContent = `Search results for: ${e.target.value}`;
    const searchMeal = new FindMeal(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`
    );
    searchMeal
      .GetAPI()
      .then((res) => res.data.meals)
      .then((data) => {
        searchResult.style.display = "block";
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
            listItems.addEventListener("click", () => {
              window.location = `./singlePage.html?${temp[i]}`;
            });
            data.shift();
          }
        }
      })
      .catch(
        (err) => (results.textContent = `no result for ${searchInput.value}`)
      );
  }
}
