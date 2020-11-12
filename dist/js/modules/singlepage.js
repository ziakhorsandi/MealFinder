var locvartemp =
  window.location.href.indexOf("?") + 1
    ? window.location.href.substr(window.location.href.indexOf("?") + 1)
    : "";
console.log("locvartemp :>> ", locvartemp);

const mealD = new FindMeal(
  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${locvartemp}`
);
mealD
  .GetAPI()
  .then((res) => res.data.meals[0])
  .then((data) => {
    console.log("data :>> ", data);
    // add title img category area
    document.querySelector(".sp .title").textContent = data.strMeal;
    document.querySelector(".sp__img img").src = data.strMealThumb;
    document.getElementById("sp__category").textContent = data.strCategory;
    document.getElementById("sp__area").textContent = data.strArea;
    // add ingredients
    for (var key in data) {
      if (
        key.includes("strIngredient") &&
        data[key] != "" &&
        data[key] != null
      ) {
        console.log("value :>> ", data[key]);
        let ing = document.createElement("span");
        ing.className = "sp__link";
        ing.textContent = data[key];
        document.getElementById("ingredients").appendChild(ing);
      }
    }
    // add Instructions
    document.getElementById("Instructions").textContent = data.strInstructions;
  });
