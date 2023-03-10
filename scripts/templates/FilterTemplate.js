// eslint-disable-next-line no-unused-vars
class PhotographerSection2 {
  constructor(photographerDataMediaById, photographerDataById) {
    this._photographers = photographerDataMediaById;
    this._photographers2 = photographerDataById;
  }

  createPhotographFilterSection2() {
    const photograph_section2 = document.createElement("div");
    photograph_section2.classList.add("sort-container");

    const photographerFilter = `
      <div class='container-btn-select'>
        <label tabindex="0" for="sort-select">Trier par : </label>
        <button id='btnOpenFilter' aria-label='Bouton pour ouvrir le menu déroulant' type='button'><span>Popularité</span><i tabindex="0" class="arrows fas fa-chevron-down"></i></button>
      </div>
       <div class='container-select' aria-expanded="false" aria-labelledby="btnOpenFilter">
          <ul role="menu" tabindex="0">
            <li id='popularité' tabindex="0" role="menuitem" aria-current="true">Popularité</li>
            <li id='date' tabindex="0" role="menuitem">Date</li>
            <li id='titre' tabindex="0" role="menuitem">Titre</li>
          </ul>
          <span tabindex="0" id='iconCloseFilter' class="arrows fas fa-chevron-up"></span>
       </div>
      `;

    photograph_section2.innerHTML = photographerFilter;

    setTimeout(() => {
      // eslint-disable-next-line no-undef
      const filter = new Filter();

      filter.openFilterInit();
      filter.closeFilterInit();
      filter.filterPopularité(this._photographers, this._photographers2);
      filter.filterDate(this._photographers, this._photographers2);
      filter.filterTitre(this._photographers, this._photographers2);
    }, 50);

    return photograph_section2;
  }
}
