class Photographer {
  constructor() {
    const url = new URLSearchParams(document.location.search);
    this.id = parseInt(url.get("id"));

    this.photograph_section1 = document.querySelector(".photograph_section1");
    this.photograph_section2 = document.querySelector(".photograph_section2");
    this.photograph_section3 = document.querySelector(".photograph_section3");

    this.dataApi = new DataApi(`../data/photographers.json`);
  }

  async main() {
    const photographerDataById = await this.dataApi.getDataById(this.id);
    const photographerDataMediaById = await this.dataApi.getDataMediaById(
      this.id
    );

    const templateHeaderSection1 = new PhotographerSection1(
      photographerDataById
    );

    const templatefilterSection2 = new PhotographerSection2(
      photographerDataMediaById
    );

    this.photograph_section1.append(
      templateHeaderSection1.createPhotographHeaderSection1()
    );

    this.photograph_section2.append(
      templatefilterSection2.createPhotographFilterSection2()
    );

    photographerDataMediaById.forEach((photographerDataMediaById) => {
      const templateArticleSection3 = new PhotographerSection3(
        photographerDataMediaById
      );
      this.photograph_section3.append(
        templateArticleSection3.createPhotographArticleSection3()
      );
    });
  }
}

const photographer = new Photographer();
photographer.main();
