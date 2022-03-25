import React, { Component } from 'react';
import { BsHandbag } from "react-icons/bs";
import {Header, Img, DivSacola, DivNav, Botao,  } from './styled';
import {Link} from 'react-router-dom';



class HeaderHome extends Component {

    render() {
        return (
            <Header>
                <div>
                  <Img src="https://i.postimg.cc/wj5LbG8M/Logo-Est-tica-2.png"></Img>
                </div>
                <DivNav>
                  <Link to="/cadservicos"><Botao>Quer ser um ninja</Botao></Link>
                  <Link to="/listservivos"><Botao>Contratar um ninja</Botao></Link>
                </DivNav> 
                
            </Header>

 

        );
    }
}

export default HeaderHome;
