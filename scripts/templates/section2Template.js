class PhotographerSection2 {
  constructor(photographerDataMediaById) {
    this._photographers = photographerDataMediaById;
  }

  createPhotographFilterSection2() {
    const photograph_section2 = document.createElement("div");
    photograph_section2.classList.add("sort-container");

    const photographerFilter = `
      <div class='container-btn-select'>
        <label for="sort-select">Trier par : </label>
        <button type='button'>Popularité <i class="arrows fas fa-chevron-down"></i></button>
      </div>

       <div class='container-select'>
          <ul>
            <li aria-current="true">Popularité <i class="arrows fas fa-chevron-up"></i></li>
            <li>Date</li>
            <li>Titre</li>
          </ul>
       </div>
      `;

    photograph_section2.innerHTML = photographerFilter;

    return photograph_section2;
  }
}
