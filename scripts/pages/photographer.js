class Photographer {
  constructor() {
    const url = new URLSearchParams(document.location.search);
    this.id = parseInt(url.get("id"));

    this.photograph_section1 = document.querySelector(".photograph_section1");
    this.dataApi = new DataApi(`../data/photographers.json`);
  }

  async main() {
    const PhotographerDataById = await this.dataApi.getDataById(this.id);

    const TemplatePhotographerSection1 = new PhotographerSection1(
      PhotographerDataById
    );

    this.photograph_section1.append(
      TemplatePhotographerSection1.createPhotographSection1()
    );
  }
}

const photographer = new Photographer();
photographer.main();
