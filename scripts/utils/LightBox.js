// eslint-disable-next-line no-unused-vars
class LightBox {
  constructor(photographerDataMediaById, photographerDataMediaByIdAll) {
    this._lightbox__container = document.querySelector(".lightbox__container");

    this._modalLightBox = document.querySelector("#lightBox");

    this._btnCloseLightBox = document.querySelector(".btnCloseLightBox");

    this._btnNextLightBox = document.querySelector(".button-next");

    this._btnPreviousLightBox = document.querySelector(".button-previous");

    this._media = document.querySelector(
      `.media-${photographerDataMediaById.id}`
    );

    this._array = photographerDataMediaByIdAll;

    this._currentIndex = 0;
  }

  openLightBox(photographerDataMediaById, photographerDataById) {
    this._media.addEventListener("click", () => {
      this._modalLightBox.style.display = "block";

      this._lightbox__container.innerHTML = `
      ${
        photographerDataMediaById.image
          ? `<img alt="${photographerDataMediaById.title}" aria-label="${photographerDataMediaById.title}" src="../assets/profil_photographers/${photographerDataById.name}/${photographerDataMediaById.image}">`
          : `<video title="${photographerDataMediaById.title}" aria-label="${photographerDataMediaById.title}" src="../assets/profil_photographers/${photographerDataById.name}/${photographerDataMediaById.video}" controls></video>`
      }
      <p tabindex="0" class="lightbox__title">${
        photographerDataMediaById.title
      }</p>
    `;
    });
    this._media.addEventListener("keydown", () => {
      this._modalLightBox.style.display = "block";

      this._lightbox__container.innerHTML = `
      ${
        photographerDataMediaById.image
          ? `<img alt="${photographerDataMediaById.title}" aria-label="${photographerDataMediaById.title}" src="../assets/profil_photographers/${photographerDataById.name}/${photographerDataMediaById.image}">`
          : `<video title="${photographerDataMediaById.title}" aria-label="${photographerDataMediaById.title}" src="../assets/profil_photographers/${photographerDataById.name}/${photographerDataMediaById.video}" controls></video>`
      }
      <p tabindex="0" class="lightbox__title">${
        photographerDataMediaById.title
      }</p>
    `;
    });
  }

  closeOpenLightBox() {
    this._btnCloseLightBox.addEventListener("click", () => {
      this._modalLightBox.style.display = "none";
    });
    this._btnCloseLightBox.addEventListener("keydown", () => {
      this._modalLightBox.style.display = "none";
    });
  }

  btnNextMedia(photographerDataById) {
    this._btnNextLightBox.addEventListener("click", () => {
      this._currentIndex = (this._currentIndex + 1) % this._array.length;
      const nextMedia = this._array[this._currentIndex];

      this._lightbox__container.innerHTML = `
      ${
        nextMedia.image
          ? `<img alt="${nextMedia.title}" aria-label="${nextMedia.title}" src="../assets/profil_photographers/${photographerDataById.name}/${nextMedia.image}">`
          : `<video title="${nextMedia.title}" aria-label="${nextMedia.title}" src="../assets/profil_photographers/${photographerDataById.name}/${nextMedia.video}" controls></video>`
      }
      <p tabindex="0" class="lightbox__title">${nextMedia.title}</p>
      `;
    });
    this._btnNextLightBox.addEventListener("keydown", () => {
      this._currentIndex = (this._currentIndex + 1) % this._array.length;
      const nextMedia = this._array[this._currentIndex];

      this._lightbox__container.innerHTML = `
      ${
        nextMedia.image
          ? `<img alt="${nextMedia.title}" aria-label="${nextMedia.title}" src="../assets/profil_photographers/${photographerDataById.name}/${nextMedia.image}">`
          : `<video title="${nextMedia.title}" aria-label="${nextMedia.title}" src="../assets/profil_photographers/${photographerDataById.name}/${nextMedia.video}" controls></video>`
      }
      <p tabindex="0" class="lightbox__title">${nextMedia.title}</p>
      `;
    });
  }

  btnPreviousMedia(photographerDataById) {
    this._btnPreviousLightBox.addEventListener("click", () => {
      this._currentIndex = (this._currentIndex - 1) % this._array.length;

      if (this._currentIndex < 0) {
        this._currentIndex = this._array.length - 1;
      }

      const nextMedia = this._array[this._currentIndex];

      this._lightbox__container.innerHTML = `
      ${
        nextMedia.image
          ? `<img alt="${nextMedia.title}" aria-label="${nextMedia.title}" src="../assets/profil_photographers/${photographerDataById.name}/${nextMedia.image}">`
          : `<video title="${nextMedia.title}" aria-label="${nextMedia.title}" src="../assets/profil_photographers/${photographerDataById.name}/${nextMedia.video}" controls></video>`
      }
      <p tabindex="0" class="lightbox__title">${nextMedia.title}</p>
      `;
    });
    this._btnPreviousLightBox.addEventListener("keydown", () => {
      this._currentIndex = (this._currentIndex - 1) % this._array.length;

      if (this._currentIndex < 0) {
        this._currentIndex = this._array.length - 1;
      }

      const nextMedia = this._array[this._currentIndex];

      this._lightbox__container.innerHTML = `
      ${
        nextMedia.image
          ? `<img alt="${nextMedia.title}" aria-label="${nextMedia.title}" src="../assets/profil_photographers/${photographerDataById.name}/${nextMedia.image}">`
          : `<video title="${nextMedia.title}" aria-label="${nextMedia.title}" src="../assets/profil_photographers/${photographerDataById.name}/${nextMedia.video}" controls></video>`
      }
      <p tabindex="0" class="lightbox__title">${nextMedia.title}</p>
      `;
    });
  }
}
