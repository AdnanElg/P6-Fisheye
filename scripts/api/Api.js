class Api {
  constructor(url) {
    this._url = url;
  }

  async getPhotographerAll() {
    try {
      const res = await fetch(this._url);
      const data = await res.json();

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
      throw new Error("Error fetching data Id:", err);
    }
  }
}

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
}
