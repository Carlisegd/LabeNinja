import React, { Component } from 'react';
import { } from './styled'
import MainCadServicos from '../../components/MainCadServicos'
import HeaderAll from '../../components/HeaderAll';
import Footer from '../../components/Footer';

class CadServicos extends Component {
    render() {
        return (
            <div>
                 <HeaderAll/>
                <MainCadServicos/>
                <Footer/>
            </div>
        );
    }
}

export default CadServicos;
