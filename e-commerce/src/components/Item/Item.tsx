import './Item.css';
import { Carrinho, MenuCelular, Caminhao, Coracao, CarrinhoInserir } from './index';

interface ItemProps {
}

export default function Item({ }: ItemProps) {
    return (
        <div id="Item">

            <div id="Item-top">
                <div id="Item-top-promoAtual">
                    <span>promoAtual</span>
                </div >
                <div id="Item-top-coracaoEcarrinho">
                    <Coracao className="hover" />
                    <CarrinhoInserir className="hover" />
                    <span className="default">estrela</span>
                </div>
            </div>

            <div id="Item-img">
                <img src="https://images.kabum.com.br/produtos/fotos/320797/processador-amd-ryzen-7-5700x-cache-36mb-3-8ghz-4-6ghz-max-turbo-am4-100-100000926wof_1647636511_m.jpg"
                    alt="img" />
            </div>
            <div id="Item-botton">
                <div id="Item-botton-div-frete-gratis">
                    <Caminhao id="Item-botton-caminhao"></Caminhao>
                    <span>Frete grátis*</span>
                </div>
                <p id="Descricao">Processador AMD Ryzen 7 5700X, 3.4GHz (4.6GHz Max Turbo), Cache 36MB, AM4, Sem Vídeo - 100-100000926WOF</p>
                <p>precoAntigo</p>
                <p>precoAtual</p>
                <p>desconto</p>
                <p>parcela</p>
                <p>fidelidade</p>
            </div>
            <div id="Item-comprar">
                <Carrinho id="Item-comprar-carrinho"></Carrinho>
                <span>COMPRAR</span>
            </div>
        </div>
    )

}
