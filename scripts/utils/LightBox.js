class LightBox {
  constructor(photographerDataMediaById, photographerDataById) {
    this._lightBoxImg = document.getElementById(
      `LightBoxImg-${photographerDataMediaById.id}`
    );

    this._btnOpenLightBoxImg = document.querySelector(
      `#openLightBoxImg-${photographerDataMediaById.id}`
    );

    this._lightBox = document.querySelector("#lightBox");

    this._btnCloseLightBox = document.querySelector(".btnCloseLightBox");
  }

  openLightBox(photographerDataMediaById, photographerDataById) {
    this._btnOpenLightBoxImg.addEventListener("click", (e) => {
      e.preventDefault();
      this._lightBox.style.display = "block";
      this._lightBoxImg.src = `../assets/profil_photographers/${photographerDataById.name}/${photographerDataMediaById.image}`;
    });
  }

  closeLightBox() {
    this._btnCloseLightBox.addEventListener("click", (e) => {
      e.preventDefault();
      this._lightBox.style.display = "none";
    });
  }
}
