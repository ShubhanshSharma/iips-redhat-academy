import React from "react";
import class_1 from '../assets/Redhat Class1.jpeg';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="bg-red-700 text-white rounded-lg p-8 md:p-12 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Red Hat Academy</h1>
          <p className="text-xl md:text-2xl mb-8">
            Empowering the next generation of open source professionals at IIPS, DAVV
          </p>
        </div>
        
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              The Red Hat Academy at IIPS, DAVV is dedicated to providing students with hands-on experience and industry-relevant skills in open source technologies. Our mission is to bridge the gap between academia and industry by offering comprehensive training programs that prepare students for real-world challenges.
            </p>
            <p className="text-gray-700 mb-6">
              Through our partnership with Red Hat, we deliver cutting-edge curriculum, expert-led training, and certification opportunities that give our students a competitive edge in the job market.
            </p>
          </div>
          
          <div>
            <img 
              src={class_1} 
              alt="Students in lab session" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Why Join Red Hat Academy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-red-700 mb-4">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Industry-Recognized Certifications</h3>
              <p className="text-gray-600">
                Gain globally recognized Red Hat certifications that validate your skills and boost your career prospects.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-red-700 mb-4">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Hands-on Training</h3>
              <p className="text-gray-600">
                Learn through practical, lab-based sessions that give you real-world experience with enterprise technologies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-red-700 mb-4">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Expert Mentorship</h3>
              <p className="text-gray-600">
                Learn from certified Red Hat professionals and experienced faculty members who guide you through the learning process.
              </p>
            </div>
          </div>
        </div>
        
        {/* Academy Structure */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Academy Structure</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Curriculum</h3>
              <p className="text-gray-700">
                Our curriculum covers a wide range of topics from basic Linux administration to advanced cloud technologies, all aligned with Red Hat's enterprise open source solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Facilities</h3>
              <p className="text-gray-700">
                We provide state-of-the-art computer labs equipped with the necessary hardware and software to support hands-on learning experiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Certification Path</h3>
              <p className="text-gray-700">
                Students can progress through certification levels from RHCSA (System Administrator) to RHCE (Engineer) and beyond, with special exam pricing for academy students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;