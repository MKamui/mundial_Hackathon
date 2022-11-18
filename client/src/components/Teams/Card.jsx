import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDetail } from "../../redux/actions";

export default function Card({id, name, codigo, grupo, flag}){

    console.log(flag)
    return(
            <div className="card">
                <div className="img_">
                    <img src={flag} alt="img not fund"/>
                </div>
                <div className="name">
                    <h1>Nombre</h1>
                    <h1>{name}</h1>
                </div>
                <div className="car">
                    <p>Codigo Fifa</p>
                    <p>{codigo}</p>
                    <p>Grupo</p>
                    <p>{grupo}</p>
                </div>
            </div>
    )
}