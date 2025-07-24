import React from 'react';

function AboutUsPage() {
  return (
    <>
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl text-center font-bold mb-4 text-gray-800">About Me</h1>
      <div className="flex flex-col md:flex-row items-center mb-6">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2023/2/EV/HN/YQ/183723245/allu-arjun-men-s-shirt-500x500.jpeg"
          alt="Profile"
          className="rounded-8xl w-32 h-32 border-4 border-indigo-400 mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">
            Arjun Dhiman
          </h2>
          <p className="text-gray-600">
            Hello! I'm a passionate web developer with expertise in creating modern, responsive apps using React and Tailwind CSS. I enjoy solving problems, building user-friendly interfaces, and continuously learning new technologies.
          </p>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2 text-gray-700">Skills</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>React & JavaScript</li>
          <li>Tailwind CSS & Responsive Design</li>
          <li>APIs & State Management</li>
          <li>UI/UX Principles</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2 text-gray-700">Contact</h3>
        <p className="text-gray-600">
          Feel free to reach out via email: <a href="mailto:youremail@example.com" className="text-indigo-600 underline">youremail@example.com</a>
        </p>
      </div>
    </div>
    </>
  )
};

export default AboutUsPage;