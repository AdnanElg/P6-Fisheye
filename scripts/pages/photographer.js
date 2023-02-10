class Photographer {
  constructor() {
    this.photograph_header = document.querySelector(".photograph-header");
    this.dataApi = new DataApi("../data/photographers.json");
  }

  async main() {
    const photographersSection = await this.dataApi.getData();

    const TemplatePhotographerHeader = new PhotographerHeader(
      photographersSection.photographers
    );

    this.photograph_header.append(
      TemplatePhotographerHeader.createPhotographHeader()
    );
  }
}

const photographer = new Photographer();
photographer.main();
