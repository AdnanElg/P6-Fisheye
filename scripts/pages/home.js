class Home {
  constructor() {
    this.photographer_section = document.querySelector(".photographer_section");
    this.photographersApi = new PhotographersApi("./data/photographers.json");
  }

  async main() {
    const photographersSection =
      await this.photographersApi.getDataPhotographers();

    photographersSection.photographers.forEach((photographers) => {
      const Template = new PhotographersCard(photographers);
      this.photographer_section.append(Template.createPhotographerCard());
    });
  }
}

const home = new Home();
home.main();
