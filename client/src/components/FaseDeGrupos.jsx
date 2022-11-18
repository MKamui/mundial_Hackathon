import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import A from "../img/grupo A.webp";
import B from "../img/grupo B.webp";
import C from "../img/grupo C.jpg";
import D from "../img/grupo D.webp";
import E from "../img/grupo E.webp";
import F from "../img/grupo F.webp";
import G from "../img/grupo G.webp";
import H from "../img/grupo H.webp";

function FaseDeGrupos() {
  return (
    <>
    <div style={{display:"flex",flexDirection:"row" }}>
    <Card style={{ width: '18rem', margin:"2rem" }}>
      <Card.Img style={{height: "10rem"}} variant="top" src={A} />
      <Card.Body>
        <Card.Title>Grupo A</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Qatar</ListGroup.Item>
        <ListGroup.Item>Paises Bajos</ListGroup.Item>
        <ListGroup.Item>Senegal</ListGroup.Item>
        <ListGroup.Item>Ecuador</ListGroup.Item>

      </ListGroup>
      <Card.Body>
        <Button variant="primary">Fixture</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:"2rem" }}>
      <Card.Img style={{height: "10rem"}} variant="top" src={B} />
      <Card.Body>
        <Card.Title>Grupo B</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Inglaterra</ListGroup.Item>
        <ListGroup.Item>Estados Unidos</ListGroup.Item>
        <ListGroup.Item>Irán</ListGroup.Item>
        <ListGroup.Item>Gales</ListGroup.Item>

      </ListGroup>
      <Card.Body>
        <Button variant="primary">Fixture</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:"2rem" }}>
      <Card.Img style={{height: "10rem"}} variant="top" src={C} />
      <Card.Body>
        <Card.Title>Grupo C</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Argentina</ListGroup.Item>
        <ListGroup.Item>Arabia Saudita</ListGroup.Item>
        <ListGroup.Item>México</ListGroup.Item>
        <ListGroup.Item>Polonia</ListGroup.Item>

      </ListGroup>
      <Card.Body>
        <Button variant="primary">Fixture</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:"2rem" }}>
      <Card.Img style={{height: "10rem"}} variant="top" src={D} />
      <Card.Body>
        <Card.Title>Grupo D</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Francia</ListGroup.Item>
        <ListGroup.Item>Australia</ListGroup.Item>
        <ListGroup.Item>Dinamarca</ListGroup.Item>
        <ListGroup.Item>Tunez</ListGroup.Item>

      </ListGroup>
      <Card.Body>
        <Button variant="primary">Fixture</Button>
      </Card.Body>
    </Card>
    </div>
    <div style={{display:"flex",flexDirection:"row" }}>
    <Card style={{ width: '18rem', margin:"2rem" }}>
      <Card.Img style={{height: "10rem"}} variant="top" src={E} />
      <Card.Body>
        <Card.Title>Grupo E</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>España</ListGroup.Item>
        <ListGroup.Item>Costa Rica</ListGroup.Item>
        <ListGroup.Item>Alemania</ListGroup.Item>
        <ListGroup.Item>Japón</ListGroup.Item>

      </ListGroup>
      <Card.Body>
        <Button variant="primary">Fixture</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:"2rem" }}>
      <Card.Img style={{height: "10rem"}} variant="top" src={F} />
      <Card.Body>
        <Card.Title>Grupo F</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Bélgica</ListGroup.Item>
        <ListGroup.Item>Canada</ListGroup.Item>
        <ListGroup.Item>Marruecos</ListGroup.Item>
        <ListGroup.Item>Croacia</ListGroup.Item>

      </ListGroup>
      <Card.Body>
        <Button variant="primary">Fixture</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:"2rem" }}>
      <Card.Img style={{height: "10rem"}} variant="top" src={G} />
      <Card.Body>
        <Card.Title>Grupo G</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Brasil</ListGroup.Item>
        <ListGroup.Item>Serbia</ListGroup.Item>
        <ListGroup.Item>Suiza</ListGroup.Item>
        <ListGroup.Item>Camerún</ListGroup.Item>

      </ListGroup>
      <Card.Body>
        <Button variant="primary">Fixture</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:"2rem" }}>
      <Card.Img style={{height: "10rem"}} variant="top" src={H} />
      <Card.Body>
        <Card.Title>Grupo H</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Portugal</ListGroup.Item>
        <ListGroup.Item>Ghana</ListGroup.Item>
        <ListGroup.Item>Uruguay</ListGroup.Item>
        <ListGroup.Item>Corea del Sur</ListGroup.Item>

      </ListGroup>
      <Card.Body>
        <Button variant="primary">Fixture</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default FaseDeGrupos;