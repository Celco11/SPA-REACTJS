import React, { Component } from 'react';
import Body from './template/body/Body';
import axios from 'axios';
import Form from './form/Form';
import TabelaProdutos from './tabela-produtos/TabelaProdutos'

const dataHoraAtual = () => {
    var dateNow = new Date();
    var localdate = dateNow.getDate() + '/' + (dateNow.getMonth() + 1) + '/' + dateNow.getFullYear();
    return localdate;
}

const headerProps = {
    icon: 'cart-plus',
    title: 'Carrinho de Compras',
    subtitle: 'Cliente: José Maria',
    date: dataHoraAtual()
};

const baseUrl = 'http://localhost:3001/produtos';

class ProdutosListPage extends Component {

    state = {
        produtos: {
            nome: '',
            quantidade: 0,
            preco: ''
        },
        list: [],
    };

    componentWillMount() {
        axios(baseUrl).then(response => {
            this.setState({ list: response.data })
        });
    };

    adicionar = () => {
        const { produtos } = this.state;
        const method = produtos.id ? 'put' : 'post';
        const url = produtos.id ? `${baseUrl}/${produtos.id}` : baseUrl;
        if (!(produtos.nome && produtos.quantidade && produtos.preco)) {
            alert("Você deve informar todos os campos!");
        } else {
            axios[method](url, produtos)
                .then(response => {
                    const list = this.getUpdateList(response.data)
                    this.setState({ produtos: list })
                    this.setState({ list });
                });
            this.setState(state => {
                return {
                    ...state.produtos = {
                        nome: '',
                        quantidade: 0,
                        preco: ''
                    }
                }
            });
        }

    }

    getUpdateList = (produtos, adicionar = true) => {
        const { list } = this.state;
        const listProdutos = list.filter(u => u.id !== produtos.id)
        if (adicionar) listProdutos.unshift(produtos)
        return listProdutos;
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        const { produtos } = this.state;
        produtos[name] = value;
        this.setState({ produtos })
    };

    remover = (produto) => {
        axios.delete(`${baseUrl}/${produto.id}`).then(() => {
            const list = this.getUpdateList(produto, false)
            this.setState({ list })
        })
    };

    calcularTotal = () => {
        const { list } = this.state;
        let total = list.map((produto) => produto.subTotal)
            .reduce((acc, subTotal) => acc + subTotal);
        return alert('Total: R$ ' + parseFloat(total).toFixed(2));
    }

    render() {
        const { produtos, list } = this.state;
        return (
            <Body {...headerProps}>
                <Form
                    produto={produtos}
                    adicionar={this.adicionar}
                    handleChange={this.handleChange}
                />
                <TabelaProdutos
                    produtos={list}
                    remover={this.remover}
                />
                <div className="col-12 d-flex justify-content-end">
                    <button
                        className="btn btn-primary"
                        onClick={() => this.calcularTotal()}
                    >
                        Calcular Total
                    </button>

                </div>
            </Body>
        );
    }
}

export default ProdutosListPage;