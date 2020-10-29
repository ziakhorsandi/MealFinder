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

    this.next = next;
    this.prev = prev;
  }
  _next = () => {
    this.mySiema.next();
  };
  _prev = () => {
    this.mySiema.prev();
  };

  createSiema = () => {
    console.log('this.prev', this.prev);
    this.siemaDomElement.innerHTML = this.innerHtmlText;
    this.mySiema = new Siema(this.creatorObj);

    document.querySelector(this.prev).addEventListener('click', this._prev);
    document.querySelector(this.next).addEventListener('click', this._next);
  };

  destroySiema = () => {
    this.mySiema.destroy(true);
    document.querySelector(this.prev).removeEventListener('click', this._prev);
    document.querySelector(this.next).removeEventListener('click', this._next);

    this.siemaDomElement.innerHTML = '';
  };
  updateSiema = () => {
    this.destroySiema();
    this.createSiema();
  };
}
