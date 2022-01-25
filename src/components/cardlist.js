import React from "react";
import apuntes from "./imagenes/botones/apuntes.png";
import resena from "./imagenes/botones/discord.png";
import discord from "./imagenes/botones/discord.png";
import inscripcion from "./imagenes/botones/inscripcion.png";
import whatsappb from "./imagenes/botones/whatsapp.png";
import www from "./imagenes/botones/www.png";

class Cardlist extends React.Component {
  render() {
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
  }
}

export default Cardlist;
