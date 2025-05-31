const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col">
      <div className="bg-red-700 text-white p-4">
        <h3 className="text-xl font-bold">{course.title}</h3>
      </div>
      <div className="p-6 flex-grow">
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="space-y-3">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Duration: {course.duration}</span>
          </div>
          <div className="flex items-center">
            <svg className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Level: {course.level}</span>
          </div>
          <div className="flex items-start">
            <svg className="h-5 w-5 text-red-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Certification: {course.certification}</span>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-50 border-t">
        <button className="w-full bg-red-700 text-white py-2 rounded-lg font-medium hover:bg-red-800 transition duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;