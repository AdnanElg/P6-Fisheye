class Photographer {
  constructor() {
    let url = new URLSearchParams(document.location.search);
    this.id = url.get("id");
    this.photograph_header = document.querySelector(".photograph-header");
    this.dataApi = new DataApi(`../data/photographers.json?id=${this.id}`);
  }

  async main() {
    const dataPhotographer = await this.dataApi.getData(this.id);

    const TemplatePhotographerHeader = new PhotographerHeader(
      dataPhotographer.photographers
    );

    this.photograph_header.append(
      TemplatePhotographerHeader.createPhotographHeader()
    );
  }
}

const photographer = new Photographer();
photographer.main();
