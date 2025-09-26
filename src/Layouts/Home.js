import React from "react";
import { Languages } from "./Components/Languages";
import { PLanguages } from "./Components/PLanguages";

export const Home = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="title fade-in">
          <img src="webdesign.png" alt="Web Design Icon" />
          <div>
            <h1 className="slide-in-blurred-right">Kru Dev</h1>
            <p className="fade-in delay-2">
              Full Stack Developer & Language Enthusiast
            </p>
            <p className="fade-in delay-3">
              Crafting digital experiences with passion and precision. 
              I love building things that live on the internet and exploring 
              the beauty of different languages and cultures.
            </p>
          </div>
        </div>
        <div className="codeImg slide-in-blurred-left delay-1">
          <img src="coding.jpg" alt="Coding workspace" />
        </div>
      </div>
      
      <div className="stagger-animation delay-2">
        <Languages />
      </div>
      
      <div className="stagger-animation delay-3">
        <PLanguages />
      </div>
    </div>
  );
};
