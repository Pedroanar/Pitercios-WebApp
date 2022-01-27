import "./index.css";
import React, { useState } from "react";
//import { GiStarsStack } from "react-icons/gi";

export default function App() {
  const [route, setRoute] = useState("home");

  const [contador, setContador] = useState(0);
  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  //Pruebas setRoute
  const bot = () => setRoute("home");
  // const cont = () => setRoute("contador");

  /* Lista de las los botones */

  const botones = [
    {
      texto: "Pitercios.es",
      img: "/imagenes/botones/www.png",
      link: "http://pitercios.es/"
    },
    {
      texto: "Apuntes",
      img: "/imagenes/botones/apuntes.png",
      onClick: () => setRoute("contador")
    },
    {
      texto: "Discord",
      img: "/imagenes/botones/discord.png",
      link: "https://discord.gg/p29SxBSZGt"
    },
    {
      texto: "Whatsapp",
      img: "/imagenes/botones/whatsapp.png",
      link: "https://wa.me/34609761038"
    },
    {
      texto: "Inscripción",
      img: "/imagenes/botones/inscripcion.png",
      link: "http://pitercios.es/inscripcion/"
    },
    {
      texto: "Reseña",
      img: "/imagenes/botones/resena.png",
      link: "https://goo.su/awsa"
    }
  ];

  /* Lista de las redes sociales */

  const rrss = [
    {
      href: "https://www.instagram.com/pitercios_ss/",
      img: "/imagenes/RRSS/instagram.svg"
    },
    {
      href: "https://www.youtube.com/channel/UCfY--oU6p_PpuF1Pao5rDsw",
      img: "/imagenes/RRSS/youtube.svg"
    },
    {
      href: "https://wa.me/34609761038",
      img: "/imagenes/RRSS/youtube.svg"
    },
    {
      href: "mailto:info@pitercios.es",
      img: "/imagenes/RRSS/mail.svg"
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <img
          className="imgprin"
          src="/imagenes/PiT3Inicial.png"
          alt="imgprin"
        />
        <p className="nombre">Pitercios</p>
        <p className="eslogan">El aula de aprender</p>

        {/* Parte de las redes sociales */}

        <div>
          {rrss.map((rrss, i) => (
            <span key={i}>
              <a
                target="_blank"
                rel="noreferrer"
                className="rrss-a"
                href={rrss.href}
              >
                <img className="imgrrss" src={rrss.img} alt={`imagen-${i}`} />
              </a>
            </span>
          ))}
        </div>

        {/* Parte de los botones */}

        {route === "home" && (
          <div className="botonera">
            {botones.map((boton, i) => (
              <div key={i} className="card" onClick={boton.onClick}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="card-a"
                  href={boton.link}
                >
                  <img
                    src={boton.img}
                    className="card-img"
                    alt={`imagen-${i}`}
                  />
                  {/* <GiStarsStack /> */}
                  <p className="card-text">{boton.texto}</p>
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Parte de prueba suma-resta */}

        {route === "contador" && (
          <div>
            <p>Valor: {contador}</p>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={bot}>Botonera</button>
          </div>
        )}
      </div>
    </div>
  );
}
