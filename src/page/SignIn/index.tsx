import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        
        <span>
          <img src={logoImg} alt="PacíficoSul"/>
        </span>
        
        <h2> 
          Pacífico Sul Engenharia
        </h2>
    
          <div className="Site">
            <a href="http://pacificosul.net.br/">Nosso site!</a>
          </div>

          <div className="Instagram">
            <a href="https://www.instagram.com/pacificosulengenharia/">Siga no Instagram!</a>
          </div>

          <div className="Whatsapp">
            <a href="https://api.whatsapp.com/send?phone=5547999315041&text=Olá Pacífico Sul Engenharia!">Entre em contato via whatsapp!</a>
          </div>

          <div className="Facebook">
            <a href="https://www.facebook.com/pacificosulengenharia">Curta nossa Fanpage Oficial!</a>
          </div>

          <div>
            <a href="https://www.facebook.com/pacificosulengenharia/videos/225081948863551/">Confira um de nossos projetos!</a>
          </div>

          <div className="Telefone">
            <a href="tel:47999315041">Telefonar!</a>
          </div>


      </Content>
    </Container>
  );
}

export default SignIn;