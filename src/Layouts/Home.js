import React from "react";
import { Languages } from "./Components/Languages";
import { PLanguages } from "./Components/PLanguages";

export const Home = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="title">
          <img src="webdesign.png" alt="Logo" />
          <h1 className="slide-in-blurred-right">Kru Dev</h1>
        </div>
        <div className="container">
          <div className="codeImg slide-in-blurred-left">
            <img src="coding.jpg" alt="Web Design" />
          </div>
        </div>
      </div>
      <Languages />
      <PLanguages />
    </div>
  );
};
