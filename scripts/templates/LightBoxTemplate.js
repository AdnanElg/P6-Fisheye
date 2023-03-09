class PhotographerLightBox {
  constructor(photographerDataMediaById, photographerDataById) {
    this._photographers = photographerDataMediaById;
    this._photographers2 = photographerDataById;
  }

  createPhotographerLightBox() {
    const photographerLightBox = document.createElement("div");
    photographerLightBox.classList.add("modal-lightBox");

    const lightBoxPhotographer = `
  
              <button type="button" class="btnCloseLightBox">
                  <i class="fas fa-times"></i>
              </button>
  
              <button type="button" class="button-previous">
                  <i class="fas fa-chevron-left"></i>
              </button>
  
              <button type="button" class="button-next">
                  <i class="fas fa-chevron-right"></i>
              </button>
             
              <div class="lightbox__container"></div>
      `;

    photographerLightBox.innerHTML = lightBoxPhotographer;

    setTimeout(() => {
      for (let i = 0; i < this._photographers.length; i++) {
        const lightBox = new LightBox(this._photographers[i]);
        lightBox.openLightBoxImg(this._photographers[i], this._photographers2);
        lightBox.openLightBoxVideo(
          this._photographers[i],
          this._photographers2
        );
        lightBox.closeLightBox();
      }
    }, 50);

    return photographerLightBox;
  }
}
