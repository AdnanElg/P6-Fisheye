// eslint-disable-next-line no-unused-vars
class PhotographerLightBox {
  constructor(photographerDataMediaById, photographerDataById) {
    this._photographers = photographerDataMediaById;
    this._photographers2 = photographerDataById;
  }

  createPhotographerLightBox() {
    const photographerLightBox = document.createElement("div");
    photographerLightBox.classList.add("modal-lightBox");

    const lightBoxPhotographer = `
  
              <button type="button" class="btnCloseLightBox" aria-label="Fermer la lightbox">
                  <i tabindex="0" class="fas fa-times" aria-hidden="true"></i>
              </button>
  
              <button tabindex="0" type="button" class="button-previous" aria-label="Précédent">
                  <i class="fas fa-chevron-left"></i>
              </button>
  
              <button tabindex="0" type="button" class="button-next" aria-label="Suivant">
                  <i class="fas fa-chevron-right" aria-hidden="true"></i>
              </button>
             
              <div tabindex="0" class="lightbox__container" role="dialog" aria-label="Contenu de la lightbox"></div>
      `;

    photographerLightBox.innerHTML = lightBoxPhotographer;

    setTimeout(() => {
      for (let i = 0; i < this._photographers.length; i++) {
        // eslint-disable-next-line no-undef
        const lightBox = new LightBox(
          this._photographers[i],
          this._photographers
        );
        lightBox.openLightBox(this._photographers[i], this._photographers2);
        lightBox.closeOpenLightBox();
        lightBox.btnNextMedia(this._photographers2);
        lightBox.btnPreviousMedia(this._photographers2);
      }
    }, 50);

    return photographerLightBox;
  }
}
