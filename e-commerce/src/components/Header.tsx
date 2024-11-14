import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: 'black' , width: '100%',
      position: 'fixed', top: 0, left: 0
     }}>

    <AiOutlineMenu style={{ color : 'white' 
     }}>
    </AiOutlineMenu>

    <a> Kabum </a>

    <input placeholder="Busque aqui"></input>

    <a style={{color:'white' }} >ENTRE ou CADASTRE-SE</a>

     <BsCart2 />

    </header>
  );
};

export default Header;