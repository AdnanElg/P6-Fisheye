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
        <label for="sort-select">Trier par : </label>
        <button id='btnOpenFilter' type='button'>Popularité <i class="arrows fas fa-chevron-down"></i></button>
      </div>
       <div class='container-select'>
          <ul>
            <li id='popularité' aria-current="true">Popularité</li>
            <li id='date' >Date</li>
            <li id='titre'>Titre</li>
          </ul>
          <span id='iconCloseFilter' class="arrows fas fa-chevron-up"></span>
       </div>
      `;

    photograph_section2.innerHTML = photographerFilter;

    setTimeout(() => {
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
