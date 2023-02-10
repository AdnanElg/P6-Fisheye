class PhotographerHeader {
  constructor(photographers) {
    this._photographers = photographers;
  }

  createPhotographHeader() {
    const photograph_header = document.createElement("div");
    photograph_header.classList.add("cards_info_photographer");

    const PhotographerInfo = `
        <h2 class='card_name'>${this._photographers.name}</h2>
        <span aria-hidden="true" class='cards_country'>${this._photographers.country}, ${this._photographers.city}</span>
        <p class='cards_tagline'>${this._photographers.tagline}</p>
      `;

    photograph_header.innerHTML = PhotographerInfo;

    return photograph_header;
  }
}
