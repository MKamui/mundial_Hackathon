import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDetail } from "../../redux/actions";

export default function CardT({id, name, codigo, grupo, flag}){

    console.log(flag)
    return(
        <div style={{display:"inline-flex",flexDirection:"row", marginLeft:"1em" }}>
        <Card style={{ width: '15rem', margin:"2rem", boxShadow:"1px solid black" }}>
        <Card.Img style={{height: "10rem"}} variant="top" src={flag} />
        <Card.Body>
          <Card.Title>{name} ({codigo})</Card.Title>
          <Card.Text>
          Grupo {grupo}
          </Card.Text>
        </Card.Body>
        <Card.Body> <Button variant="primary">Detalle</Button>
        </Card.Body>
      </Card>
            {/* // <div className="card">
            //     <div className="img_">
            //         <img src={flag} alt="img not fund"/>
            //     </div>
            //     <div className="name">
            //         <h1>Nombre</h1>
            //         <h1>{name}</h1>
            //     </div>
            //     <div className="car">
            //         <p>Codigo Fifa</p>
            //         <p>{codigo}</p>
            //         <p>Grupo</p>
            //         <p>{grupo}</p>
            //     </div>
            // </div> */}
            </div>
    )
}