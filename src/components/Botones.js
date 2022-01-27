import "../index.css";
import React from "react";
import boton from "../utils/botoneslist";

export default function Botones() {
  return (
    <div className="botonera">
      {boton.map((boton, i) => (
        <div key={i} className="card" onClick={boton.onClick}>
          <a
            target="_blank"
            rel="noreferrer"
            className="card-a"
            href={boton.link}
          >
            <img src={boton.img} className="card-img" alt={`imagen-${i}`} />
            {/* <GiStarsStack /> */}
            <p className="card-text">{boton.texto}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
