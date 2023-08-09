import React from 'react';

import facebook from '../assets/socials/facebook.png'
import instagram from '../assets/socials/instagram.png'
import linkedin from '../assets/socials/linkedin.png'

const Contact = () => {
  return (
    <div className='px-7 md:px-10 my-10' id='contact'>
      <div className='flex flex-col md:flex-row'>
        {/*Text and icons */}
        <div className='md:w-1/2'>
          <h1 className='text-3xl mt-16 text-primary font-semibold'>
            Conecte-se comigo:
          </h1>
          <p className='text-white my-2 md:w-2/3 leading-[2]'>
            Veja as formas!
          </p>

          {/*Social icons */}
          <div className='flex'>
            <a href='' className='ml-8'><img src={linkedin} alt=''/></a>
            <a href='' className='ml-8'><img src={facebook} alt=''/></a>
            <a href='' className='ml-8'><img src={instagram} alt=''/></a>
            

          </div>
        </div>

        {/* form*/}
        <div className='md:w-1/2'>
            <p className='mt-16 text-white text-2xl mb-6'>Contacte-me! vamos trabalhar juntos!</p>

            <form className='space-y-4'>
              <input type='text' name='name' placeholder='Nome: ' className='bg-[#f5f5f5]
              bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded'/>

              <input type='text' name='name' placeholder='Email: ' className='bg-[#f5f5f5]
              bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded'/>

              <textarea name='message' id='message' placeholder='Mensagem' className='bg-[#f5f5f5]
              bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded'></textarea>

              <button className='btn bg-primary py-2 px-12 text-white hover:bg-white hover:text-primary block
              transition-all duration-500 '>Enviar</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;