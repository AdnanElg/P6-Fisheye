class PhotographerLightBox {
  constructor(photographerDataMediaById, photographerDataById) {
    this._photographers = photographerDataMediaById;
    this._photographers2 = photographerDataById;
  }

  createPhotographerLightBox() {
    const photographerLightBox = document.createElement("div");
    photographerLightBox.classList.add("modal-lightBox");

    for (let i = 0; i < this._photographers.length; i++) {
      const mediaFactory = new MediaFactory();

      const media = mediaFactory.createMedia(
        this._photographers[i],
        this._photographers2
      );

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
             
                <div class="lightbox__container">
                    ${
                      media.type === "image"
                        ? `<img id="LightBoxImg-${this._photographers[i].id}" alt="${media.alt}" src="${media.src}">`
                        : media.type === "video"
                        ? `<video id="LightBoxVideo-${this._photographers[i].id}" title="${media.alt}" aria-label="${media.alt}" src="${media.src}"></video>`
                        : ""
                    }
                    <p class="lightbox__title">${
                      this._photographers[i].title
                    }</p>
                </div>
          
            `;

      photographerLightBox.innerHTML += lightBoxPhotographer;

      setTimeout(() => {
        const lightBox = new LightBox(
          this._photographers[i],
          this._photographers2
        );
        lightBox.openLightBox(this._photographers[i], this._photographers2);
        lightBox.closeLightBox();
      }, 50);
    }

    return photographerLightBox;
  }
}
