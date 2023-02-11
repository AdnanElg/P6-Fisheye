class PhotographerSection1 {
  constructor(PhotographerDataById) {
    this._photographers = PhotographerDataById;
  }

  createPhotographHeaderSection1() {
    const photograph_section1 = document.createElement("div");
    photograph_section1.classList.add("section1_header_photographer");

    const photographerInfo = `
        <div class='info_photographer' role="region">
          <h2 class='info_name' aria-label="Nom du photographe">${this._photographers.name}</h2>
          <span aria-hidden="true" class='info_country'>${this._photographers.country}, ${this._photographers.city}</span>
          <p class='info_tagline' aria-label="Phrase d'accroche du photographe">${this._photographers.tagline}</p>
        </div>
        <div class='btn_contact'>
          <button type="button" aria-label="Bouton pour contacter le photographe">Contactez-moi</button>
        </div>
        <div class='picture_profil_photographer'>
          <img alt="Photo de profil de ${this._photographers.name}" aria-hidden="true"  class='info_picture' src="../assets/photo_profil_home/${this._photographers.portrait}">
        </div>
      `;

    photograph_section1.innerHTML = photographerInfo;

    return photograph_section1;
  }
}
