import react, { useState } from "react";
import Login from "@/components/Login";
import Cadastro from "@/components/Cadastro";

export default function Home() {
  const [login, setLogin] = useState<"login" | "cadastro">("login");

  return <main>{login === "login" ? <Login /> : <Cadastro />}</main>;
}
