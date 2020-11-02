class siemaUpdae {
  constructor(
    siemaDomElement,
    innerHtmlText,
    creatorObj,
    next = null,
    prev = null
  ) {
    this.siemaDomElement = siemaDomElement;
    this.mySiema = null;
    this.innerHtmlText = innerHtmlText;
    this.creatorObj = creatorObj;
    this.isLastSlide = false;
    this.next = next;
    this.prev = prev;
  }
  _next = () => {
    this.mySiema.next();
    if (this.isLastSlide) {
      nextSlide();
      this.mySiema.goTo(this.mySiema.innerElements.length - 1);
    }
    if (this.mySiema.currentSlide === this.mySiema.innerElements.length - 1) {
      this.isLastSlide = true;
    }
  };
  _prev = () => {
    this.isLastSlide = false;
    this.mySiema.prev();
  };

  createSiema = () => {
    this.siemaDomElement.innerHTML = this.innerHtmlText;
    this.mySiema = new Siema(this.creatorObj);

    document.querySelector(this.prev).addEventListener("click", this._prev);
    document.querySelector(this.next).addEventListener("click", this._next);
    if (this.mySiema.innerElements.length === 1) {
      this.isLastSlide = true;
    } else {
      this.isLastSlide = false;
    }
  };

  destroySiema = () => {
    this.mySiema.destroy(true);
    document.querySelector(this.prev).removeEventListener("click", this._prev);
    document.querySelector(this.next).removeEventListener("click", this._next);

    this.siemaDomElement.innerHTML = "";
  };
  updateSiema = () => {
    this.destroySiema();
    this.createSiema();
  };
}
