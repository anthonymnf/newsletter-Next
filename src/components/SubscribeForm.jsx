"use client";

import { useState } from "react";
import { useToast } from "./ui/use-toast";

async function enviarDados(email) {
  const response = await fetch("/api/sub", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: email }), // Certifique-se de enviar o JSON correto
  });
  console.log("Passou aq");
}

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Corrigido para evitar o comportamento padrão do formulário
    await enviarDados(email); // Aguarda o envio dos dados

    setEmail("");
    toast({
      title: "E-mail cadastrado com sucesso ✔",
    });
  };

  return (
    <form className="flex justify-center gap-4 p-4" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Seu e-mail principal"
        className="bg-slate-800 p-3 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="bg-sky-700 hover:bg-sky-600 p-3 rounded">
        Se inscrever
      </button>
    </form>
  );
}
