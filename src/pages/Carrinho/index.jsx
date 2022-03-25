import React, { Component } from 'react';

import HeaderAll from '../../components/HeaderAll';

import Footer from '../../components/Footer';

import AnimationData from '../../components/Animacao/animaCarrinho'; 

import {H1} from './styled';



class Carrinho extends Component {
    render() {
        return (
            <>
            <HeaderAll/>
            <div>
            <H1>Obrigado. Volte sempre!</H1>
                <div className="container_cart">
                <AnimationData/>
                
            </div>
               
            </div>
            <Footer/>
            </>
        );
    }
}

export default Carrinho;
