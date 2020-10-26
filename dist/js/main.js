const mySiema = new Siema({
  selector: ".siemass",
  perPage: 1,
});
document.querySelector(".prev").addEventListener("click", () => {
  mySiema.prev();
});
document.querySelector(".next").addEventListener("click", () => mySiema.next());

const mySiema2 = new Siema({
  selector: ".siema2",
  perPage: 4,
  // loop: true,
});
