class FindMeal {
  constructor(IP) {
    this.IP = IP;
  }
  async GetAPI() {
    const res = await fetch(this.IP);
    const data = await res.json();
    return { data };
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
