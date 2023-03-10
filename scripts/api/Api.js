class Api {
  constructor(url) {
    this._url = url;
  }

  async getPhotographerAll() {
    try {
      const res = await fetch(this._url);
      const data = await res.json();
      console.log(data);

      const photographerAll = data.photographers;
      return photographerAll;
    } catch (err) {
      throw new Error("Error fetching data:", err);
    }
  }

  async getPhotographerById(id) {
    try {
      const res = await fetch(this._url);
      const data = await res.json();

      const photographerById = data.photographers.find(
        (dataPhotographer) => dataPhotographer.id === id
      );
      return photographerById;
    } catch (err) {
      throw new Error("Error fetching data :", err);
    }
  }

  async getMediaById(id) {
    try {
      const res = await fetch(this._url);
      const data = await res.json();

      const photographerMediaById = data.media.filter(
        (dataMediaPhotographer) => dataMediaPhotographer.photographerId === id
      );

      return photographerMediaById;
    } catch (err) {
      throw new Error("Error fetching data:", err);
    }
  }
}

// eslint-disable-next-line no-unused-vars
class DataApi extends Api {
  constructor(url) {
    super(url);
  }

  async getDataAll() {
    return await this.getPhotographerAll();
  }

  async getDataById(id) {
    return await this.getPhotographerById(id);
  }

  async getDataMediaById(id) {
    return await this.getMediaById(id);
  }
}
