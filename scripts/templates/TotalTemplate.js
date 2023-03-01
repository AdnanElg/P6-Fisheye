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
        <span aria-label= "Nombre de likes : ${this.sommesLikes}" id='sommeslikes-${this.sommesLikes}'>${this.sommesLikes} <i class="heart fas fa-heart"></i></span> 
        <span aria-label= "Prix : ${this._photographers2.price} euros par jour">${this._photographers2.price}€ / jours</span>
    `;

    photograph_section4.innerHTML = photographerTotal;

    for (let i = 0; i < this._photographers.length; i++) {
      setTimeout(() => {
        const sommesCountLikes = new Likes(
          this._photographers[i].likes,
          this.sommesLikes
        );
        sommesCountLikes.counterLike(
          this._photographers[i].likes,
          this.sommesLikes
        );
      }, 50);
    }

    return photograph_section4;
  }
}
