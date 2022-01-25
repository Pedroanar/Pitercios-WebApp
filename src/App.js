import "./index.css";
import React, { useState } from "react";
import ImgIni from "./imagenes/PiT3Inicial.png";
import instagram from "./imagenes/RRSS/instagram.svg";
import youtube from "./imagenes/RRSS/youtube.svg";
import whatsapp from "./imagenes/RRSS/whatsapp.svg";
import mail from "./imagenes/RRSS/mail.svg";
import apuntes from "./imagenes/botones/apuntes.png";
import resena from "./imagenes/botones/discord.png";
import discord from "./imagenes/botones/discord.png";
import inscripcion from "./imagenes/botones/inscripcion.png";
import whatsappb from "./imagenes/botones/whatsapp.png";
import www from "./imagenes/botones/www.png";
import { GiStarsStack } from "react-icons/gi";

export default function App() {
  const [route, setRoute] = useState("home");

  const [contador, setContador] = useState(0);
  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  //Pruebas setRoute
  const bot = () => setRoute("home");
  // const cont = () => setRoute("contador");

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
  return (
    <div className="page">
      <div className="container">
        <img className="imgprin" src={ImgIni} alt="imgprin" />
        <p className="nombre">Pitercios</p>
        <p className="eslogan">El aula de aprender</p>

        <div>
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              className="rrss-a"
              href="https://www.instagram.com/pitercios_ss/"
            >
              <img className="imgrrss" src={instagram} alt="instagram" />
            </a>
          </span>
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              className="rrss-a"
              href="https://www.youtube.com/channel/UCfY--oU6p_PpuF1Pao5rDsw"
            >
              <img className="imgrrss" src={youtube} alt="yt" />
            </a>
          </span>
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              className="rrss-a"
              href="https://wa.me/34609761038"
            >
              <img className="imgrrss" src={whatsapp} alt="wa" />
            </a>
          </span>
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              className="rrss-a"
              href="mailto:info@pitercios.es"
            >
              <img className="imgrrss" src={mail} alt="mail" />
            </a>
          </span>
        </div>
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
