// eslint-disable-next-line no-unused-vars
class Filter {
  constructor() {
    this._btnFilterOpen = document.querySelector("#btnOpenFilter");
    this._toggleTxt = document.querySelector("#btnOpenFilter span");
    this._container_select = document.querySelector(".container-select");
    this._ul = document.querySelector(".container-select ul");
    this._btnFilterClose = document.querySelector("#iconCloseFilter");

    this._filterPopularité = document.querySelector("#popularité");
    this._filterDate = document.querySelector("#date");
    this._filterTitre = document.querySelector("#titre");

    this._activeFilter = null;
   
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

    this._btnFilterClose.addEventListener("keydown", (e) => {
        e.preventDefault();
        this._container_select.style.display = "none";
    });
  }


  setActiveFilter(filterElement) {
    if (this._activeFilter === filterElement) {
      return;
    }

    if (this._activeFilter) {
      this._activeFilter.classList.remove("active");
    }

    filterElement.classList.add("active");
    this._ul.insertBefore(filterElement, this._ul.firstChild);
    this._activeFilter = filterElement;

    this._toggleTxt.textContent = filterElement.textContent;
  }


  filterPopularité(photographerDataMediaById, photographerDataById) {
    this._filterPopularité.addEventListener("click", (e) => {
      e.preventDefault();

      this.setActiveFilter(this._filterPopularité);

      const sorteByPopularity = photographerDataMediaById.sort(
        (a, b) => b.likes - a.likes
      );

      const photographerArticleList = document.querySelector(
        ".photograph_section3"
      );

      photographerArticleList.innerHTML = "";

      sorteByPopularity.forEach((sorteDataByPopularité) => {
        // eslint-disable-next-line no-undef
        const newPhotographerArticleList = new PhotographerSection3(
          sorteDataByPopularité,
          photographerDataById
        );

        const photographerArticle =
          newPhotographerArticleList.createPhotographArticleSection3();

        photographerArticleList.appendChild(photographerArticle);
      });
    });

    this._filterPopularité.addEventListener("keydown", (e) => {
      e.preventDefault();

      this.setActiveFilter(this._filterPopularité);

      const sorteByPopularity = photographerDataMediaById.sort(
        (a, b) => b.likes - a.likes
      );

      const photographerArticleList = document.querySelector(
        ".photograph_section3"
      );

      photographerArticleList.innerHTML = "";

      sorteByPopularity.forEach((sorteDataByPopularité) => {
        // eslint-disable-next-line no-undef
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

      this.setActiveFilter(this._filterDate);

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
        // eslint-disable-next-line no-undef
        const newPhotographerArticleList = new PhotographerSection3(
          sorteDataByDate,
          photographerDataById
        );

        const photographerArticle =
          newPhotographerArticleList.createPhotographArticleSection3();

        photographerArticleList.appendChild(photographerArticle);
      });
    });

    this._filterDate.addEventListener("keydown", (e) => {
      e.preventDefault();

      this.setActiveFilter(this._filterDate);

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
        // eslint-disable-next-line no-undef
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

      this.setActiveFilter(this._filterTitre);

      const sorteByTitre = photographerDataMediaById.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      const photographerArticleList = document.querySelector(
        ".photograph_section3"
      );

      photographerArticleList.innerHTML = "";

      sorteByTitre.forEach((sorteDataByTitre) => {
        // eslint-disable-next-line no-undef
        const newPhotographerArticleList = new PhotographerSection3(
          sorteDataByTitre,
          photographerDataById
        );

        const photographerArticle =
          newPhotographerArticleList.createPhotographArticleSection3();

        photographerArticleList.appendChild(photographerArticle);
      });
    });
    
    this._filterTitre.addEventListener("keydown", (e) => {
      e.preventDefault();

      this.setActiveFilter(this._filterTitre);

      const sorteByTitre = photographerDataMediaById.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      const photographerArticleList = document.querySelector(
        ".photograph_section3"
      );

      photographerArticleList.innerHTML = "";

      sorteByTitre.forEach((sorteDataByTitre) => {
        // eslint-disable-next-line no-undef
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
