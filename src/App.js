import React, { useState } from 'react';
import Co from './design/console';
import Dd from './design/mainpage';
import Mm from './design/consult';
import { CartProvider } from './design/context';
import { ValProvider } from './design/console';
import {Routes,Route} from 'react-router-dom';
import { Cart } from './design/cart';

function App(){

  const [bmi, setBmi] = useState();

  console.log(bmi);

    return (
    <CartProvider> 
      <Cart/>
    <Routes>
        <Route index element={<Co bmi={bmi} setBmi={setBmi} />} />
        <Route path="/mainpage" element={<Dd bmi={bmi} />} />
        <Route path="/consult" element={<Mm/>} />
    </Routes>
   
    
    </CartProvider>
    );
  }
export default App;

