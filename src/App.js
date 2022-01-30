import React, { useState } from "react";
import Header from "./components/Header";
import Rrss from "./components/Rrss";
import Botones from "./components/Botones";
import Apuntes from "./components/Apuntes";

import "./index.css";

export default function App() {
  const [route, setRoute] = useState("home");
  return (
    <>
      <div className="page">
        <div className="container">
          <Header />
          <Rrss />
          {route === "home" && <Botones setRoute={setRoute} />}
          {route === "apuntes" && <Apuntes setRoute={setRoute} />}
        </div>
      </div>
    </>
  );
}
