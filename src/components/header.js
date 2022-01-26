import "../index.css";
import React from "react";

export default function HEADER() {
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
