import React from 'react';
const About = () => {
  return (
    <div id="about" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About</h2>
        <div className="flex flex-col lg:flex-row items-center">
          <img src={'/image/profileImg.jpeg'} alt="Profile" className="rounded-full w-48 h-48 mb-8 lg:mb-0 lg:mr-8 shadow-lg" />
          <p className="text-center lg:text-left max-w-4xl mx-auto text-lg leading-relaxed">
            Experienced Front-End Developer with a passion for crafting robust and efficient web applications.
            Proficient in JavaScript and React.js, with hands-on experience in Next.js framework. Skilled in collaborating
            with multidisciplinary teams to deliver feature-rich solutions while ensuring code quality and performance
            optimization. Adept at problem-solving and troubleshooting, with a strong focus on writing clean and
            maintainable code. Well-versed in Agile/Scrum methodologies and dedicated to continuous improvement and learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
