// eslint-disable-next-line no-unused-vars
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
            <form tabindex="0" aria-label="Formulaire de contact" aria-invalid="false">
                <div class="container-firstName">
                    <label for="firstName">Prénom</label>
                    <input tabindex="0" id="firstName" aria-label="Champ de saisie du prénom" aria-describedby="firstNameError" />
                    <p id="firstNameError" role="alert" aria-live="assertive" aria-atomic="true"><!-- ci est un message d'erreur --></p>
                </div>
                <div class="container-lastName">
                    <label for="lastName">Nom</label>
                    <input tabindex="0" id="lastName" aria-label="Champ de saisie du nom" aria-describedby="firstLastName" />
                    <p id="lastNameError" role="alert" aria-live="assertive" aria-atomic="true"><!-- ci est un message d'erreur --></p>
                </div>
                <div class="container-email">
                    <label for="email">Email</label>
                    <input tabindex="0" id="email" aria-label="Champ de saisie de l'email" aria-describedby="emailError"/>
                    <p id="emailError" role="alert" aria-live="assertive" aria-atomic="true"><!-- ci est un message d'erreur --></p>
                </div>
                <div class="container-message">
                    <label for="message">Message</label>
                    <textarea tabindex="0" id="message" aria-label="Champ de saisie du message" aria-describedby="messageError"></textarea>
                    <p id="messageError" role="alert" aria-live="assertive" aria-atomic="true"><!-- ci est un message d'erreur --></p>
                </div>
                <button
                    tabindex="0"
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
      // eslint-disable-next-line no-undef
      const modal = new Modal();
      modal.openModalInit();
      modal.closeModalInit();
      modal.controlRegExpInput();
    }, 50);

    return photographerModale;
  }
}
