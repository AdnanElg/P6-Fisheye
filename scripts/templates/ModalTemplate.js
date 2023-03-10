class PhotographerModale {
  constructor(PhotographerDataById) {
    this._photographers = PhotographerDataById;
  }

  createPhotographerModale() {
    const photographerModale = document.createElement("div");
    photographerModale.classList.add("modal");

    const modalePhotographer = `
            <header>
                <h2 tabindex="0">Contactez-moi <br> ${this._photographers.name}</h2>
                <img
                    id="btnCloseModale"
                    src="../assets/icons/close.svg"
                    alt="Icône de fermeture"
                    tabindex="0"
                />
            </header>
            <form>
                <div class="container-firstName">
                    <label for="firstName">Prénom</label>
                    <input id="firstName" aria-label="Champ de saisie du prénom" aria-invalid="false" aria-invalid="false" aria-describedby="firstNameError" />
                    <p id="firstNameError" role="alert" aria-live="assertive" aria-atomic="true"><!-- ci est un message d'erreur --></p>
                </div>
                <div class="container-lastName">
                    <label for="lastName">Nom</label>
                    <input id="lastName" aria-label="Champ de saisie du nom" aria-invalid="false" aria-describedby="firstLastName" />
                    <p id="lastNameError" role="alert" aria-live="assertive" aria-atomic="true"><!-- ci est un message d'erreur --></p>
                </div>
                <div class="container-email">
                    <label for="email">Email</label>
                    <input id="email" aria-label="Champ de saisie de l'email" aria-invalid="false" aria-describedby="emailError"/>
                    <p id="emailError" role="alert" aria-live="assertive" aria-atomic="true"><!-- ci est un message d'erreur --></p>
                </div>
                <div class="container-message">
                    <label for="message">Message</label>
                    <textarea id="message" aria-label="Champ de saisie du message" aria-invalid="false" aria-describedby="messageError"></textarea>
                    <p id="messageError" role="alert" aria-live="assertive" aria-atomic="true"><!-- ci est un message d'erreur --></p>
                </div>
                <button
                    type="button"
                    id="submit_form"
                    aria-label="Bouton d'envoi du formulaire de contact"
                >
                    Envoyer
                </button>
            </form>
        `;

    photographerModale.innerHTML = modalePhotographer;

    setTimeout(() => {
      const modal = new Modal();
      modal.openModalInit();
      modal.closeModalInit();
      modal.controlRegExpInput();
    }, 50);

    return photographerModale;
  }
}
