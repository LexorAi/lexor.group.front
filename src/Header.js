import React from 'react';
import Typewriter from 'typewriter-effect';

function Header() {
  return (
    <header>
      <h1>
        <Typewriter
          options={{
            strings: ['Bem-vindo à Lexor', 'Soluções Inteligentes', 'Tecnologia que transforma'],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </h1>
    </header>
  );
}

export default Header;
