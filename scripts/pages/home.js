class Home {
  constructor() {
    this.photographer_section = document.querySelector(".photographer_section");
    this.dataApi = new DataApi("../data/photographers.json");
  }

  async main() {
    const photographersDataAll = await this.dataApi.getDataAll();

    photographersDataAll.forEach((dataHome) => {
      const TemplateHome = new HomeCard(dataHome);
      this.photographer_section.append(TemplateHome.createHomeCard());
    });
  }
}

const home = new Home();
home.main();
