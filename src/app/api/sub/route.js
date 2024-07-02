import { data } from "../../data/users.js";
const fs = require("node:fs");

export async function POST(request) {
  const { data: email } = await request.json();
  const newData = {
    id: data.length + 1,
    user: email,
  };

  // Adicionar o novo dado ao array
  data.push(newData);

  // Persistir o array atualizado no arquivo users.js
  const dataToWrite = `export let data = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync("src/app/data/users.js", dataToWrite, "utf-8");

  // // Adicionar o novo dado no arquivo de emails (opcional, se ainda necessário)
  // fs.appendFileSync(
  //   "src/app/data/email.txt",
  //   JSON.stringify(newData) + "\n",
  //   "utf-8"
  // );

  console.log(data); // Verificar o conteúdo do array no console

  return new Response(JSON.stringify(newData), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
