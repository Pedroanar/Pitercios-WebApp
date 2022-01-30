import "../index.css";
import React from "react";
import botonlist from "../utils/botoneslist";

import "../modal.css";
import "./Modal.js";

const Botones = ({ setRoute }) => {
  return (
    <div className="botonera">
      {botonlist.map((botonlist, i) => (
        <div
          key={i}
          className="card"
          onClick={() => setRoute(`${botonlist.click}`)}
          id={botonlist.id}
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
      <div id="myModal" className="modalContainer">
        <div className="modal-content">
          <span className="close">×</span> <h2>Modal</h2>
          <p>Se ha desplegado el modal y bloqueado el scroll del body!</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Botones;
