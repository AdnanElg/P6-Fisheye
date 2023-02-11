class PhotographerSection3 {
  constructor(photographerDataMediaById) {
    this._photographers = photographerDataMediaById;
  }

  createPhotographArticleSection3() {
    const photograph_section3 = document.createElement("article");
    photograph_section3.classList.add("section3_article");

    const photographerArticle = `
        
            <img alt="Photo de profil de ${this._photographers.name}" aria-hidden="true" class='card_picture' src="../assets/profil_photographers/${this._photographers.image}">
         
           
              <span aria-hidden="true" class='cards_country'>${this._photographers.title}</span>
              <p class='cards_tagline' aria-label="Phrase d'accroche du photographe">${this._photographers.likes}</p>
      
      `;

    photograph_section3.innerHTML = photographerArticle;

    return photograph_section3;
  }
}
