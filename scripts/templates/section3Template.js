// import { MediaFactory, ImageMedia, VideoMedia } from './media.js';
class PhotographerSection3 {
  constructor(photographerDataMediaById, photographerDataById) {
    this._photographers = photographerDataMediaById;
    this._photographers2 = photographerDataById;
  }

  createPhotographArticleSection3() {
    const photograph_section3 = document.createElement("article");
    photograph_section3.classList.add("section3_articles");
    
    // const mediaFactory = new MediaFactory(photographerDataMediaById, photographerDataById);
    // const imageMedia = new ImageMedia(photographerDataMediaById, photographerDataById);
    // const videoMedia = new VideoMedia(photographerDataMediaById, photographerDataById);
    
    let photographerArticle = `
      <figure>
          ${
            this._photographers.hasOwnProperty("image")
              ? `<img alt="${this._photographers.image}" src='../assets/profil_photographers/${this._photographers2.name}/${this._photographers.image}'>`
              : this._photographers.hasOwnProperty("video")
              ? `<video alt="${this._photographers.video}" src='../assets/profil_photographers/${this._photographers2.name}/${this._photographers.video}'></video>`
              : ""
          }
          <figcaption>
            <p class='article_title'>${this._photographers.title}</p>
            <div class='articles_likes'>
              <span aria-label='Nombre de likes : ${this._photographers.likes}'>${this._photographers.likes}</span>
              <i class="heart fas fa-heart"></i>
            </div>
          </figcaption>
      </figure>
    `;

    photograph_section3.innerHTML = photographerArticle;
    return photograph_section3;
  }
}
