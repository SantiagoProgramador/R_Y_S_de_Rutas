document
  .getElementById("contact-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = {
      nombre: form.nombre.value,
      email: form.email.value,
      mensaje: form.mensaje.value,
    };

    const response = await fetch("https://formspree.io/f/manobbrn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const resultMessage = document.getElementById("form-message");
    if (response.ok) {
      resultMessage.textContent =
        "Mensaje enviado correctamente. ¡Gracias por contactarnos!";
      resultMessage.className = "alert alert-success";
      form.reset();
    } else {
      resultMessage.textContent =
        "Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo más tarde.";
      resultMessage.className = "alert alert-danger";
    }
  });
