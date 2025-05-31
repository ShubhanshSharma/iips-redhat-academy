import { Link } from 'react-router-dom';
import Events from './EventsPage';
import MentorCard from '../components/MentorCard';
import Mentors from './Mentors';
import Gallery from './GalleryPage';
import Faq from './FaqPage';
import Contact from '../Contact';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-[150px] bg-red-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Red Hat Academy at IIPS, DAVV</h1>
          <p className="text-xl mb-8">Empowering students with open-source technologies and industry-relevant skills</p>
          <div className="space-x-4">
            <Link to="/courses" className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Explore Courses
            </Link>
            <Link to="/contact" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Red Hat Academy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Red Hat Academy</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/assets/images/redhat-logo.png" 
                alt="Red Hat Logo" 
                className="w-64 mx-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <p className="text-lg mb-4 text-gray-700">
                Red Hat Academy provides a curriculum to help educational institutions keep pace with the demands of the IT industry.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Through this program, IIPS, DAVV students gain access to Red Hat training and certification exams at a reduced cost.
              </p>
              <Link to="/about" className="text-red-700 font-semibold hover:underline">
                Learn more about our academy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course items would be mapped from data */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img src="/assets/images/rhcsa-course.jpg" alt="RHCSA" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Red Hat System Administration (RHCSA)</h3>
                <p className="text-gray-600 mb-4">Learn essential Linux administration skills and prepare for the RHCSA certification.</p>
                <Link to="/courses/rhcsa" className="text-red-700 font-medium hover:underline">View Details</Link>
              </div>
            </div>
            
            {/* Add more course cards */}
          </div>
          <div className="text-center mt-10">
            <Link to="/courses" className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition duration-300">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <Events />

      {/* Mentors */}
      <Mentors />

      {/* Gallery */}
      <Gallery />

      {/* FAQ */}
      <Faq />

      {/* Contact */}
      <Contact />
    </div>
  );
};

export default Home;