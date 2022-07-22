import React, { useContext } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { CartContext } from './context';
import './cart.css';


function MyDropdown(props) {
    const [cart , setCart] = useContext(CartContext);
    const handleClick = (event) => {
        setCart(cart.filter((item, index) => {
            return index !==  props.id;
        }));
    }  

    return (
        <>
        <Dropdown.Item onClick={(e) => handleClick(props.id)} className="hell" >
            <img src={props.imgg} width="100px" />
            <p>{props.item}</p>
        </Dropdown.Item>
        </>
    )
}

export default MyDropdown;
