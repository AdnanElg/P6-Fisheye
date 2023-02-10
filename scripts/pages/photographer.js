class Photographer {
  constructor() {
    const url = new URLSearchParams(document.location.search);
    this.id = parseInt(url.get("id"));

    this.photograph_header = document.querySelector(".photograph-header");
    this.dataApi = new DataApi(`../data/photographers.json`);
  }

  async main() {
    const PhotographerDataById = await this.dataApi.getDataById(this.id);
    const TemplatePhotographerHeader = new PhotographerHeader(
      PhotographerDataById
    );

    this.photograph_header.append(
      TemplatePhotographerHeader.createPhotographHeader()
    );
  }
}

const photographer = new Photographer();
photographer.main();
