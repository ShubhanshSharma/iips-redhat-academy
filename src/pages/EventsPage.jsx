import EventCard from '../components/EventCard';

const events = [
  {
    id: 1,
    title: "Open Source Contribution Workshop",
    date: "2023-07-15",
    time: "10:00 AM - 4:00 PM",
    location: "IIPS Computer Lab, Block A",
    description: "Learn how to contribute to open source projects with hands-on Git exercises."
  },
  {
    id: 2,
    title: "Linux Administration Bootcamp",
    date: "2023-08-05",
    time: "9:00 AM - 5:00 PM",
    location: "IIPS Seminar Hall",
    description: "Intensive one-day workshop covering essential Linux administration skills."
  },
  {
    id: 3,
    title: "Red Hat Certification Info Session",
    date: "2023-08-20",
    time: "3:00 PM - 5:00 PM",
    location: "Online (Zoom)",
    description: "Learn about Red Hat certification paths and how they can boost your career."
  }
];

const Events = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Upcoming Events</h1>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Workshops, seminars, and training sessions to enhance your skills
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Past Events</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resources</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">Introduction to Linux</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">June 10, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a href="#" className="text-red-700 hover:underline">Slides</a> | 
                    <a href="#" className="text-red-700 hover:underline ml-2">Recording</a>
                  </td>
                </tr>
                {/* Add more past events */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;