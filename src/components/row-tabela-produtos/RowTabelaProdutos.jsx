import React from 'react';

const TabelaProdutos = ({ produto, remover }) => (
    <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.quantidade}</td>
        <td>{produto.preco}</td>
        <td>{parseFloat(produto.subTotal = (produto.quantidade * produto.preco)).toFixed(2)}</td>
        <td>
            <button className="btn btn-danger ml-2"
                onClick={() => remover(produto)}>
                <i className="fa fa-trash" />
            </button>
        </td>
    </tr>
)
export default TabelaProdutos;