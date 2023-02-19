"use strict";

class Nav {
  constructor() {
    this.burger = document.querySelector(".burger");
    this.burger.addEventListener("click", this.openMenu.bind(this));
  }

  openMenu() {
    console.log("clicked");
  }
}

const nav = new Nav();
