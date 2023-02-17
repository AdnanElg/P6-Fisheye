class PhotographerSection4 {
  constructor(photographerDataMediaById, photographerDataById) {
    this._photographers = photographerDataMediaById;
    this.sommesLikes = 0; 
    
    for (let i = 0; i < photographerDataMediaById.length; i++) {
      this.sommesLikes += photographerDataMediaById[i].likes;
    }
    this._photographers2 = photographerDataById;
  }
  createPhotographTotalSection4() {

    const photograph_section4 = document.createElement("div");
    photograph_section4.classList.add("container-total");

    const photographerTotal = `
          <span>${this.sommesLikes} <i class="heart fas fa-heart"></i></span> 
          <span>${this._photographers2.price}€ / jours</span>
      `;

    photograph_section4.innerHTML = photographerTotal;

    return photograph_section4;
  }
}
