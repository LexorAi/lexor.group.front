import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Carrossel from './Carrossel';
import Header from './Header';
import CardServico from './CardServico';
import { FaCloud, FaGlobe, FaCode, FaNetworkWired } from "react-icons/fa";


function App() {
  {/* textos aparecerem ao scrollar a tela */ }
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="container">
      {/* NAVBAR */}
      <nav className="navbar">
        <ul className="menu">
          <li><a href="#inicio">INÍCIO</a></li>
          {/* <li><a href="#visao">Visão</a></li>
          <li><a href="#missao">Missão</a></li> */}
          <li><a href="#servicos">SERVIÇOS</a></li>
          <li><a href="#produtos">PRODUTOS</a></li>
          <li><a href="#contato">CONTATO</a></li>
        </ul>
        <div className="logo">LEXOR</div>
      </nav>

      <br></br><br></br>
      {/* CABEÇALHO PRINCIPAL */}
      <header id="inicio">
        <Header />
        <p className="slogan">
          Impulsionamos os resultados dos nossos clientes por meio<br />
          de soluções digitais eficientes e entregas ágeis
        </p>
        <br />
        <button className="button">Contate-nos</button>
      </header>

      <div className="divisoria-inclinada-baixo" /> {/* inclinada para baixo */}

      <main>
        <div className="servicos">
          <section id="servicos" className="descricao" data-aos="fade-up">
            <h2 style={{ color: '#002233' }}>Serviços</h2>
            <div className="cards-container">
              <CardServico
                icon={<FaCloud />}
                titulo="Software como Serviço"
                descricao="Transforme sua ideia em um serviço online acessível por assinatura, com foco em performance, segurança e usabilidade."
              />
              <CardServico
                icon={<FaNetworkWired />}
                titulo="Transformação Digital"
                descricao="Transformamos serviços e atendimentos com tecnologia para tornar sua empresa mais ágil e eficiente."
              />
              <CardServico
                icon={<FaCode />}
                titulo="Outsourcing"
                descricao="Profissionais especializados no desenvolvimento de softwares e sistemas sob demanda."
              />
              <CardServico
                icon={<FaGlobe />}
                titulo="Sites Institucionais e Corporativos"
                descricao="Dê presença digital ao seu negócio com um site profissional, moderno e funcional. Apresente sua marca com autoridade e clareza."
              />
            </div>
          </section>
        </div>

        <div className="divisoria-inclinada-cima" />

        <div className="produtos">
          <section id="produtos" className="descricao" data-aos="fade-up">
            <h2>Produtos</h2>
            <Carrossel />
          </section>
        </div>

        <div className="divisoria-inclinada-baixo" /> {/* inclinada para baixo */}

        <div className="contato">
          <section id="contato" className="descricao" data-aos="fade-up">
            <h2 style={{ color: '#002233' }}>Contato</h2>
            {/* Formulário ou informações de contato */}
          </section>
        </div>

        <div className="divisoria-inclinada-cima" />
      </main>

      <footer>
        <p>© 2025 Lexor. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;