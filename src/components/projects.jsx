import React from 'react';

const projects = [
  {
    name: "CABS",
    description: "Machine system integrated rig for Ministry of Defence (DRDO)",
    technologies: "ReactJS, JavaScript, Tailwind CSS, Mantine UI, Plotly",
    link: null
  },
  {
    name: "PsyHire",
    description: "AI-driven applicant tracking system",
    link: "https://psyhire.ai/",
    technologies: "Next.js, JavaScript, Tailwind CSS, HTML"
  },
  {
    name: "Aptagrim Website",
    description: "Official company website",
    link: "https://aptagrim.com/",
    technologies: "Next.js, JavaScript, Tailwind CSS, Mantine UI"
  },
  {
    name: "Property Growth",
    description: "Real estate website based in Canada",
    link: "http://propertygrowth.ca/",
    technologies: "Next.js, JavaScript, Tailwind CSS, Bootstrap 5"
  },
  {
    name: "Matisoft Cyber Security",
    description: "New product USB blocker for Matisoft Cyber Security",
    technologies: "ReactJS, JavaScript, Tailwind CSS, Mantine UI",
    link: null
  },
  {
    name: "YOUR NUTRITION CONSULTANT",
    description: "Online nutrition consultant web application",
    link: "https://swastikroyyy.github.io/nutrition_consultant/",
    technologies: "React.js, JavaScript, Chart.js, Css, Html"
  }
];

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-100 py-8 z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {projects.map((project, index) => (
            <div key={index} className='bg-white shadow-2xl p-4 rounded'>
            {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                </a>
              ) : (
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              )}
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-gray-600 font-medium ">Technologies: <span className='font-normal'>{project.technologies}</span></p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
