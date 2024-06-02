import React from 'react';

const experiences = [
  {
    company: "Aptagrim Limited",
    period: "September 2022 - Present",
    location: "Hyderabad, India",
    role: "Front-End Developer",
    responsibilities: [
      "Collaborated with cross-functional teams to define, design, and develop visually stunning and highly interactive user interfaces for web applications using ReactJS and Next.js.",
      "Employed problem-solving skills to address complex frontend challenges, ensuring a seamless and responsive user experience.",
      "Collaborated with a team of developers to implement new features and optimize performance.",
      "Led and contributed to the architectural decisions of the frontend codebase, emphasizing scalability, maintainability, and code reusability.",
      "Stayed up-to-date with emerging frontend technologies, tools, and best practices, continuously improving development processes."
    ]
  },
  ,
  {
    company: "IPH Technologies",
    period: "April 2022 - June 2022",
    location: "Lucknow, India",
    role: "Associate Software Engineer",
    responsibilities: [
      "Assisted in front-end development tasks using React JS and JavaScript."
    ]
  },
  {
    company: "Ecrubit Consultancy Services Private Limited",
    period: "August 2021 - February 2022 ",
    location: "Chennai, India",
    role: "Front-End Developer",
    responsibilities: [
      "Developed user interfaces for web applications using modern front-end frameworks."
    ]
  }
];

const Experience = () => {
  return (
    <div id="experience" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Experience</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="mb-4 md:mb-0 md:w-1/2">
                <h3 className="text-lg font-semibold">{experience.company}</h3>
                <p className="text-gray-600">{experience.location}</p>
              </div>
              <div className="md:w-1/2 md:text-right">
                <p className="text-gray-600">{experience.period}</p>
              </div>
            </div>
            <div className="mt-2 md:ml-12">
              <p className="text-gray-800">{experience.role}</p>
              <ul className="list-disc list-inside">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-gray-600">{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
