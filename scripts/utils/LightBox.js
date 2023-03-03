class LightBox {
  constructor() {
    this._openLightBoxImg = document.querySelectorAll(".openLightBoxImg");
    this._openLightBoxVideo = document.querySelectorAll(".openLightBoxVideo");
  }

  openLightBoxInit() {
    this._openLightBoxImg.forEach((img) => {
      img.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(this._openLightBoxImg);
      });
    });

    this._openLightBoxVideo.forEach((video) => {
      video.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(this._openLightBoxVideo);
      });
    });
  }
}
