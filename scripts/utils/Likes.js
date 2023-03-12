// eslint-disable-next-line no-unused-vars
class Likes {
  constructor(photographerDataLikes) {
    this._isLiked = false;

    this._totalLikes = 0;

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

      this._countLikes.innerHTML = `${photographerDataLikes}`;
    });
  }

  incrementTotalLikes() {
    let totalLikes = this._totalCountLikes.dataset.likes;
    totalLikes = parseInt(totalLikes) + 1;

    this._totalCountLikes.setAttribute(
      "aria-label",
      `Nombre de likes : ${totalLikes}`
    );
    this._totalCountLikes.querySelector(".nbTotalLikes").innerHTML = totalLikes;
    this._totalCountLikes.dataset.likes = totalLikes;
  }

  decrementTotalLikes() {
    let totalLikes = this._totalCountLikes.dataset.likes;
    totalLikes = parseInt(totalLikes) - 1;
    this._totalCountLikes.setAttribute(
      "aria-label",
      `Nombre de likes : ${totalLikes}`
    );
    this._totalCountLikes.querySelector(".nbTotalLikes").innerHTML = totalLikes;
    this._totalCountLikes.dataset.likes = totalLikes;
  }
}
