import React from 'react';

const Projects = () => {
  const projects=[
      {
        title:"Twiter",
        description: "a live geolocalization",
        photo: "/src/assets/projects/img1.png"
      },
      {
        title:"Events",
        description: "a live geolocalization",
        photo: "/src/assets/projects/img2.png"
      },
      {
        title:"Netflix",
        description: "a live geolocalization",
        photo: "/src/assets/projects/img3.png"
      },
      
  ]
  return (
    <div className='px-7 md:px-10 my-8' id="projects">
      <h1 className='text-3xl mt-5 text-primary font-semibold'>Feature projects</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2]'>Projetos realizados</p>

      {/*Feature projects */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center'>
          {
            projects.map((project, index)=> <div key={index} className='flex flex-col shadow-sm md:w-[343px]'>
              <a href={project.photo} className='mb-4'>
                <img src={project.photo} alt="" />
              </a>
              <h3 className='text-primary font-semibold text-lg'>{project.title}</h3>
              <p className='text-white mt-1'>{project.description}</p>

              {/*Buttons */}
              <div className='mt-5'>
                            <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white hover:text-primary transition-all
                            duration-500'>Sobre mim</button>
                            <button className='btn outline px-9 py-1.5 rounded border-none text-white ml-5'>Projetos</button>
                        </div>
            </div>)
          }
      </div>
    </div>
  );
};

export default Projects;