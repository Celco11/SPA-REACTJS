import React from 'react';
import RowTabelaProdutos from '../row-tabela-produtos/RowTabelaProdutos';

const TabelaProdutos = ({ produtos, remover }) => (
    <table className="table mt-4">
        <thead>
            <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Qtd</th>
                <th>Preço</th>
                <th>SubTotal</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {
                produtos.map(produto => {
                    return (
                        <RowTabelaProdutos
                            key={produto.id}
                            produto={produto}
                            remover={remover}
                        />
                    );
                })
            }
        </tbody>
    </table>
)
export default TabelaProdutos;