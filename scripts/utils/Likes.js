class Likes {
  constructor(photographerDataLikes, photographerSommesDataLikes) {
    this._isLiked = false;

    this._toggleLike = document.querySelector(
      `#likes-${photographerDataLikes}`
    );

    this._countLikes = document.querySelector(
      `.countLikes-${photographerDataLikes}`
    );

    this._totalCountLikes = document.querySelector(
      `#sommeslikes-${photographerSommesDataLikes}`
    );
  }

  counterLike(photographerDataLikes, photographerSommesDataLikes) {
    this._toggleLike.addEventListener("click", (e) => {
      e.preventDefault();
      if (this._isLiked) {
        photographerDataLikes -= 1;
        photographerSommesDataLikes -= 1;
        this._isLiked = false;
      } else {
        photographerDataLikes += 1;
        photographerSommesDataLikes += 1;
        this._isLiked = true;
      }

      this._countLikes.innerHTML = `<span>${photographerDataLikes}</span>`;
      // this._totalCountLikes.innerHTML = `<span aria-label= "Nombre de likes : ${photographerSommesDataLikes}" id='sommeslikes-${photographerSommesDataLikes}'>${photographerSommesDataLikes} <i class="heart fas fa-heart"></i></span>`;
    });
  }
}
