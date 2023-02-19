"use strict";

class Nav {
  constructor() {
    this.burger = document.querySelector(".burger");
    this.listItems = document.querySelector(".list--items");
    this.hero = document.querySelector(".hero--section");
    this.hdsect = document.querySelector(".hd--sect");
    this.whatWeOffer = document.querySelector(".what-we-offer");
    this.insetH2 = document.querySelector(".section2--inset > h3");
    this.articleSect = document.querySelector(".article-container");

    // on load of the DOM
    this.hero.classList.remove("translate-y-[200px]");
    this.hero.classList.remove("opacity-0");
    this.burger.addEventListener("click", this.openMenu.bind(this));

    this.sectionObserver = new IntersectionObserver(this.revealSection, {
      root: null,
      threshold: 0.15,
    });

    this.sectionObserver.observe(this.hdsect);
    this.sectionObserver.observe(this.whatWeOffer);
    this.sectionObserver.observe(this.insetH2);
    this.sectionObserver.observe(this.articleSect);
  }

  openMenu() {
    this.listItems.classList.toggle("show");
    this.burger.classList.toggle("toggle");
  }

  revealSection(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("translate-x-[-200px]");
    entry.target.classList.remove("translate-y-[200px]");
    entry.target.classList.remove("opacity-0");

    observer.unobserve(entry.target);
  }
}

const nav = new Nav();
