import "../index.css";
import React from "react";

const Header = ({ setRoute }) => {
  return (
    <>
      <img
        className="imgprin"
        src={"/imagenes/PiT3Inicial.png"}
        alt="imgprin"
        onClick={() => setRoute("home")}
      />
      <p className="nombre">Pitercios</p>
      <p className="eslogan">El aula de aprender</p>
    </>
  );
};

export default Header;
