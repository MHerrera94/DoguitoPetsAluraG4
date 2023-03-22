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
    const data = perfil.data();
    if (data.nombre && data.email) {
      nombre.value = data.nombre;
      email.value = data.email;
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
    await clientService.actualizarCliente(id, { nombre: nombre, email: email });
    window.location.href = "../screens/edicion_concluida.html";
  } catch (error) {
    console.error();
  }
});
