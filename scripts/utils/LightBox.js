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

    this._btnNextLightBox = document.querySelector(".button-next");

    this._btnPreviousLightBox = document.querySelector(".button-previous");

    this._currentIndex = 0;
  }

  openLightBoxImg(photographerDataMediaById, photographerDataById) {
    if (this._btnOpenLightBoxImg) {
      this._btnOpenLightBoxImg.addEventListener("click", () => {
        this._modalLightBox.style.display = "block";
        this.displayMedia(photographerDataMediaById, photographerDataById);
      });
    }
  }

  openLightBoxVideo(photographerDataMediaById, photographerDataById) {
    if (this._btnOpenLightBoxVideo) {
      this._btnOpenLightBoxVideo.addEventListener("click", () => {
        this._modalLightBox.style.display = "block";
        this.displayMedia(photographerDataMediaById, photographerDataById);
      });
    }
  }

  nextLightBox(photographerDataMediaById, photographerDataById) {
    if (this._btnNextLightBox) {
      this._btnNextLightBox.addEventListener("click", () => {
        this.displayMedia(photographerDataMediaById, photographerDataById);
      });
    }
  }

  // previousLightBox(photographerDataMediaById, photographerDataById) {
  //   if (this._btnPreviousLightBox) {
  //     this._btnPreviousLightBox.addEventListener("click", () => {
  //       this.displayMedia(photographerDataMediaById, photographerDataById);
  //     });
  //   }
  // }

  closeLightBox() {
    if (this._btnCloseLightBox) {
      this._btnCloseLightBox.addEventListener("click", () => {
        this._modalLightBox.style.display = "none";
      });
    }
  }

  displayMedia(photographerDataMediaById, photographerDataById) {
    const mediaFactory = new MediaFactory();
    const media = mediaFactory.createMedia(
      photographerDataMediaById,
      photographerDataById
    );

    this._lightbox__container.innerHTML = `
      ${
        media.type === "image"
          ? `<img alt="${media.alt}" src="${this._btnOpenLightBoxImg.src}">`
          : media.type === "video"
          ? `<video title="${media.alt}" aria-label="${media.alt}" src="${this._btnOpenLightBoxVideo.src}" controls></video>`
          : ""
      }
      <p tabindex="0" class="lightbox__title">${
        photographerDataMediaById.title
      }</p>
    `;
  }
}
