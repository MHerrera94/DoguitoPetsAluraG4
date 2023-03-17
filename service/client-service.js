const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

const detalleCliente = (id) =>
  fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) =>
    respuesta.json()
  );
export const clientService = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
};
