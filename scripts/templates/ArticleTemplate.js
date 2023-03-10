// eslint-disable-next-line no-unused-vars
class PhotographerSection3 {
  constructor(photographerDataMediaById, photographerDataById) {
    this._photographers = photographerDataMediaById;
    this._photographers2 = photographerDataById;
  }

  createPhotographArticleSection3() {
    const photograph_section3 = document.createElement("article");
    photograph_section3.classList.add("section3_articles");

    // eslint-disable-next-line no-undef
    const mediaFactory = new MediaFactory();
    const media = mediaFactory.createMedia(
      this._photographers,
      this._photographers2
    );

    const photographerArticle = `
      <figure title=${this._photographers.title} tabindex="0">
   
          ${
            media.type === "image"
              ? `<img class='media-${this._photographers.id}' tabindex="0" title='${media.alt}' alt="${media.alt}" src="${media.src}">`
              : media.type === "video"
              ? `<video class='media-${this._photographers.id}' tabindex="0" title="${media.alt}" aria-label="${media.alt}"  src="${media.src}"></video>`
              : ""
          }
   
          <figcaption tabindex="0">
            <p tabindex="0" class='article_title'>${
              this._photographers.title
            }</p>
            <div class='articles_likes'>
              <span tabindex="0" class='countLikes-${
                this._photographers.likes
              }'  aria-label='Nombre de likes : ${this._photographers.likes}'>${
      this._photographers.likes
    }</span>
              <i tabindex="0" id='likes-${
                this._photographers.likes
              }' class="heart fas fa-heart" aria-label="Ajouter un like"></i>
            </div>
          </figcaption>
      </figure>
    `;

    photograph_section3.innerHTML = photographerArticle;

    return photograph_section3;
  }
}
