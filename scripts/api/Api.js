class Api {
  constructor(url) {
    this._url = url;
  }

  async get(id) {
    try {
      const res = await fetch(this._url);
      const data = await res.json();
      if (id) {
        return data.find((dataPhotographer) => dataPhotographer.id === id);
      }
      console.log(data.photographers);
      return data;
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  }
}

class DataApi extends Api {
  constructor(url) {
    super(url);
  }

  async getData(id) {
    return await this.get(id);
  }
}
