import { clientService } from "../service/client-service.js";

const crearNuevaLinea = (nombre, email, id) => {
  const linea = document.createElement("tr");
  const contenido = `<td class="td" data-td>
  ${nombre}
  </td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a
            href="./screens/editar_cliente.html?id=${id}"
              class="simple-button simple-button--edit"
              >
              Editar
            </a>
          </li>
          <li>
            <button class="simple-button simple-button--delete" type="button" id="${id}">
              Eliminar
            </button>
          </li>
        </ul>
      </td>`;
  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
  btn.addEventListener("click", async () => {
    const id = btn.id;
    await clientService.eliminarCliente(id);
    /*window.location.reload();*/
  });
  return linea;
};

const table = document.querySelector("[data-table]");

window.addEventListener("DOMContentLoaded", () => {
  /*const querySnapshot = await clientService.listaClientes();*/
  clientService.onListaClientes((querySnapshot) => {
    table.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const nuevaLinea = crearNuevaLinea(data.nombre, data.email, doc.id);
      table.appendChild(nuevaLinea);
    });
  });
});
