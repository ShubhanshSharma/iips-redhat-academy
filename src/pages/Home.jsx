import { Link } from 'react-router-dom';
import Events from './EventsPage';
import MentorCard from '../components/MentorCard';
import Mentors from './Mentors';
import Gallery from './GalleryPage';
import Faq from './FaqPage';
import Contact from '../Contact';
import rh_logo from "../assets/rh_academy_logo.png";
import bg_image from "../assets/IIPS.jpg"
import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col gap-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#ff0000] to-[#7d0000] min-h-[90vh] text-[#ffffff] py-20">
        <img 
          src={rh_logo}
          alt="Redhat Logo" 
          className="h-[28vh] md:h-[25vh] mx-auto mb-8 drop-shadow-lg"
        />
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl italic text-white/70 font-semibold md:font-bold mb-6 leading-snug tracking-wide">
            Bridge the gap between <span className="text-white">education</span> and <span className="text-white">industry</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/80">
            Empowering students with open-source technologies and industry-relevant skills
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link 
              to="/courses"
              className="bg-white text-red-700 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 hover:bg-gray-100 transition-transform duration-300 flex items-center gap-2"
            >
              <i className="fas fa-book-open"></i> Explore Courses
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:bg-red-800 hover:border-[#ff0000] transition duration-300 flex items-center gap-2"
            >
              <i className="fas fa-envelope"></i> Contact Us
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
                src={rh_logo} 
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
          <div className="flex justify-center gap-8">
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