import "../index.css";
import React from "react";
import rrss from "../utils/rrsslist";

export default function Rrss() {
  return (
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
  );
}
