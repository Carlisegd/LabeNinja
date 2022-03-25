import React, { Component } from 'react';
import { BsHandbag } from "react-icons/bs";
import {Header, Img, DivSacola, DivNav, Botao,  } from './styled';
import {Link} from 'react-router-dom';
import {MdKeyboardArrowLeft} from 'react-icons/md';



class HeaderAll extends Component {

    render() {
        return (
            <Header>
                 <Link to="/"><Botao><MdKeyboardArrowLeft/>Voltar</Botao></Link>
               
                  <Img src="https://i.postimg.cc/wj5LbG8M/Logo-Est-tica-2.png"></Img>
               
                <DivNav>
                <DivSacola>
                    
                    <BsHandbag style={{color: '#1DAE9D', fontSize: '100%'}}/>
                    {this.props.countCartItens ? (<span className='contador'>{this.props.countCartItens}</span>):("")}
                  
                    </DivSacola>

                </DivNav> 
                
            </Header>

 

        );
    }
}

export default HeaderAll;
