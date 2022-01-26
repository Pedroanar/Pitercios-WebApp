import "../index.css";
import React from "react";

export default function Header() {
  return (
    <>
      <img
        className="imgprin"
        src={"/imagenes/PiT3Inicial.png"}
        alt="imgprin"
      />
      <p className="nombre">Pitercios</p>
      <p className="eslogan">El aula de aprender</p>
    </>
  );
}
