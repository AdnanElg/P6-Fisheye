class Home {
  constructor() {
    this.photographer_home = document.querySelector(".photographer_section");
    // eslint-disable-next-line no-undef
    this.dataApi = new DataApi("../data/photographers.json");
  }

  async main() {
    const photographersDataAll = await this.dataApi.getDataAll();

    photographersDataAll.forEach((dataHome) => {
      // eslint-disable-next-line no-undef
      const TemplateHome = new HomeCard(dataHome);
      this.photographer_home.append(TemplateHome.createHomeCard());
    });
  }
}

const home = new Home();
home.main();
