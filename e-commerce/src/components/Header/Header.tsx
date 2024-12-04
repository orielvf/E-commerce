import './Header.css';
import { MenuCelular, Caminhao } from '../index';
import Mock from '../../../components-mock.json'


export default function Header() {

  const item = Mock.LogoMock[0];

  return (
    <div id='Header-main'>
      <MenuCelular id="icone01"></MenuCelular>
      <img src={item.logo} alt="" />
      <input type="text" placeholder="Aperte o K e busque aqui" />
      <input type="button" />
      <a><b>ENTRE</b> ou <b>CADASTRE-SE</b></a>
    </div>
  )
}