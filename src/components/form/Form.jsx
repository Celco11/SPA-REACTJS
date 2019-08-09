import React from 'react';

const Form = ({ produto, handleChange, adicionar }) => (
    <div className="form">
        <div className="row">
            <div className="col-12 col-md-5">
                <div className="form-group">
                    <label>Produto</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nome"
                        value={produto.nome}
                        onChange={handleChange}
                        placeholder="Ex: Teclado Dell" />
                </div>
            </div>
            <div className="col-12 col-md-2">
                <div className="form-group">
                    <label htmlFor="qtd">Quantidade</label>
                    <input
                        className="form-control"
                        name="quantidade"
                        type="number"
                        value={produto.quantidade}
                        onChange={handleChange}
                        placeholder="0"
                    />
                </div>
            </div>
            <div className="col-12 col-md-5">
                <div className="form-group">
                    <label htmlFor="valor">Preço</label>
                    <input
                        className="form-control"
                        type="text"
                        name="preco"
                        value={produto.preco}
                        onChange={handleChange}
                        placeholder="R$"
                    />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-primary" onClick={() => adicionar(produto)}>Adicionar</button>
            </div>
        </div>
    </div>
);
export default Form;