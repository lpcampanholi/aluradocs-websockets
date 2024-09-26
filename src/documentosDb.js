import { documentosColecao } from "./dbConnect.js";

function obterDocumentos() {
  const documentos = documentosColecao.find().toArray();
  return documentos;
};

function adiconarDocumento(nome) {
  const resultado = documentosColecao.insertOne({
    nome: nome,
    texto: ""
  });
  return resultado;
};

function encontrarDocumento(nome) {
  const documentoEncontrado = documentosColecao.findOne({
    nome: nome
  });
  return documentoEncontrado;
};

function atualizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne({
    nome: nome
  }, {
    $set: {
      texto: texto
    }
  });
  return atualizacao;
};

function excluirDocumento(nome) {
  const resultado = documentosColecao.deleteOne({
    nome: nome
  });
  return resultado;
};

export {
  encontrarDocumento,
  atualizaDocumento,
  obterDocumentos,
  adiconarDocumento,
  excluirDocumento
};
