class Likes {
  constructor(photographerDataLikes) {
 
    this._isLiked = false;

    this._toggleLike = document.querySelector(
      `#likes-${photographerDataLikes}`
    );

    this._countLikes = document.querySelector(
      `.countLikes-${photographerDataLikes}`
    );

    this._totalCountLikes = document.querySelector(`#sommeslikes`);
  }

  counterLike(photographerDataLikes) {
    this._toggleLike.addEventListener("click", (e) => {
      e.preventDefault();
      if (this._isLiked) {
        photographerDataLikes -= 1;
        this.decrementTotalLikes();
        this._isLiked = false;
      } else {
        photographerDataLikes += 1;
        this.incrementTotalLikes();
        this._isLiked = true;
      }

      this._countLikes.innerHTML = `<span>${photographerDataLikes}</span>`;
    });
  }

  incrementTotalLikes() {
    let totalLikes = this._totalCountLikes.dataset.likes;
    totalLikes = parseInt(totalLikes) + 1;

    this._totalCountLikes.dataset.likes = totalLikes;
    this._totalCountLikes.innerHTML = `<span aria-label= "Nombre de likes : ${totalLikes}" id='sommeslikes' data-likes="${totalLikes}"><span>${totalLikes}</span> <i class="heart fas fa-heart"></i></span> `;
  }

  decrementTotalLikes() {
    let totalLikes = this._totalCountLikes.dataset.likes;
    totalLikes = parseInt(totalLikes) - 1;
    
    this._totalCountLikes.dataset.likes = totalLikes;
    this._totalCountLikes.innerHTML = `<span aria-label= "Nombre de likes : ${totalLikes}" id='sommeslikes' data-likes="${totalLikes}"><span>${totalLikes}</span> <i class="heart fas fa-heart"></i></span> `;
  }
}