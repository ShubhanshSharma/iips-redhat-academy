const MentorCard = ({ mentor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={mentor.image} 
          alt={mentor.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-bold text-white">{mentor.name}</h3>
          <p className="text-red-300 font-medium">{mentor.role}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-1">EXPERTISE</h4>
          <p className="text-gray-800">{mentor.expertise}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-1">CERTIFICATIONS</h4>
          <div className="flex flex-wrap gap-2">
            {mentor.certifications.map((cert, index) => (
              <span key={index} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                {cert}
              </span>
            ))}
          </div>
        </div>
        <p className="text-gray-700 mb-4">{mentor.bio}</p>
        <button className="text-red-700 font-medium hover:underline">
          View Profile →
        </button>
      </div>
    </div>
  );
};

export default MentorCard;