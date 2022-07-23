import React,{useState} from 'react';
import {Col, Row, CardGroup, Card, Button,Navbar,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './console.css';
//bmi
import {Carousel} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import bk from './img/cons/one.jpeg';
import bk1 from './img/cons/two.jpeg';
import bk2 from './img/cons/three.jpeg';
import ck from './img/cons/bmi.webp';
import './bmi.css';
import { Link } from 'react-router-dom';

export const ValProvider = React.createContext();

function Des1(props)
{
  const [data,setData]=useState(null)
  const [print,setPrint]=useState(false)
  
  function getData(val)
  {
    props.setBmi(val.target.value);
    setPrint(false)
  }
  const gg = print ? data : null;

  const [state,setState] = useState(gg);
  return (
    <>
      <div>
      <h1 style={{textAlignVertical: "center",textAlign: "center",color: 'purple'}}>Welcome To Athletes Go </h1>
    <div>
      <br></br>
    <Navbar bg="dark" variant="dark" expand="lg" className="akss">
    
  <Container>
  
    <Navbar.Brand ><h2>Set A Calorie Target You Wish To Maintain </h2> <h5>Then Hit The SET Button After Setting The Calorie Limit Eg. 4000 </h5></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Button variant="danger" style={{float:"right",marginRight:20}} onClick={()=> { setPrint(true); setState(data); }}>SET</Button>
    <label>
    <input style={{color: 'orange',marginRight:20}} placeholder="4000" type="text" onChange={getData} /> calor.
    </label>
  </Container>
</Navbar>
<br></br>
<br></br>
<h1 style={{ textAlignVertical: "center",textAlign: "center",color: 'maroon' }}><b>What is BMI and Why You Need to know!</b></h1>
  <Carousel className="cent" >
  <Carousel.Item className="si" interval={40000}>
    <img
      className="d-block w-100"
      src={bk}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="si" interval={2}>
    <img
      className="d-block w-100"
      src={bk1} 
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="si" interval={2}>
    <img
      className="d-block w-100"
      src={bk2}
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
    </Carousel.Item>
  <Carousel.Item className="si" interval={2}>
    <img
      className="d-block w-100"
      src={ck} 
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>
    <br></br>
    <Card border="danger" className="text-center">
  <Card.Header>Let's Count Calories</Card.Header>
  <Card.Body>
    <Card.Title>Pick Your Meals</Card.Title>
    <Card.Text>
      From Veg to Non-Veg all types of food are availaible
    </Card.Text>
    <Link  to="/mainpage">
    <Button variant="primary" >Let's Pick</Button>
    </Link>
  </Card.Body>
  <Card.Footer className="text-muted"> The Target Is:{
        print?
        <h1 style={{color: 'green'}}>{props.bmi}</h1>
        :null
      }</Card.Footer>
   </Card>
   <br></br>
    <Row xs={1} md={2} className="g-4">
  <div   className="text-center abhi" >
  <Card border="info"  >
  <Card.Body>
    <Card.Title>Need Help!</Card.Title>
    <Card.Text>
      We have the best dieticians who can help you out with setting up a proper and suitable diet plan for you.
    </Card.Text >
    <Button variant="primary" href="/consult">Consult Our Deitcian </Button>
  </Card.Body>
   </Card>
   </div>
   </Row>
   <ValProvider.Provider value={gg}>
      {props.children}
    </ValProvider.Provider>
    <br></br>
    </div>
    </div>
    </>
  )
}
export default Des1;