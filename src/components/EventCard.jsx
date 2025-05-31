const EventCard = ({ event }) => {
  const eventDate = new Date(event.date);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <div className="p-6">
        <div className="flex items-start mb-4">
          <div className="bg-red-100 text-red-700 rounded-lg p-3 mr-4 text-center min-w-16">
            <span className="block text-xl font-bold">{eventDate.getDate()}</span>
            <span className="block text-sm uppercase">{monthNames[eventDate.getMonth()]}</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
            <div className="flex items-center text-gray-600 mt-1">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-gray-600 mt-1">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{event.location}</span>
            </div>
          </div>
        </div>
        <p className="text-gray-700 mb-6">{event.description}</p>
        <div className="flex justify-between items-center">
          <button className="text-red-700 font-medium hover:underline">
            More Details
          </button>
          <button className="bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-800 transition duration-300">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;