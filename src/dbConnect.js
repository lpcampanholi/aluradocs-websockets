import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://lpcampanholi:lpcampanholi123@cluster0.f412eyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

let documentosColecao;

try {
  await cliente.connect();
  const db = cliente.db("websockets");
  documentosColecao = db.collection("docs");
  console.log("Conectado ao banco de dados com sucesso!");
} catch(erro) {
  console.log(erro);
};

export { documentosColecao };
