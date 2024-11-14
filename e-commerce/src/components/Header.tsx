import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <header style={{ 
      backgroundColor: 'black', 
      width: '100%',
      position: 'fixed', 
      top: 0, 
      left: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '2rem',   // Espaço à esquerda
      paddingRight: '2rem',  // Espaço à direita
      paddingTop: '1rem',    // Espaço no topo
      paddingBottom: '1rem', // Espaço na parte de baixo
    }}>

      {/* Ícone do Menu */}
      <AiOutlineMenu style={{ color: 'white', fontSize: '1.5rem' }} />

      {/* Logo */}
      <a style={{ color: 'white', fontSize: '1.2rem', textDecoration: 'none' }}>Kabum</a>

      {/* Barra de Busca */}
      <input 
        placeholder="Busque aqui" 
        style={{ 
          padding: '0.5rem', 
          width: '40%', 
          maxWidth: '300px'  // Limita a largura do input
        }} 
      />

      {/* Link de Login */}
      <a style={{ color: 'white'
      }}>ENTRE ou CADASTRE-SE</a>

      {/* Ícone do Carrinho */}
      <BsCart2 style={{ color: 'white',
        marginRight: '10px', // Adiciona margem para espaçamento
        width: '15%'
      }}/>
      
    </header>
  );
};

export default Header;