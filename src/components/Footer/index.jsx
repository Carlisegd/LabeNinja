import React, { Component } from 'react';
import {ImFacebook} from 'react-icons/im';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {AiFillYoutube} from 'react-icons/ai';
import {ImLinkedin2} from 'react-icons/im';
import {SiVisa} from 'react-icons/si';
import {RiMastercardLine} from 'react-icons/ri';
import {RiPaypalLine} from 'react-icons/ri';
import {SiPicpay} from 'react-icons/si';
import {AreaFooter, RedesSociais, Colunas1, MeiosPagamento, Img} from './styled';


class Footer extends Component {
    render() {
        return (
            <AreaFooter>
               <RedesSociais>
                   <ImFacebook/>
                   <BsInstagram/>
                   <BsTwitter/>
                   <BsWhatsapp/>
                   <AiFillYoutube/>
                   <ImLinkedin2/>
               </RedesSociais>               

               <div>
                   <Colunas1>Institucional</Colunas1>
                    <p>A Marca</p>
                    <p>Lojas</p>
                    <p>Contato</p>
               </div>
               <div>
                   <Colunas1>Informações</Colunas1> 
                    <p>Formas de Pagamento</p>
                    <p>Trocas e Devoluções</p>
                    <p>Cuidados com o Produto</p>
               </div>
               <div>
                   <Colunas1>Conheça</Colunas1> 
                    <p>Franquias e Multimarcas</p>
                    <p>Trabalhe com a Gente</p>
                    <p>Procon-RJ</p>
               </div>
               <MeiosPagamento>
                   <SiVisa/>
                   <RiMastercardLine/>
                   <RiPaypalLine/>
                   <SiPicpay/>
               </MeiosPagamento>
                <Img src="https://pulsus.mobi/wp-content/uploads/2021/07/SELOGPTW.png" alt="" />
            </AreaFooter>
        );
    }
}

export default Footer;
