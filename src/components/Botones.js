import "../index.css";
import React from "react";
import botonlist from "../utils/botoneslist";

const Botones = ({ setRoute }) => {
  return (
    <div className="botonera">
      {botonlist.map((botonlist, i) => (
        <div
          key={i}
          className="card"
          onClick={() => setRoute(`${botonlist.click}`)}
        >
          <a
            target="_blank"
            rel="noreferrer"
            className="card-a"
            href={botonlist.link}
          >
            <img src={botonlist.img} className="card-img" alt={`imagen-${i}`} />
            {/* <GiStarsStack /> */}
            <p className="card-text">{botonlist.texto}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Botones;
