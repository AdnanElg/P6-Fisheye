class PhotographerHeader {
  constructor(PhotographerDataById) {
    this._photographers = PhotographerDataById;
  }

  createPhotographHeader() {
    const photograph_header = document.createElement("div");
    photograph_header.classList.add("section_header_photographer");

    const PhotographerInfo = `
        <div class='info_photographer'>
          <h2 class='info_name'>${this._photographers.name}</h2>
          <span aria-hidden="true" class='info_country'>${this._photographers.country}, ${this._photographers.city}</span>
          <p class='info_tagline'>${this._photographers.tagline}</p>
        </div>
        <div class='btn_contact'>
          <button type="button">Contactez-moi</button>
        </div>
        <div class='picture_profil_photographer'>
          <img alt="Photo de profil de ${this._photographers.name}" class='info_picture' src="../assets/photo_profil_home/${this._photographers.portrait}">
        </div>
      `;

    photograph_header.innerHTML = PhotographerInfo;

    return photograph_header;
  }
}
