const whatsappNumber = "573145631502";

const envelopeScreen = document.getElementById("envelopeScreen");
const openButton = document.getElementById("openButton");
const content = document.getElementById("content");

// ABRIR EL SOBRE
openButton.addEventListener("click", () => {
  envelopeScreen.classList.add("opening");
  openButton.disabled = true;

  setTimeout(() => {
    envelopeScreen.classList.add("hidden");
    content.classList.remove("hidden");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, 1100);
});

// CONFIRMAR ASISTENCIA
document.getElementById("yesButton").addEventListener("click", () => {
  const guestCount = document.getElementById("guestCount").value;

  const message =
    "Hola, confirmo mi asistencia a la Primera Comunión de Dylan. " +
    "Asistiremos " + guestCount + ".";

  const url =
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
});

// INFORMAR QUE NO PODRÁ ASISTIR
document.getElementById("noButton").addEventListener("click", () => {
  const message =
    "Hola, gracias por la invitación. No podré asistir a la Primera Comunión de Dylan.";

  const url =
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
});