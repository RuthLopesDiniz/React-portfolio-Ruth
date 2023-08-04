import React from 'react';

const About = () => {
  const skills = [
    { name: "-Java Script", image: '/src/assets/icons/javascript.png' },
    { name: "------React", image: '/src/assets/icons/icons8-react-native-64.png' },
    { name: "------Html5", image: '/src/assets/icons/icons8-html5-96.png' },
    { name: "--------CSS", image: '/src/assets/icons/icons8-css-48.png' },
  ]
  return (
    <div className='px-7 md:px-10 sm:-mt-24 items-center' id="about">
      <h1 className='text-3xl mt-5 text-primary font-semibold'>Sobre mim</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2]'>Olá, meu nome é Ruth, tenho 34 anos e sou Desenvolvedora Front-End com experiência em React.js, Next.js, JavaScript,
        TypeScript, Styled Components entre outras tecnologias, Apaixonada pelo desenvolvimento de componentes reutilizáveis.
        Estou pronto para enfrentar novos desafios e contribuir com soluções inovadoras.</p>

      {/*Experiences section*/}
      <div className='md:flex items-center my-7'>
        <p className='text-primary text-8xl font-bold'>5+</p>
        <p className='text-white text-2xl md:ml-5'>Criando Interfaces Intuitivas e Experiências Incríveis no Desenvolvimento Web de
          Alto Nível.
        </p>
      </div>

      {/*Skils*/}
      <div className='flex flex-col md:flex-row '>
        {
          skills.map((skill, index) => <div key={index} className='skills md:w-[256ox] md:h-[254px] bg-light hover:bg-primary
          flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500'>
            <img src={skill.image} alt='' />
            <p className='text-2xl mt-3 text-white font-semibold'>{skill.name}</p>
          </div>)
        }
      </div>

    </div>
  );
};

export default About;