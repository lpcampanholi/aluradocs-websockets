import { atualizaDocumento, encontrarDocumento, obterDocumentos } from "./documentosDb.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou ID:", socket.id);

  socket.on("obter_documentos", async (devolverDocumentos) => {
    const documentos = await obterDocumentos();
    devolverDocumentos(documentos);
  });

  socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);
    const documento = await encontrarDocumento(nomeDocumento);
    if (documento) {
      devolverTexto(documento.texto);
    };
  });

  socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);
    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    };
  });

  socket.on("disconnect", (motivo) => {
    console.log(`Cliente ${socket.id} desconectado! \n Motivo: ${motivo}`
    );
  });

});
