class PhotographerSection3 {
  constructor(photographerDataMediaById, photographerDataById) {
    this._photographers = photographerDataMediaById;
    this._photographers2 = photographerDataById;
  }

  createPhotographArticleSection3() {
    const photograph_section3 = document.createElement("article");
    photograph_section3.classList.add("section3_articles");

    const mediaFactory = new MediaFactory();
    const media = mediaFactory.createMedia(
      this._photographers,
      this._photographers2
    );

    const photographerArticle = `
      <figure>
          ${
            media.type === "image"
              ? `<img alt="${media.alt}" src="${media.src}">`
              : media.type === "video"
              ? `<video  title="${media.alt}" aria-label="${media.alt}" src="${media.src}"></video>`
              : ""
          }
          <figcaption>
            <p class='article_title'>${this._photographers.title}</p>
            <div class='articles_likes'>
              <span aria-label='Nombre de likes : ${
                this._photographers.likes
              }'>${this._photographers.likes}</span>
              <i class="heart fas fa-heart"></i>
            </div>
          </figcaption>
      </figure>
    `;

    photograph_section3.innerHTML = photographerArticle;

    return photograph_section3;
  }
}
