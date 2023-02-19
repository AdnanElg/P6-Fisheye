export class MediaFactory {
    constructor (photographerDataMediaById, photographerDataById) {
        if (photographerDataMediaById.hasOwnProperty("image")) {
        return new ImageMedia(photographerDataMediaById, photographerDataById);
      } else if (photographerDataMediaById.hasOwnProperty("video")) {
        return new VideoMedia(photographerDataMediaById, photographerDataById);
      } else {
        throw new Error("Unknown media type");
      }
    }
  }
  
export class ImageMedia {
    constructor(photographerDataMediaById, photographerDataById) {
        return `<img src='../assets/profil_photographers/${photographerDataById.name}/${photographerDataMediaById.image}'>`
    }
  }

export class VideoMedia {
    constructor(photographerDataMediaById, photographerDataById) {
       `<video src='../assets/profil_photographers/${photographerDataById.name}/${photographerDataMediaById.video}'></video>`
    }
  }
  