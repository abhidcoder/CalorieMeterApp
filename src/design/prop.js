import React, { useContext } from 'react';
import { CartContext } from './context';
import {Col, Row, CardGroup, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import item2 from './img/bf/burji.jpeg';
import item31 from './img/bf/Dosa.jpeg';
import item32 from './img/bf/egg.jpeg';
import item33 from './img/bf/chickencutlet.jpeg';
import item4 from './img/bf/mixFj.jpeg';
import user1 from './img/bf/idli.webp';
import user2 from './img/bf/omlette.webp';
import user3 from './img/bf/FruitS.jpeg';
import a from './img/lu/beebiryani.jpeg';
import b from './img/lu/biryani.jpeg';
import c from './img/lu/gheerice.jpeg';
import d from './img/lu/mixedveg.jpeg';
import e from './img/lu/moongdal.jpeg';
import f from './img/lu/mutton.jpeg';
import g from './img/lu/plainrice.jpeg';
import h from './img/bf/burji.jpeg';
import aa from './img/di/eggfry.webp';
import bb from './img/di/grilchick.jpeg';
import cc from './img/di/kebab.jpeg';
import dd from './img/di/lemorice.jpeg';
import ee from './img/di/milk.jpeg';
import ff from './img/di/muttonpep.jpeg';
import gg from './img/di/roti.jpeg';
import hh from './img/lu/moongdal.jpeg';



function Desi (props)
{
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const desi = { imgg: props.imgg, title: props.title, content: props.content, add: props.add  };
    setCart(currentState => [...currentState,desi]);
  }
   return (
      <Col>
        <Card border="success">
          <Card.Img variant="top" width="250" height="200" src={props.imgg} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.content}
            </Card.Text>
   <Button variant="primary" onClick={addToCart} >Add Calories </Button>  
          </Card.Body>
        </Card>
      </Col>
  )
}

export default Desi;
