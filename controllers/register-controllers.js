import { clientService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  try {
    const perfil = await clientService.crearCliente(nombre, email);
    window.location.href = "../screens/registro_completado.html";
  } catch (error) {
    console.error();
  }
});
