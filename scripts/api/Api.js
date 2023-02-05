class Api {
  constructor(url) {
    this._url = url;
  }

  async get() {
    try {
      const res = await fetch(this._url);
      const data = await res.json();
      console.log(data.photographers);
      return data;
    } catch (err) {
      console.log("Error fetching data:", err);
      s;
    }
  }
}

class PhotographersApi extends Api {
  constructor(url) {
    super(url);
  }

  async getDataPhotographers() {
    return await this.get();
  }
}
