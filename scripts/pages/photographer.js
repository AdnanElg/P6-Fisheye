class Photographer {
  constructor() {
    const url = new URLSearchParams(document.location.search);
    this.id = parseInt(url.get("id"));

    this.photograph_header = document.querySelector(".photograph_section1");
    this.photograph_filter = document.querySelector(".photograph_section2");
    this.photograph_article = document.querySelector(".photograph_section3");
    this.photograph_total = document.querySelector(".photograph_section4");
    this.photograph_modal = document.querySelector("#contact_modal");
    this.photograph_lightBox = document.querySelector("#lightBox");

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
      photographerDataMediaById,
      photographerDataById
    );

    for (let i = 0; i < photographerDataMediaById.length; i++) {
      const templateArticleSection3 = new PhotographerSection3(
        photographerDataMediaById[i],
        photographerDataById
      );
      this.photograph_article.append(
        templateArticleSection3.createPhotographArticleSection3()
      );
    }

    const templateTotalSection4 = new PhotographerSection4(
      photographerDataMediaById,
      photographerDataById
    );

    const templateModal = new PhotographerModale(photographerDataById);

    const templateLightBox = new PhotographerLightBox(
      photographerDataMediaById,
      photographerDataById
    );

    this.photograph_header.append(
      templateHeaderSection1.createPhotographHeaderSection1()
    );

    this.photograph_filter.append(
      templatefilterSection2.createPhotographFilterSection2()
    );

    this.photograph_total.append(
      templateTotalSection4.createPhotographTotalSection4()
    );

    this.photograph_modal.append(templateModal.createPhotographerModale());

    this.photograph_lightBox.append(
      templateLightBox.createPhotographerLightBox()
    );
  }
}

const photographer = new Photographer();
photographer.main();
