import { emitirCadastroUsuario } from "./socket-front-cadastro.js";

const form = document.getElementById("form-cadastro");

form.addEventListener("click", (event) => {
  event.preventDefault();
  const nome = form["input-usuario"].value;
  const senha = form["input-senha"].value;
  emitirCadastroUsuario({ nome, senha });
});
