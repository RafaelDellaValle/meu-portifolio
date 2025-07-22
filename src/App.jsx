import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="cabecalho">
        <div>
            <h1 className="NomeTitulo">Rafael Della<br/> Valle De Sousa</h1>
            <p className="SubTitulo">Técnico em Informática <br/> Desenvolvedor em formação</p>
            <img src="../src/assets/Rafael.png" className="RafaelImg"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        </div>
        
        
      </header>

      <section className="Contato">
        <div className="DivContato">
          <li className="Local"> Piracicaba- SP</li>
          <li className="Email"> rafaeldesousa3245@gmail.com</li>
          <li className="Telefone"> (19) 98208-0503</li>
        </div>
      </section>
        <div className="DivSobreMim">
            <h2 className="SobreMim">SOBRE MIM</h2>
          <p className="InformacaoSobreMim">
            Sou apaixonado por tecnologia e estou em processo de formação técnica em informática. Tenho experiência com ferramentas digitais, sistemas operacionais, manutenção básica, suporte ao usuário e estou sempre em busca de aprender mais. Meu foco é oferecer soluções rápidas e claras, com paciência e empatia.
          </p>
        </div>
        <section className="SectionFerramentas">
      
          <h2 className="H2Ferramentas">Ferramentas que Conheço</h2>
            <div className="DivFerramentas">  
                <li>Windows 10/11</li>
                <li>Ubuntu / Linux Mint</li>
                <li>TeamViewer, AnyDesk, Office 365</li>
                <li>Canva</li>
                <li>CMD básico, limpeza de cache e configurações</li>
                <li>React, HTML, CSS, JavaScript, Git e Github</li>
            </div>
        </section>
          
      <section>
        <h2 className="H2Projetos">PROJETOS</h2>
          <div className="ListaProjetos">
            <h2 className="H2SiteAgendamento">Site de Agendamento</h2>
            <h2 className="H2Portifolio">Portifolio em Html e CSS</h2>
            <h2 className="H2EmAndamento">Em Andamento</h2>
            <div className="SiteIA">Desenvolvi um site para agendamento de serviços<br/> de suporte técnico em T.I. O projeto foi criado utilizando a ferramenta Gamma, com o apoio da inteligência artificial para <br/> gerar estrutura, design e conteúdo de forma otimizada. É uma solução prática, acessível e funcional, pensada <br/>para divulgar meu trabalho e facilitar o atendimento.</div>
            <div className="PortifolioSite">Portfólio pessoal desenvolvido com React para apresentar meus projetos, habilidades e experiências na área de tecnologia. A aplicação é responsiva, organizada por componentes e demonstra meu conhecimento em HTML, CSS, JavaScript, React e versionamento com Git/GitHub.</div>
            <div className="EmBranco">Em Andamento</div>
        </div>
      </section>

      <section className="SectionDisponibilidade">
        <h2 className="H2Disponibilidade">Disponibilidade</h2>
        <p className="PDisponibilidade">Tenho disponibilidade total de horários, com exceção do período da manhã, em que estou cursando Técnico em Informática pelo Senac. Estou em busca da minha primeira oportunidade na área de Tecnologia da Informação, com grande motivação para aprender, crescer profissionalmente e contribuir com a equipe.</p>
     </section>

   <section className="SectionCursos">
    
        <h2 className="H2Cursos">  Cursos Realizados  </h2>
          <ul className="UlCursos">
            <li>Técnico Em Informática - Senac (Em Andamento)</li>
            <li>React, HTML, CSS, JavaScript, Git e Github - Alura</li>
            <li>Introdução à Informática – Fundação Bradesco</li>
            <li>Suporte Técnico de TI – Udemy (Em Andamento)</li>
            <li>Pacote Office - Fundação Bradesco</li>
          </ul>
          
      </section>
        
     
   

      <section className="SectionFrase">
        <h2 >“Tecnologia é ferramenta. Meu papel é garantir que ela funcione para você, com clareza, paciência e compromisso.”</h2>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Rafael - Portfólio</p>
      </footer>
    </div>
  );
}

export default App;
