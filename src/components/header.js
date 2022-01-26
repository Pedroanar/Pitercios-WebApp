import "../index.css";
import React from "react";
import ImgIni from "../imagenes/PiT3Inicial.png";

export default function HEADER() {
  return (
    <div className="page">
      <div className="container">
        <img className="imgprin" src={ImgIni} alt="imgprin" />
        <p className="nombre">Pitercios</p>
        <p className="eslogan">El aula de aprender</p>
      </div>
    </div>
  );
}
