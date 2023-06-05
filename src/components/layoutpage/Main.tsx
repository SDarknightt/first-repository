import Image from './Image';

const AboutSection = () => {
    return (
      <div className="text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-700 ">Pessoal</h1>
          <p className=" text-gray-700 text-center">
          Sou um programador júnior com uma<br/>
          habilidade natural para trabalhar em<br/>
          equipe, me adaptar facilmente a novos<br/>
          ambientes e tecnologias.<br/>
          Possuo um perfil comunicativo e gosto de<br/>
          interagir com outras pessoas para aprender<br/>
          e compartilhar conhecimento.<br/>
          Meu objetivo é adquirir experiência no<br/>
          mercado de trabalho, aprimorar meus<br/>
          conhecimentos e crescer junto com a<br/>
          empresa.
          </p>

      </div>
    );
  };
  
  const SkillsSection = () => {
    return (
      <div className="text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-700">Habilidades</h1>
          <p className="text-gray-700 text-center">Fortes:<br/> HTML<br/> CSS<br/> Bootstrap<br/> SQL(PostgreSQL)<br/> Java<br/>C<br/>PHP<br/>JavaScript.</p>

      </div>
    );
  };
  
  const EducationSection = () => {
    return (
      <div className="text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-700">Educação</h1>
  
          <p className=" text-gray-700 text-center">Ensino médio completo.<br/>Sistemas para Internet (Cursando o 3º Semestre).<br/> Inglês básico. </p>

      </div>
    );
  };
  
  const ExperienceSection = () => {
    return (
      <div className="text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-700">Experiência Profissional</h1>
        <p className=" text-gray-700 text-center">
          Trabalhei como vendedor em uma loja<br/> 
          especializada em dispositivos móveis,<br/>
          incluindo smartphones, pelo período de<br/>
          1 ano e 4 meses.</p>
      </div>
    );
  };
  
  const ContactSection = () => {
    return (
      <div className="text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-700">Contato</h1>
        <p className=" text-gray-700 text-center">
          samueldias004@gmail.com<br/> 
          (55) 99611-3699<br/>
          Santa Maria - RS </p>
      </div>
    );
  };



const Main = () => {
    return (
      <div className="flex flex-col items-center">
        <div>
          <Image />
        </div>
  
        <div >
        <AboutSection />
        <SkillsSection />
        <ExperienceSection/>
        <EducationSection/>
        <ContactSection/>
        </div>
  
      </div>
    );
  };
  export default Main;