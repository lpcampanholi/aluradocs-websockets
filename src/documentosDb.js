import { documentosColecao } from "./dbConnect.js";

function obterDocumentos() {
  const documentos = documentosColecao.find().toArray();
  return documentos;
};

function encontrarDocumento(nome) {
  const documentoEncontrado = documentosColecao.findOne({
    nome: nome
  });
  return documentoEncontrado;
};

function atualizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne({
    nome
  }, {
    $set: {
      texto
    }
  });
  return atualizacao;
};

export { encontrarDocumento, atualizaDocumento, obterDocumentos };
