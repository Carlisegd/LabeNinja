import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import CadServicos from './pages/CadServicos';
import ListServicos from './pages/ListServicos';
import Carrinho from './pages/Carrinho';


class RoutesApp extends Component {
    render() {
        return (
            <BrowserRouter>
            <Routes>
              <Route path="/" element ={<Home />} />
              <Route path="/cadservicos" element ={<CadServicos />} />
              <Route path="/listservivos" element ={<ListServicos />} />
              <Route path="/carrinho" element ={<Carrinho />} />

            </Routes>
          </BrowserRouter> 
        );
    }
}

export default RoutesApp;