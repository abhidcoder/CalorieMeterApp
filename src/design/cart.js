import React, {useContext} from 'react';
import {CartContext} from './context';

export function Cart() {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.add, 0);
  return (
    <div>
     </div>
  )
}