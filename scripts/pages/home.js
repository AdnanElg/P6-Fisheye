class Home {
  constructor() {
    this.photographer_section = document.querySelector(".photographer_section");
    this.dataApi = new DataApi("../data/photographers.json");
  }

  async main() {
    const photographersSection = await this.dataApi.getData();

    photographersSection.photographers.forEach((photographers) => {
      const TemplateHome = new HomeCard(photographers);
      this.photographer_section.append(TemplateHome.createHomeCard());
    });
  }
}

const home = new Home();
home.main();
