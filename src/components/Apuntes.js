import React from "react";
import SECTIONS from "../utils/apunteslist";
import Scroll from "./Scroll.js";
//import "../apuntes.css";

export default function Apuntes() {
  return (
    <div className="App">
      <div>
        <Scroll secciones={SECTIONS} />
      </div>
    </div>
  );
}
