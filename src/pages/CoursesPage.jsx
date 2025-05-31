import CourseCard from '../components/CourseCard';

const courses = [
  {
    id: 1,
    title: "Red Hat System Administration I (RH124)",
    description: "Introduces basic administration skills needed for Red Hat Enterprise Linux environments.",
    duration: "40 hours",
    level: "Beginner",
    certification: "RHCSA (on passing EX200 exam)"
  },
  {
    id: 2,
    title: "Red Hat System Administration II (RH134)",
    description: "Builds on fundamentals and covers more advanced administration tasks.",
    duration: "40 hours",
    level: "Intermediate",
    certification: "RHCSA (on passing EX200 exam)"
  },
  {
    id: 3,
    title: "Red Hat Certified Engineer (RH294)",
    description: "Learn automation with Ansible for efficient configuration management.",
    duration: "40 hours",
    level: "Advanced",
    certification: "RHCE (on passing EX294 exam)"
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Courses</h1>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Comprehensive training programs designed to equip you with industry-relevant skills
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Certification Benefits</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Industry-recognized credentials that validate your skills</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Increased job opportunities and earning potential</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Access to Red Hat's exclusive certification resources</span>
            </li>
          </ul>
          
          <div className="mt-8 bg-red-50 border-l-4 border-red-700 p-4">
            <h3 className="font-bold text-red-700 mb-2">Note:</h3>
            <p className="text-gray-700">
              Students of IIPS, DAVV get special discounts on Red Hat certification exams. Contact our academy coordinator for details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;