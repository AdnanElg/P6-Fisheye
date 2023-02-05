class PhotographersCard {
  constructor(photographers) {
    this._photographers = photographers;
  }

  createPhotographerCard() {
    const photographer_section = document.createElement("article");
    photographer_section.classList.add("card_profile");

    const PhotographersCard = `
            <a href="photographer.html?=${this._photographers.id}" title= "Visitez la page de profil de : ${this._photographers.name}" role="link">
                <img alt="Photo de profil de ${this._photographers.name}" class='card_picture' src="./assets/photo_profil_home/${this._photographers.portrait}">
                <h2 class='card_name'>${this._photographers.name}</h2>
            </a>
            <div class='cards_info' role="region">
              <span aria-hidden="true" class='cards_country'>${this._photographers.country}, ${this._photographers.city}</span>
              <p class='cards_tagline'>${this._photographers.tagline}</p>
              <span aria-hidden="true" class='cards_price'>${this._photographers.price} / Jour</span>
            </div>
        `;

    photographer_section.innerHTML = PhotographersCard;

    return photographer_section;
  }
}
