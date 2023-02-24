class MediaFactory {
  createMedia(photographerDataMediaById, photographerDataById) {
    if (photographerDataMediaById.hasOwnProperty("image")) {
      return new ImageMedia(photographerDataMediaById, photographerDataById);
    } else if (photographerDataMediaById.hasOwnProperty("video")) {
      return new VideoMedia(photographerDataMediaById, photographerDataById);
    } else {
      throw new Error("Unknown media type");
    }
  }
}

class ImageMedia {
  constructor(photographerDataMediaById, photographerDataById) {
    this.type = "image";
    this.src = `../assets/profil_photographers/${photographerDataById.name}/${photographerDataMediaById.image}`;
    this.alt = photographerDataMediaById.title;
  }
}

class VideoMedia {
  constructor(photographerDataMediaById, photographerDataById) {
    this.type = "video";
    this.src = `../assets/profil_photographers/${photographerDataById.name}/${photographerDataMediaById.video}`;
    this.alt = photographerDataMediaById.title;
  }
}
