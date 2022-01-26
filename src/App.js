import React, { useState } from "react";
import Header from "./components/Header";
import Rrss from "./components/Rrss";
import Cards from "./components/Card";
import "./index.css";

export default function App2() {
  const [route] = useState("home");
  return (
    <div className="page">
      <div className="container">
        <Header />
        <Rrss />
        {route === "home" && <Cards />}
      </div>
    </div>
  );
}
