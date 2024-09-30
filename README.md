# aluradocs-websockets

Para fazer o express usar páginas HTML estáticas:

```js
const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");

app.use(express.static(diretorioPublico));

```
Instalar o nodemon como dependência de desenvolvimento:

```
npm install nodemon -D
```
