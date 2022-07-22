import './index.css';
import React from 'react';
import ReactDom from 'react-dom';
import F from './App';
import {BrowserRouter} from 'react-router-dom';
import { CartProvider } from './design/context';



ReactDom.render(<BrowserRouter><F /></BrowserRouter>, document.querySelector('#root'));