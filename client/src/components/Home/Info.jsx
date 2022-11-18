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
        <a className="img-container" href="https://www.fifa.com/fifaplus/es/tournaments/mens/worldcup/qatar2022"><div className="efecto"><p className="colorp">Pagina oficial del mundial</p></div><img className="img2" src={Fifa} alt="info 1" /></a>
      </div>
      <div className="car">
        <Link className="img-container" to="/account"><div className="efecto"><p className="colorp">Mira las predicciones de tus partidos favoritos</p>   </div> <img className="img2" src={Pred} alt="info 2" /></Link>
      </div>
      <div className="car">
        <Link className="img-container" to="/fasedegrupos"><div className="efecto"><p className="colorp">Mira todos los equipos y partidos del Mundial Quatar 2022</p></div><img className="img2" src={Teams} alt="info 3" /> </Link>
      </div>
    </div>
  );
}