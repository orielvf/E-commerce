import './Header.css';
import { MenuCelular, Suporte, Acessibilidade, Coracao, Carrinho } from '../index';
import Mock from '../../../components-mock.json'

export default function Header() {

  const item = Mock.LogoMock[0];

  return (
    <div id='Header-main'>
      <MenuCelular id="icone01"></MenuCelular>
      <img src={item.logo} alt="" />
      <input type="text" placeholder="Aperte o K e busque aqui" />
      <input type="button" />
      <a>
        <b>ENTRE</b> ou <br /><br />
        <b>CADASTRE-SE</b>
      </a>
      <Suporte id="Suporte"></Suporte>
      <Acessibilidade id="Acessibilidade"></Acessibilidade>
      <Coracao id="Coracao"></Coracao>
      <Carrinho id="Carrinho"></Carrinho>
    </div>
  )
}