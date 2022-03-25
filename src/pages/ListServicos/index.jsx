import React, { Component } from "react";

import { Container, ContainerServicos } from "./styled";

import HeaderAll from "../../components/HeaderAll";

import Footer from "../../components/Footer";

import axios from "axios";

import { AiOutlineDelete, AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";

import Moment from "react-moment";

import {Link} from 'react-router-dom';




const url = "https://labeninjas.herokuapp.com/jobs";

const headers = {
  headers: {
    Authorization: "d8390f50-0fe3-4542-9ec1-78750ba98faa",
  },
};

class ListServicos extends Component {
  state = {
    cardList: [],
        cartItens: [],
        query: "",
        minPrice: "",
        maxPrice: "",
        order:""
        
  };

  updateQuery =(ev) => {
    this.setState({query: ev.target.value});

  }

  updateMinPrice =(ev) => {
    this.setState({minPrice: ev.target.value});
  }

  updateMaxPrice =(ev) => {
    this.setState({maxPrice: ev.target.value});
  }

  updateOrder =(ev) => {
    this.setState({order: ev.target.value});
  }
  
  componentDidMount() {
    this.getCardList();
  }

  getCardList = async () => {
    try {
      const response = await axios.get(url, headers);
      // console.log(response)
      this.setState({ cardList: response.data.jobs });
    } catch (error) {
      alert("Algo deu errado, tente novamente!");
    }
  
};
   onClickAdd = (servicosAdd) => {
       const newServicosAdd = [...this.state.cartItens] 
       newServicosAdd.includes(servicosAdd) === true ? alert("Esse serviço já foi adicionado ao seu Carrinho!!"): newServicosAdd.push(servicosAdd) 
       this.setState({cartItens:newServicosAdd})

    }
    
    onClickRemove = (id) => {
        const newCart = this.state.cartItens.filter((res) => {
            return res.id !== id
             
        }).map((services) =>{
            return services 
        })
            this.setState({cartItens: newCart})
    }

  render() {
      const somaPrecos = this.state.cartItens.reduce((a,b) => a + b.price,0)
      console.log(this.state.query)
        return (
        <ContainerServicos>
            <HeaderAll countCartItens={this.state.cartItens.length} />
            <Container>
          <div className="container_search">
            <input 
            type="text" 
            value={this.state.minPrice}
            onChange={this.updateMinPrice}
            placeholder="Valor Minimo" />

            <input 
            type="text"
            value={this.state.maxPrice} 
            onChange={this.updateMaxPrice}
            placeholder="Valor Maximo" />
            
            <input 
            type="text" 
            value={this.state.updateQuery}
            onChange={this.updateQuery}
            placeholder="Busca por titulo ou descricao" />

            <select
            className="select"
            value={this.state.order}
            onChange={this.updateOrder}
            >
            <option>Sem Ordenação</option>
            <option>Menor Valor</option>
            <option>Maior Valor</option>
            <option>Titulo</option>
            <option>Prazo</option>
          </select>


          </div>
          <div className={this.state.cartItens.length !== 0 ? "containerMainList" : "containerMainListOff"}>

            <div className="container_list">
              {this.state.cardList.filter((filtro)=>{
                return filtro.title.toLowerCase().includes(this.state.query.toLowerCase())
              })
              .filter((filtro)=>{
                return (
                  this.state.minPrice === "" || filtro.price >= this.state.minPrice
                )
              })
              .filter((filtro)=>{
                return (
                  this.state.maxPrice === "" || filtro.price <= this.state.maxPrice
                )
              })
              .sort((a,b)=>{
                switch (this.state.order) {
                  case "Menor Valor":
                    return a.price - b.price
                  case "Maior Valor":
                    return b.price - a.price
                  case "Titulo":
                    return a.title.localeCompare(b.title)
                  case "Prazo":
                    return a.dueDate.localeCompare(b.dueDate)
                 }
              }).map((res) => (
                
                <ul>
                  <li className="card">
                      <div className="content">
                          <div className="front">
                              <div><img className="logo" src= "https://i.postimg.cc/wM13dpkc/Design-sem-nome-5.png"/></div>
                              <div className="title">{res.title}</div>
                              <div className="price">R$ {res.price.toFixed(2)}</div>

                              {/* <div><Moment format="DD/MM/YYYY">{res.dueDate}</Moment></div> */}
                              <div className="buttons_card">
                                <div className="detalhe"><p>Detalhes</p></div>
                                <div style={{fontSize:40, color: '#fffff'}}><AiOutlineEye/></div>
                              </div>
                          </div>
                          <div className="back">
                          {/* <div><img className="logo2" src= "https://i.postimg.cc/wM13dpkc/Design-sem-nome-5.png"/></div> */}
                              <div className="title"><img className="logo2" src= "https://i.postimg.cc/wM13dpkc/Design-sem-nome-5.png"/>{res.title}</div>
                              {/* <div className="price">R$ {res.price.toFixed(2)}</div> */}
                              {/* <div><Moment format="DD/MM/YYYY">{res.dueDate}</Moment></div> */}
                              <div style={{marginTop: 5, fontWeight: 600, padding: 50, textAlign: 'justify'}}>{res.description}</div>
                              <div style={{marginTop: 5, fontWeight: 600}}>Prazo: <Moment format="DD/MM/YYYY">{res.dueDate}</Moment></div>
                              <div className="bandeiras">
                                <div style={{marginTop: 10, fontWeight: 600}}>Formas de Pagamento</div>
                                <div className="typePayments">{res.paymentMethods.map((res)=>(
                                  <ul><li>{res}</li></ul>
                                ))}</div>
                              </div>
                              <div className="buttons_card">
                                  <div className="price2">R$ {res.price.toFixed(2)}</div>
                                  <button className="iconeCarrinho" onClick={()=> this.onClickAdd(res)} ><AiOutlineShoppingCart style={{color:'#FFFFFF', fontSize: '200%', position:"relative", top:"50%"}}/></button>
                                  {/* <button onClick={()=> this.onClickAdd(res)} ><AiOutlineShoppingCart style={{color:'#FFFFFF', fontSize: '200%'}}/></button> */}
                              </div>
                          </div>
                      </div>
                  </li>
                </ul>
                
              ))}
            </div>
            <div className={this.state.cartItens.length !== 0 ? "container_cart" : "container_cartOff"}>

              <div className="header">
                <p>Sacola</p>
              </div>
              <div className="main">
                  {this.state.cartItens.map(res => {
                      return (
                        <ul>
                        <li>
                          <div>{res.title}</div>
                          <div>
                            <strong>R$ {res.price}</strong>
                          </div>
                          <div>
                            <AiOutlineDelete style={{cursor: 'pointer'}} onClick={()=> this.onClickRemove(res.id)}/>
                          </div>
                        </li>                  
                      </ul>
                    )
                  })                  
                }
              </div>
              <div className="footer">
                <p>Total:R$ {somaPrecos}</p>
                <Link to="/carrinho"><button>Finalizar Compra</button></Link>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </ContainerServicos>
    );
  }
}

export default ListServicos;
