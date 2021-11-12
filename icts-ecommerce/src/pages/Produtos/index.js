import './produtos.css';
import { produtos } from '../../components/listaProdutos/listaProdutos';


export default function Produtos() {
    return (
        <div className="containerProduto">
            <h1>Produtos</h1>
            <div className="listaProduto">
                {
                    produtos.map((prod) => (
                        <div className="cardProduto">
                            <div className="imgCard">
                                <img src={prod.img} />
                                <div className="titleCard">
                                    <span>Produto camisa</span>
                                </div>
                                <div className="descricao">
                                    <p>Nome: {prod.nome}</p>
                                    <p> Descrição: {prod.descricao}</p>
                                    <p>Preço: {prod.preco}</p>
                                    <p>Data de criação: {prod.dataCriacao}</p>
                                    <p>Data de atualização: {prod.dataAtualizacao}</p>
                                </div>

                            </div>
                            <div className="btnCard">
                                <button>Comprar</button>
                                <button>Adcionar ao carrinho</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}