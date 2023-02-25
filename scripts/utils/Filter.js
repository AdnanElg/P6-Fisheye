class Filter {
  constructor() {
    this._btnFilterOpen = document.querySelector("#btnFilter");
    this._container_select = document.querySelector(".container-select");
    this._btnFilterClose = document.querySelector(
      ".container-select ul li:nth-child(1) > i"
    );
  }

  openFilterInit() {
    this._btnFilterOpen.addEventListener("click", (e) => {
      e.preventDefault();
      this._container_select.style.display = "block";
    });
  }

  closeFilterInit() {
    this._btnFilterClose.addEventListener("click", (e) => {
      e.preventDefault();
      this._container_select.style.display = "none";
    });
  }
}
