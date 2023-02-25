class Filter {
  constructor() {
    this._btnFilterOpen = document.querySelector("#btnOpenFilter");
    this._container_select = document.querySelector(".container-select");
    this._btnFilterClose = document.querySelector("#iconCloseFilter");

    this._filterPopularité = document.querySelector("#popularité");
    this._filterDate = document.querySelector("#date");
    this._filterTitre = document.querySelector("#titre");
  }

  openFilterInit() {
    this._btnFilterOpen.addEventListener("click", (e) => {
      e.preventDefault();
      this._container_select.style.display = "block";
    });
  }

  closeFilterInit() {
    this._btnFilterClose.addEventListener("click", (e) => {
      e.preventDefault();
      this._container_select.style.display = "none";
    });
  }

  filterPopularité(photographerDataMediaById, photographerDataById) {
    this._filterPopularité.addEventListener("click", (e) => {
      e.preventDefault();
      const sorteByPopularity = photographerDataMediaById.sort(
        (a, b) => b.likes - a.likes
      );

      const photographerArticleList = document.querySelector(
        ".photograph_section3"
      );

      photographerArticleList.innerHTML = "";

      sorteByPopularity.forEach((sorteDataByPopularité) => {
        const newPhotographerArticleList = new PhotographerSection3(
          sorteDataByPopularité,
          photographerDataById
        );

        const photographerArticle =
          newPhotographerArticleList.createPhotographArticleSection3();

        photographerArticleList.appendChild(photographerArticle);
      });
    });
  }

  filterDate(photographerDataMediaById, photographerDataById) {
    this._filterDate.addEventListener("click", (e) => {
      e.preventDefault();
      const sorteByDate = photographerDataMediaById.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });

      const photographerArticleList = document.querySelector(
        ".photograph_section3"
      );

      photographerArticleList.innerHTML = "";

      sorteByDate.forEach((sorteDataByDate) => {
        const newPhotographerArticleList = new PhotographerSection3(
          sorteDataByDate,
          photographerDataById
        );

        const photographerArticle =
          newPhotographerArticleList.createPhotographArticleSection3();

        photographerArticleList.appendChild(photographerArticle);
      });
    });
  }

  filterTitre(photographerDataMediaById, photographerDataById) {
    this._filterTitre.addEventListener("click", (e) => {
      e.preventDefault();
      const sorteByTitre = photographerDataMediaById.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

      const photographerArticleList = document.querySelector(
        ".photograph_section3"
      );

      photographerArticleList.innerHTML = "";

      sorteByTitre.forEach((sorteDataByTitre) => {
        const newPhotographerArticleList = new PhotographerSection3(
          sorteDataByTitre,
          photographerDataById
        );

        const photographerArticle =
          newPhotographerArticleList.createPhotographArticleSection3();

        photographerArticleList.appendChild(photographerArticle);
      });
    });
  }
}
