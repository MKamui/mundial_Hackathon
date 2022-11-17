import React from "react";
import { Link } from "react-router-dom";
import "../../css/info.css";
import Fifa from "../../img/Fifa.webp"
import Pred from "../../img/Pred.jpg"
import Teams from "../../img/Teams.webp"

export default function Info() {
  return (
    <div className="info">
        <div className="car">
            <a href="https://www.fifa.com/fifaplus/es/tournaments/mens/worldcup/qatar2022"><img className="img2" src={Fifa} alt="info 1"/></a>
            <p>Pagina oficial del mundial</p>          
        </div> 
        <div className="car">
            <Link to="/account"><img className="img2" src={Pred} alt="info 2"/></Link>
            <p>Mira las predicciones de tus partidos favoritos</p>         
        </div>
        <div className="car">
            <Link to="/fasedegrupos"><img className="img2" src={Teams} alt="info 3"/></Link>
            <p>Mira todos los equipos y partidos del Mundial Quatar 2022</p>         
        </div>
    </div>
  );
}