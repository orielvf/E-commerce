import './Item.css';
import { Carrinho, Caminhao, Coracao, CarrinhoInserir, EstrelaCheia } from '../index';

interface ItemProps {
}

export default function Item({ }: ItemProps) {
    return (
        <div id="Item">

            <div id="Item-top">
                <div id="Item-top-promoAtual">
                    <span>OFERTA BLACK FRIDAY</span>
                </div >
                <div id="Item-top-coracaoEcarrinho">
                    <Coracao className="hover" />
                    <CarrinhoInserir className="hover" />
                    <EstrelaCheia className="default" style={{ color: "#f08522" }} />
                    <EstrelaCheia className="default" style={{ color: "#f08522" }} />
                    <EstrelaCheia className="default" style={{ color: "#f08522" }} />
                    <EstrelaCheia className="default" style={{ color: "#f08522" }} />
                    <EstrelaCheia className="default" style={{ color: "#f08522", padding: "0px" }} />
                    <span className="default" style={{ fontSize: "11px", marginTop: "0px", paddingLeft: "4px" }}>(442)</span>
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

                <p id="PrecoAntigo">R$ 1.333,32</p>

                <div id="PrecoAtual">
                    <p id="PrecoAtualItem">R$ 1.109,99</p>
                    <p id="PrecoAtualDesconto" className="default" >-6%</p>
                </div>

                <p id="Parcela">À vista no PIX<br></br>ou até <b>10x de 145,55</b></p>

                <div id="Fidelidade">
                    <EstrelaCheia id="FidelidadeEstrela" />
                    <p>prime<strong>ninja</strong></p>
                </div>
            </div>
            <div id="Item-comprar">
                <Carrinho id="Item-comprar-carrinho"></Carrinho>
                <span>COMPRAR</span>
            </div>
        </div>
    )

}
