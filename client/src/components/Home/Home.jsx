import React from "react";
import ControlledCarousel from "./Carousel";
import Info from "./Info";
import "../../css/home.css";
import Teams from "../Teams/Teams";

export default function Home(){
    return(
        <div className="home">
            <div className="Caro">
                <ControlledCarousel/>
            </div>
            <div>
                <Info/>
            </div>
        </div>
    )
}