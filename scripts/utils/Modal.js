class Modal {
  constructor() {
    this._btnOpenModal = document.querySelector("#btnOpenModal");
    this._btnCloseModal = document.querySelector("#btnCloseModale");
    this._modalContact = document.querySelector("#contact_modal");

    this._btnOpenModal.addEventListener("click", (e) => {
      e.preventDefault();
      this._modalContact.style.display = "block";
    });

    this._btnCloseModal.addEventListener("click", (e) => {
      console.log(this._btnCloseModal);
      e.preventDefault();
      this._modalContact.style.display = "none";
    });
  }
}
