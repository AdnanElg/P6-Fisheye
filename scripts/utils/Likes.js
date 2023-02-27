class Likes {
  constructor(photographerDataLikes) {
    this._isLiked = false;
    this._toggleLike = document.querySelector(
      `#likes-${photographerDataLikes}`
    );
    this._countLikes = document.querySelector(
      `.countLikes-${photographerDataLikes}`
    );
    this._totalCountLikes = document.querySelector(
      `#totalCountLikes-${photographerDataLikes}`
    );
  }

  counterLike(photographerDataLikes) {
    this._toggleLike.addEventListener("click", (e) => {
      e.preventDefault();

      if (this._isLiked) {
        photographerDataLikes -= 1;
        this._isLiked = false;
      } else {
        photographerDataLikes += 1;
        this._isLiked = true;
      }

      this._countLikes.innerHTML = `<span'>${photographerDataLikes}</span>`;
    });
  }

  totalCounterLike(photographerDataLikes) {
    this._toggleLike.addEventListener("click", (e) => {
      e.preventDefault();

      if (this._isLiked) {
        photographerDataLikes -= 1;
        this._isLiked = false;
      } else {
        photographerDataLikes += 1;
        this._isLiked = true;
      }

      this._totalCountLikes.innerHTML = `<span>${photographerDataLikes}</span> `;
    });
  }
}
