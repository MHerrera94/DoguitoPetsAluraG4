import { clientService } from "../service/client-service.js";
const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id == null) {
    window.location.href = "../screens/error.html";
  }
  const nombre = document.querySelector("[data-nombre]");
  const email = document.querySelector("[data-email]");
  // usando await method
  try {
    const perfil = await clientService.detalleCliente(id);
    if (perfil.name && perfil.email) {
      nombre.value = perfil.name;
      email.value = perfil.email;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error();
    window.location.href = "../screens/error.html";
  }
};

obtenerInformacion();

formulario.addEventListener("submit", async (event) => {
  event.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  try {
    const perfil = await clientService.actualizarCliente(nombre, email, id);
    window.location.href = "../screens/edicion_concluida.html";
  } catch (error) {
    console.error();
  }
});
