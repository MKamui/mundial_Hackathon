import React from "react";
import "../../css/info.css";
import Mund from "../../img/Mun.jpg"

export default function Info() {
  return (
    <div className="info">
        <div className="car">
            <img className="img2" src={Mund} alt="info 1"/>
            <p>Conecta con personas con tu misma pasion por el futbol</p>          
        </div> 
        <div className="car">
            <img className="img2" src={Mund} alt="info 2"/>
            <p>Mira las predicciones de tus partidos favoritos</p>         
        </div>
        <div className="car">
            <img className="img2" src={Mund} alt="info 3"/>
            <p>Mira todos los equipos y juegos proximos del Mundial Quatar 2022</p>         
        </div>
    </div>
  );
}