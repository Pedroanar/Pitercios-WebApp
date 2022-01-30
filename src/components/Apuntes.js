import React from "react";
import SECTIONS from "../utils/apunteslist";
import Scroll from "./Scroll.js";
import "../index.css";

export default function Apuntes() {
  return (
    <div className="apuntes">
      <div>
        <Scroll secciones={SECTIONS} />
      </div>
    </div>
  );
}
