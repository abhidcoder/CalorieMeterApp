import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import {Col, Row, CardGroup, Card, Button,Navbar,Container} from 'react-bootstrap';
import {RiShoppingCartFill} from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';
import Desi from './prop';
import Desii from './propnon';
import item2 from './img/bf/burji.jpeg';
import item31 from './img/bf/Dosa.jpeg';
import item32 from './img/bf/egg.jpeg';
import item33 from './img/bf/chickencutlet.jpeg';
import item4 from './img/bf/mixFj.jpeg';
import user1 from './img/bf/idli.webp';
import user2 from './img/bf/omlette.webp';
import user3 from './img/bf/FruitS.jpeg';
import aa from './img/di/eggfry.webp';
import bb from './img/di/grilchick.jpeg';
import cc from './img/di/kebab.jpeg';
import dd from './img/di/lemorice.jpeg';
import ee from './img/di/milk.jpeg';
import ff from './img/di/muttonpep.jpeg';
import gg from './img/di/roti.jpeg';
import hh from './img/lu/moongdal.jpeg';
import a from './img/lu/beebiryani.jpeg';
import b from './img/lu/biryani.jpeg';
import c from './img/lu/gheerice.jpeg';
import d from './img/lu/mixedveg.jpeg';
import e from './img/lu/moongdal.jpeg';
import f from './img/lu/mutton.jpeg';
import g from './img/lu/plainrice.jpeg';
import h from './img/bf/burji.jpeg';
//states
import {useContext} from 'react';
import {CartContext} from './context';
import MyDropdown from './MyDropdown';
import {ValProvider} from './console';





function Des1(props)
{ 
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.add, 0);

  console.log(cart);

  return (
    <div>
    {console.log(props.bmi)}
    <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Total <h1 style={{ color:'purple'}}>{totalPrice}</h1>Calories Is Selected Out Of <h1 style={{ color:'yellow'}}>{props.bmi}</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <RiShoppingCartFill color="white" fontsize="45px"/>
  <Badge>{cart.length}</Badge>
  </Dropdown.Toggle>
  <Dropdown.Menu>
    { cart.map((item,index) => {
    return <MyDropdown item={item.title} imgg={item.imgg} key={index} id={index} />
    }) }
  </Dropdown.Menu>
</Dropdown>
  </Container>
</Navbar>
<br></br>
    <h1 style={{color: 'black'}}> <b>Veg Menu</b> </h1>
    <br></br>
    <Row xs={1} md={4} className="g-4">
    <Desi title="Idli"
    content="100gms contains 200 calories"
    add={200}
    imgg={user1}/>
    <Desi title="Dosa"
    content="100gms contains 300 calories"
    add={300}
    imgg={item31}/>
    <Desi title="Fruit Salad"
    content="100gms contains 200 calories"
    add={200}
    imgg={user3}/>
    <Desi title="Mixed Fruit Juice"
    content="100ml contains 200 calories"
    add={200}
    imgg={item4}/>
    <Desi title="Lemon Rice"
    content="100gms contains 200 calories"
    add={200}
    imgg={dd}/>
    <Desi title="Moong Dal Tadka"
    content="100gms contains 400 calories"
    add={400}
    imgg={hh}/>
    <Desi title="Roti"
    content="100gms contains 500 calories"
    add={500}
    imgg={gg}/>
    <Desi title="Milk"
    content="100ml contains 200 calories"
    add={200}
    imgg={ee}/>
     <Desi title="Plain Rice"
    content="100gms contains 200 calories"
    add={200}
    imgg={g}/>
    <Desi title="Moong Dal"
    content="100gms contains 300 calories"
    add={300}
    imgg={e}/>
    <Desi title="Ghee Rice"
    content="100gms contains 500 calories"
    add={500}
    imgg={c}/>
    <Desi title="Mixed Veg"
    content="100gms contains 200 calories"
    add={200}
    imgg={d}/>
    </Row>
    <br></br>
    <div>
  
</div>
<br></br>
<h1 style={{color: 'red'}}> <b>Non Veg Menu</b></h1>
<br></br>
<Row xs={1} md={4} className="g-4" >
    <Desii title="Egg"
    content="1 egg contains 200 calories"
    add={200}
    imgg={item32}/>
    <Desii title="Omlete"
    content="100gms contains 300 calories"
    add={300}
    imgg={user2}/>
    <Desii title="Peanut Egg Burji"
    content="100gms contains 500 calories"
    add={500}
    imgg={item2}/>
    <Desii title="Chicken cutlet"
    content="100gms contains 400 calories"
    add={400}
    imgg={item33}/>
    <Desii title="Kebab"
    content="200gms contains 400 calories"
    add={400}
    imgg={cc}/>
    <Desii title="Mutton Pepper Fry"
    content="100gms contains 500 calories"
    add={500}
    imgg={ff}/>
    <Desii title="Egg Fry"
    content="100gms contains 300 calories"
    add={300}
    imgg={aa}/>
    <Desii title="Grilled Chicken"
    content="200gms contains 600 calories"
    add={600}
    imgg={bb}/>
    <Desii title="Chicken Biryani"
    content="200gms with two 150g pieces of Chicken contains 400 calories"
    add={400}
    imgg={b}/>
    <Desii title="Mutton Biryani"
    content="100gms with two 150g pieces of Mutton contains 500 calories"
    add={500}
    imgg={f}/>
    <Desii title="Egg Burji"
    content="100gms contains 300 calories. It contains 3 eggs"
    add={300}
    imgg={h}/>
    <Desii title="Beef Biryani"
    content="200gms with two 150g pieces of Beef contains 600 calories"
    add={600}
    imgg={a}/>
    </Row>
<div>
</div>
</div>
  )
}

export default Des1;







