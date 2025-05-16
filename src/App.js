import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Carrossel from './Carrossel';
import Header from './Header';

function App() {
  {/* textos aparecerem ao scrollar a tela */}
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="container">
      {/* NAVBAR */}
      <nav className="navbar">
        <ul className="menu">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#visao">Visão</a></li>
          <li><a href="#missao">Missão</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
        <div className="logo">LEXOR</div>
      </nav>
      
      <br></br><br></br><br></br>
      {/* CABEÇALHO PRINCIPAL */}
      <header id="inicio">
        <Header />
        {/* <h1>Transformando Ideias em Soluções Digitais</h1>
        <p className="slogan">Inovação, tecnologia e excelência para o seu negócio.</p>
        <p className="descricao">
          Somos uma empresa de tecnologia voltada para o desenvolvimento de soluções inovadoras que impulsionam a transformação digital de negócios e melhoram a experiência das pessoas no uso da tecnologia. Com uma equipe multidisciplinar e apaixonada por inovação, atuamos na criação de produtos e serviços que combinam eficiência operacional, inteligência de dados, segurança e usabilidade. Desde a concepção de sistemas personalizados até a implementação de plataformas baseadas em inteligência artificial, automação e nuvem, nosso foco está em entregar valor real, acompanhando as necessidades do mercado e superando as expectativas de nossos clientes. Valorizamos a colaboração, a ética e o aprendizado contínuo, construindo parcerias sólidas e duradouras. Acreditamos que tecnologia é mais do que ferramenta — é o motor da evolução, e por isso colocamos o ser humano no centro de tudo o que desenvolvemos.
        </p> */}
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main>
        <section id="visao" className="descricao" data-aos="fade-up">
          <h2>Visão</h2>
          <p>
            Nossa visão é ser uma das principais referências em tecnologia e inovação no cenário nacional e internacional, reconhecida por nossa capacidade de antecipar tendências, entregar soluções que geram valor real e por impactar positivamente a sociedade...
          </p>
        </section>

        <section id="missao" className="descricao" data-aos="fade-up">
          <h2>Missão</h2>
          <p>
            Nossa missão é criar e entregar soluções tecnológicas inteligentes, seguras e escaláveis, que ajudem empresas e pessoas a superarem desafios, otimizarem processos e explorarem novas possibilidades em um mundo cada vez mais digital...
          </p>
        </section>

        <section id="servicos" className="descricao" data-aos="fade-up">
          <h2>Serviços</h2>
          <p>
            Na <strong>Lexor</strong>, desenvolvemos soluções digitais sob medida para impulsionar sua empresa no mundo digital...
          </p>
        </section>

        <section id="produtos" className="descricao" data-aos="fade-up">
          <h2>Produtos</h2>
          <Carrossel />
        </section>

        <section id="contato" className="descricao" data-aos="fade-up">
          <h2>Contato</h2>
            <p>📞 (11) 91234-5678</p>
            <p>✉️ contato@lexor.com.br</p>
            <p>📍 Rua da Inovação, 123 - São Paulo, SP</p>
        </section>
      </main>

      <footer>
        <p>© 2025 Lexor. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;