class LightBox {
  constructor(photographerDataMediaById) {
    this._lightbox__container = document.querySelector(".lightbox__container");

    this._btnOpenLightBoxImg = document.querySelector(
      `#openLightBoxImg-${photographerDataMediaById.id}`
    );
    this._btnOpenLightBoxVideo = document.querySelector(
      `#openLightBoxVideo-${photographerDataMediaById.id}`
    );

    this._modalLightBox = document.querySelector("#lightBox");

    this._btnCloseLightBox = document.querySelector(".btnCloseLightBox");
  }

  openLightBoxImg(photographerDataMediaById, photographerDataById) {
    if (this._btnOpenLightBoxImg) {
      this._btnOpenLightBoxImg.addEventListener("click", () => {
        this._modalLightBox.style.display = "block";

        const mediaFactory = new MediaFactory();
        const media = mediaFactory.createMedia(
          photographerDataMediaById,
          photographerDataById
        );

        this._lightbox__container.innerHTML = `
              ${
                media.type === "image"
                  ? `<img alt="${media.alt}" src="${this._btnOpenLightBoxImg.src}">`
                  : ""
              }
              <p class="lightbox__title">${photographerDataMediaById.title}</p>
            `;
      });
    }
  }

  openLightBoxVideo(photographerDataMediaById, photographerDataById) {
    if (this._btnOpenLightBoxVideo) {
      this._btnOpenLightBoxVideo.addEventListener("click", () => {
        this._modalLightBox.style.display = "block";

        const mediaFactory = new MediaFactory();
        const media = mediaFactory.createMedia(
          photographerDataMediaById,
          photographerDataById
        );

        this._lightbox__container.innerHTML = `
              ${
                media.type === "video"
                  ? `<video id="LightBoxVideo-${photographerDataMediaById.id}" title="${media.alt}" controls aria-label="${media.alt}" src="${this._btnOpenLightBoxVideo.src}"></video>`
                  : ""
              }
              <p class="lightbox__title">${photographerDataMediaById.title}</p>
            `;
      });
    }
  }

  closeLightBox() {
    if (this._btnCloseLightBox) {
      this._btnCloseLightBox.addEventListener("click", () => {
        this._modalLightBox.style.display = "none";
      });
    }
  }
}
