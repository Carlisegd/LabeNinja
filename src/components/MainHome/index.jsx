import React, { Component } from 'react';
import {Button, ContainerPagina, Img} from './styled';
import {Link} from 'react-router-dom';
import AnimationData from '../Animacao/anima'; 

class MainHome extends Component {
    render() {
        return (
             
                <ContainerPagina>
                    <div className='sectionLeft'>
                        
                        <p>

                                <h1>Quem somos?</h1>
                            Somos uma plataforma que conecta clientes e profissionais, 
                            com mais de 100 tipos de serviços disponíveis.

                            Nascemos em 2016, com o propósito de conectar quem precisa com quem sabe. 
                            E nosso maior desejo é ser a ponte que oferece ajuda
                            para quem precisa, com muito empenho, dedicação e visão.

                            Empenho, não medimos esforços para que sua experiência seja a melhor possível.
                            Dedicação, nossa dedicação vai desde o seu primeiro contato conosco até a conclusão de nosso serviço.
                            Visão, sabemos que a praticidade é o que todo mundo busca hoje em dia.

                            Para isso, buscamos desenvolver em todo profissional 
                            habilidades ninjas, pois acreditamos que em todo mundo há uma história 
                            de sucesso que podemos tornar realidade.
                        </p>
                        
                    <Link to="/listservivos"><Button>Descubra</Button></Link>
                    </div>
                   
                    <div className='sectionRight'><AnimationData/></div>
                   
                </ContainerPagina>
               
         
        );
    }
}

export default MainHome;
