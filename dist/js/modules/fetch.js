class FindMeal {
  constructor(IP) {
    this.IP = IP;
  }
  async GetRnd() {
    const res = await fetch(this.IP);
    const data = await res.json();
    return { data };
  }
}

const randomImages = document.querySelectorAll(".randomMeal__img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

document.addEventListener("DOMContentLoaded", fetchi);
// next.addEventListener("click", UI);
// randomImages.forEach((randomImage) => {
//   // fetchi("https://www.themealdb.com/api/json/v1/1/random.php");
// });

function fetchi() {
  let randomMeal = new FindMeal(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  randomMeal
    .GetRnd()
    .then((res) => res.data.meals)
    .then((data) => {
      //   randomImage.style.background = `url(${data[0].strMealThumb})
      // no-repeat center center/cover`;
      randomImages[
        randomImages.length - 1
      ].style.background = `url(${data[0].strMealThumb})
       no-repeat center center/cover`;
    });
}

function UI() {
  const item = document.createElement("div");
  const carousel = document.querySelector(".siemass");
  item.className = "randomMeal__item";
  item.innerHTML = `<div class="randomMeal__img">
                    </div>
                    <div class="randomMeal__info">
                      <div><p>Big Mac</p></div>
                      <button class="randomMeal__category btn--primary">Beef</button>
                    </div>`;
  carousel.appendChild(item);

  fetchi();
  console.log("item :>> ", item);
}
