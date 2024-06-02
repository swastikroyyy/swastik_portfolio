
import React from 'react';
import { SiReact, SiJavascript, SiNextdotjs, SiRedux, SiTypescript, SiCss3, SiHtml5, SiJira, SiGit,SiTailwindcss,SiReactquery,SiReactrouter,SiMantine} from 'react-icons/si';

const skills = [
  { name: "ReactJS", icon: SiReact },
  { name: "NextJS", icon: SiNextdotjs },
  { name: "Redux", icon: SiRedux },
  { name: "JavaScript (ES6+)", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  {name:"Tailwind CSS",icon:SiTailwindcss},
  {name:"React Query",icon: SiReactquery },
 
  {name:"React Router",icon:  SiReactrouter },
  {name:"Mantine UI",icon: SiMantine },
  { name: "CSS3 / SCSS", icon: SiCss3 },
  { name: "HTML5", icon: SiHtml5 },
  { name: "Jira", icon: SiJira },
  { name: "Git", icon: SiGit },
   "RESTful APIs", "Unit and Integration Testing", "Husky",  "Responsive Design", "JSX","Agile"
];

const Skills = () => {
  return (
    <div id="skills" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <ul className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            typeof skill === 'string' ? (
              <li key={index} className="bg-gray-200 rounded-full px-6 py-3 m-2 text-lg shadow-lg">
                {skill}
              </li>
            ) : (
              <li key={index} className="bg-gray-200 rounded-full px-6 py-3 m-2 text-lg flex items-center shadow-lg">
                <skill.icon className="mr-2" /> {skill.name}
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
