// eslint-disable-next-line no-unused-vars
class PhotographerSection1 {
  constructor(PhotographerDataById) {
    this._photographers = PhotographerDataById;
  }

  createPhotographHeaderSection1() {
    const photograph_section1 = document.createElement("div");
    photograph_section1.classList.add("section1_header_photographer");

    const photographerHeader = `
        <div class='info_photographer' role="region" tabindex="0">
          <h2 tabindex="0" class='info_name' aria-label="Nom du photographe">${this._photographers.name}</h2>
          <span tabindex="0" aria-hidden="true" class='info_country'>${this._photographers.country}, ${this._photographers.city}</span>
          <p tabindex="0" class='info_tagline' aria-label="Phrase d'accroche du photographe">${this._photographers.tagline}</p>
        </div>
        <div class='btn_contact'>
          <button tabindex="0" id='btnOpenModal' type="button" aria-label="Bouton pour contacter le photographe">Contactez-moi</button>
        </div>
        <div class='picture_profil_photographer' tabindex="0">
          <img alt="Photo de profil de ${this._photographers.name}" aria-hidden="true"  class='info_picture' src="../assets/photo_profil_home/${this._photographers.portrait}">
        </div>
      `;

    photograph_section1.innerHTML = photographerHeader;

    return photograph_section1;
  }
}
