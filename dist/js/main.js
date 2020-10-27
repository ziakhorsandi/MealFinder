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
  perPage: {
    100: 3,
    375: 4,
    576: 5,
    768: 6,
    // 800: 5,
    1000: 6,
    1440: 7,
  },
  // loop: true,
});

// const mySiema2 = new Siema({
//   selector: ".siema2",
//   perPage: {
//     375: 3,
//     576: 4,
//     800: 5,
//     1000: 6,
//     1440: 7,
//   },
//   // loop: true,
// });
