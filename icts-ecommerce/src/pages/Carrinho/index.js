import './carrinho.css';
const coringa = 'https://static.shoptimao.com.br/produtos/camisa-corinthians-ii-2122-sn-torcedor-nike-masculina/26/2IC-2084-026/2IC-2084-026_zoom1.jpg?ts=1621637011&ims=544x';

export default function Carrinho() {
    return (
        <div className="containerCarrinho">
            <h1>Carrinho</h1>
            <div className="containerCard">
                <div className="card">
                    <div className="cardTitle">
                        <p>Compra</p>
                        <div className="cardBody">
                            <img src={coringa} />
                            <div className="descricaoCarrinho">
                                <p>Data criação: {new Date().toISOString()}</p>
                                <p>Tipo de pagamento: Camisa</p>
                                <p>Status: Aguardando pagamento</p>
                            </div>
                        </div>
                    </div>
                    <div className="btnFinlizar">
                        <button>Finalizar Compra</button>
                        <p>Total: R$ 400</p>
                    </div>
                </div>
            </div>
        </div>
    )
}