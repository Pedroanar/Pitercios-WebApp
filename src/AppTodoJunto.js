import "./index.css";
import React, { useState } from "react";
import ImgIni from "./imagenes/PiT3Inicial.png";
import instagram from "./imagenes/RRSS/instagram.svg";
import youtube from "./imagenes/RRSS/youtube.svg";
import whatsapp from "./imagenes/RRSS/whatsapp.svg";
import mail from "./imagenes/RRSS/mail.svg";
import apuntes from "./imagenes/botones/apuntes.png";
import resena from "./imagenes/botones/resena.png";
import discord from "./imagenes/botones/discord.png";
import inscripcion from "./imagenes/botones/inscripcion.png";
import whatsappb from "./imagenes/botones/whatsapp.png";
import www from "./imagenes/botones/www.png";
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
      img: www,
      link: "http://pitercios.es/"
    },
    {
      texto: "Apuntes",
      img: apuntes,
      onClick: () => setRoute("contador")
    },
    {
      texto: "Discord",
      img: discord,
      link: "https://discord.gg/p29SxBSZGt"
    },
    {
      texto: "Whatsapp",
      img: whatsappb,
      link: "https://wa.me/34609761038"
    },
    {
      texto: "Inscripción",
      img: inscripcion,
      link: "http://pitercios.es/inscripcion/"
    },
    {
      texto: "Reseña",
      img: resena,
      link: "https://goo.su/awsa"
    }
  ];

  /* Lista de las redes sociales */

  const rrss = [
    {
      href: "https://www.instagram.com/pitercios_ss/",
      img: instagram
    },
    {
      href: "https://www.youtube.com/channel/UCfY--oU6p_PpuF1Pao5rDsw",
      img: youtube
    },
    {
      href: "https://wa.me/34609761038",
      img: whatsapp
    },
    {
      href: "mailto:info@pitercios.es",
      img: mail
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <img className="imgprin" src={ImgIni} alt="imgprin" />
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
