import { emitirAutenticarUsuario } from "./socket-front-login.js";

const form = document.getElementById("form-login");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let nome = form["input-usuario"].value;
  let senha = form["input-senha"].value;
  emitirAutenticarUsuario({ nome, senha });
});
