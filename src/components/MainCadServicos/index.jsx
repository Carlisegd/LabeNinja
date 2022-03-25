import React, { Component } from 'react';
import { Container } from './styled'
import axios from 'axios';

class MainCadServicos extends Component {
  state ={
    
   
    valorInputNome:"",
    valorInputDescricao:"",
    valorInputPreco: 0,
    checkBoxDebito:false,
    checkBoxCredito:false,
    checkBoxPix:false,
    checkBoxBoleto: false,
    checkBoxPayPal: false,
    calendario:"",
   
  }


  onChangeInputsPagamentos = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
};


  onChangeValorInputNome = (event) => {
    this.setState({valorInputNome:event.target.value});
  }

  onChangeValorInputDescricao = (event) => {
    this.setState({valorInputDescricao:event.target.value});
  }

  onChangeValorInputPreco = (event) => {
    this.setState({valorInputPreco: Number(event.target.value)});
  }

  onChangeValorCartao = (event) => {
    this.setState({valorCartao:event.target.value});
  }

  onChangeCalendario = (event) => {
    this.setState({calendario:event.target.value});
  }

  

  criarTrabalho = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"

    const pagamentos = [];

    if (this.state.checkBoxCredito === true) {
        pagamentos.push("Crédito");
    }

    if (this.state.checkBoxDebito === true) {
        pagamentos.push("Débito");
    }

    if (this.state.checkBoxBoleto === true) {
        pagamentos.push("Boleto");
    }

    if (this.state.checkBoxPix === true) {
        pagamentos.push("Pix");
    }
    if (this.state.checkBoxPayPal === true) {
      pagamentos.push("Paypal");
  }

    const body = {
        title: this.state.valorInputNome,
        description: this.state.valorInputDescricao,
        price: this.state.valorInputPreco,
        paymentMethods: pagamentos,
        dueDate: this.state.calendario,
    }
    axios.post(url, body, {
        headers: {
            Authorization: "d8390f50-0fe3-4542-9ec1-78750ba98faa"
        }
    })
        .then((res) => {
            alert("Serviço cadastrado com sucesso!")
            this.setState({
                valorInputNome: "",
                valorInputDescricao: "",
                valorInputPreco: "",
                calendario: "",
            })
        })
        .catch((err) => {
            console.log("deu ruim", err.response.data.errors)
        })
}

    render() {

      

        return (
            <Container>
                <div className="main_cad">
                    <h1>Cadastre o seu serviço </h1>
                    <div className="form">
                        <input 
                        type="text" 
                        placeholder="Nome do Serviço"
                        onChange={this.onChangeValorInputNome}
                        value={this.state.valorInputNome}/>
                        <input 
                        type="text"
                         placeholder="Descrição"
                         onChange={this.onChangeValorInputDescricao}
                        value={this.state.valorInputDescricao}/>
                        <input 
                        type="number" 
                        placeholder="Preço"
                        onChange={this.onChangeValorInputPreco}
                        value={this.state.valorInputPreco}/>
                        
                        <div>
                        <input
                                name="checkBoxCredito"
                                type="checkbox"
                                checked={this.state.checkBoxCredito}
                                onChange={this.onChangeInputsPagamentos}
                            />
                            <label>crédito</label>
                            <input
                                name="checkBoxDebito"
                                type="checkbox"
                                checked={this.state.checkBoxDebito}
                                onChange={this.onChangeInputsPagamentos}
                            />
                            <label>débito</label>
                            <input
                                name="checkBoxBoleto"
                                type="checkbox"
                                checked={this.state.checkBoxBoleto}
                                onChange={this.onChangeInputsPagamentos}
                            />
                            <label>boleto</label>
                            <input
                                name="checkBoxPix"
                                type="checkbox"
                                checked={this.state.checkBoxPix}
                                onChange={this.onChangeInputsPagamentos}
                            />
                            <label>pix</label>
                            <input
                                name="checkBoxPayPal"
                                type="checkbox"
                                checked={this.state.checkBoxPayPal}
                                onChange={this.onChangeInputsPagamentos}
                            />
                            <label>paypal</label>
                        </div>
                        <input 
                        type="text" 
                        placeholder="mm/dd/aaaa"
                        onChange={this.onChangeCalendario}
                        value={this.state.calendario}/>
                        <div className="form_button">
                            <button onClick={()=> this.criarTrabalho()}>Cadastrar Serviço</button>
                        </div>
                        
                    </div>
                   
                </div>
                
            </Container>
        );
    }
}


export default MainCadServicos;
