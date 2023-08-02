import React from 'react';
import heroImg from '../assets/projects/Ruth2-removebg-preview.png'

const Home = () => {
    return (
        <div className='px-7 md:px-10 my-14 md:h-screen bg-[#1a1a29]' id="home">
            <div>
                <div className="w-full flex flex-col md:flex-row items-center justify-between">
                    {/*Texts */}
                    <div className='text-white'>
                        <h6 className='text-3xl mt-12'>Oi, eu sou</h6>
                        <h1 className='font-semibold text-3xl md:text-5xl my-4'>Ruth Diniz</h1>
                        <p className='md:w-96'>Desenvolvedora front-end, freelance e apaixonada por programação. Eu crio ótimas experiências para usuários.</p>

                        {/*Buttons */}
                        <div className='mt-5'>
                            <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white hover:text-primary transition-all
                            duration-500'>Sobre mim</button>
                            <button className='btn outline px-6 py-1.5 rounded border-none text-white ml-5'>Projetos</button>
                        </div>
                       
                    </div>
                     {/*Img */}
                     <div className='order-first md:order-last relative border-spacing-x-32'>
                            <img src={heroImg} alt='Foto de Ruth' width={550} height={550} decoding='async' color='transparent'/>
                        </div>
                </div>

                {/*Divider*/}
                <div className='w-full h-24 bg-[#181824] mx-auto absolute left-0 hidden md:block'></div>
            </div>   
        </div>
    );
};

export default Home;