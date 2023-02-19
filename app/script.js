"use strict";

class Nav {
  constructor() {
    this.burger = document.querySelector(".burger");
    this.listItems = document.querySelector(".list--items");
    this.burger.addEventListener("click", this.openMenu.bind(this));
  }

  openMenu() {
    console.log("clicked");
    this.listItems.classList.toggle("show");
    this.burger.classList.toggle("toggle");
  }
}

const nav = new Nav();
