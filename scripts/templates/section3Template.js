class PhotographerSection3 {
  constructor(photographerDataMediaById, photographerDataById) {
    this._photographers = photographerDataMediaById;
    this._photographers2 = photographerDataById;
  }

  createPhotographArticleSection3() {
    const photograph_section3 = document.createElement("article");
    photograph_section3.classList.add("section3_article");

    const photographerArticle = "";

    if (this._photographers.type === "image") {
      photographerArticle = `
          <figure>
            <img src='../assets/profil_photographers/${this._photographers2.name}/${this._photographers.image}'>
            <figcaption>
              <p>${this._photographers.title}</p>
              <div>
                <span>${this._photographers.likes}</span>
                <i class="heart fas fa-heart"></i>
              </div>
            </figcaption>
          </figure>
        `;
    } else if (this._photographers.type === "video") {
      photographerArticle = `
          <figure>
            <video src='../assets/profil_photographers/${this._photographers2.name}/${this._photographers.video}'></video>
            <figcaption>
              <p>${this._photographers.title}</p>
              <div>
                <span>${this._photographers.likes}</span>
                <i class="heart fas fa-heart"></i>
              </div>
            </figcaption>
          </figure>
        `;
    }

    photograph_section3.innerHTML = photographerArticle;
    console.log(photographerArticle);
    return photograph_section3;
  }
}
