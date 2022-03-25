import React, { Component } from 'react';
import Header from '../../components/HeaderHome'
import MainHome from '../../components/MainHome';
import Footer from '../../components/Footer';



import {Container} from './styled'


class Home extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <MainHome/>
                <Footer/>
                
                
            </Container>
        );
    }
}

export default Home;
