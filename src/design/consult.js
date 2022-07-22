import React from 'react';
import {Col, Row, CardGroup, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import a from './img/doc/1.webp';
import b from './img/doc/2.jpeg';
import c from './img/doc/3.jpeg';
import d from './img/doc/4.jpeg';
import e from './img/doc/5.jpeg';



function comp()
{
    return(<div>
        <h1 style={{ color: 'maroon' }}>Contact Our Best Dieticians</h1>
        <br></br>
<Row xs={1} md={4} className="g-4">
  <Card border="primary" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={a} />
</Card> 
<Card.Body>
    <Card.Title><h1>Emily White</h1></Card.Title>
    <Card.Text>
      <h5 style={{ color: 'blue' }}>5 years of experience. * emily@gmail.com</h5>
    </Card.Text>
    <Card.Text>
    "to a healthy lifestyle. It includes a balance of healthy eating and physical exercise to equate energy expenditure and energy intake. Developing healthy eating habits while using tips that will keep us fuller longer can be useful tools in weight management. Knowing what your body needs is important to weight management and can control overconsumption and under consumption of food."
    </Card.Text>
  </Card.Body>
</Row>  
<br></br>
<Row xs={1} md={4} className="g-4">
  <Card border="primary" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={b} />
</Card> 
<Card.Body>
    <Card.Title><h1>Sheran Stone</h1></Card.Title>
    <Card.Text>
    <h5 style={{ color: 'blue' }}>5 years of experience. * stone11@hotmail.com</h5>
    </Card.Text>
    <Card.Text>
    "Weight management does not include fad diets that promote quick, temporary weight loss. It focuses on the long-term results that are achieved through slow but steady weight loss, followed by retention of ideal body weight for age, gender and height."
    </Card.Text>
  </Card.Body>
</Row> 
<br></br>
<Row xs={1} md={4} className="g-4">
  <Card border="primary" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={c} />
</Card> 
<Card.Body>
    <Card.Title><h1>Hannah White</h1></Card.Title>
    <Card.Text>
    <h5 style={{ color: 'blue' }}>2 years of experience. * forevercian22@gmail.com</h5>
    </Card.Text>
    <Card.Text>
    "The terms "overweight" and "obesity" refer to body weight that is greater than what is considered healthy for a certain height. Millions of people worldwide are overweight or obese. Being overweight or obese puts you at risk for many health problems."
    </Card.Text>
  </Card.Body>
</Row>  
<br></br>
<Row xs={1} md={4} className="g-4">
  <Card border="primary" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d} />
</Card> 
<Card.Body>
    <Card.Title><h1>Roslin Mary</h1></Card.Title>
    <Card.Text>
    <h5 style={{ color: 'blue' }}>3 years of experience. * doctratemary@gmail.com</h5>
    </Card.Text>
    <Card.Text>
    "The more body fat that you have and the more you weigh, the more likely you are to develop diseases such as Coronary heart disease, High blood pressure, Type 2 diabetes, Gallstones, Breathing problems, Certain Cancers."
    </Card.Text>
  </Card.Body>
</Row>
<br></br>
<Row xs={1} md={4} className="g-4">
  <Card border="primary" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={e} />
</Card> 
<Card.Body>
    <Card.Title><h1>Aditya Roy</h1></Card.Title>
    <Card.Text>
    <h5 style={{ color: 'blue' }}>1 years of experience. * adiroy11@gmail.com</h5>
    </Card.Text>
    <Card.Text>
    "Your weight is the result of many factors. These factors include environment, family history and genetics, metabolism, behaviour or habits, and more. You can't change some factors, such as family history. However, you can change other factors, such as lifestyle habits."
    </Card.Text>
  </Card.Body>
</Row>              
    </div>)
}

export default comp;