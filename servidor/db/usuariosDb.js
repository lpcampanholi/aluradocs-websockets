import criarHashESalSenha from "../utils/criaHashESalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

function encontrarUsuario(nome) {
  return usuariosColecao.findOne({ nome: nome });
};

function cadastrarUsuario({ nome, senha }) {
  const { hashSenha, salSenha } = criarHashESalSenha(senha);
  return usuariosColecao.insertOne({ nome, hashSenha, salSenha });
};

export { encontrarUsuario, cadastrarUsuario };
