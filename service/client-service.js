// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOfF5Fh7vVhV78rAGhjEv6v15MjNYJ3O0",
  authDomain: "portafolio-miguelherrera.firebaseapp.com",
  projectId: "portafolio-miguelherrera",
  storageBucket: "portafolio-miguelherrera.appspot.com",
  messagingSenderId: "38753873407",
  appId: "1:38753873407:web:efb554a10bba9f36608bca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* NUevo codigo con Firestore*/

const db = getFirestore();

const crearCliente = (nombre, email) =>
  addDoc(collection(db, "perfil"), { nombre, email });

const listaClientes = () => getDocs(collection(db, "perfil"));

const onListaClientes = (callback) =>
  onSnapshot(collection(db, "perfil"), callback);

const eliminarCliente = (id) => deleteDoc(doc(db, "perfil", id));

const detalleCliente = (id) => getDoc(doc(db, "perfil", id));
/* Codigo anterior a ser modificado*/

const actualizarCliente = (id, newField) =>
  updateDoc(doc(db, "perfil", id), newField);
export const clientService = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
  onListaClientes,
};
