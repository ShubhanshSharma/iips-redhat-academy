import MentorCard from '../components/MentorCard';

const mentors = [
  {
    id: 1,
    name: "Dr. Yasmin Shaikh",
    role: "Red Hat Coordinator",
    expertise: "Linux Systems, Cloud Computing",
    image: "/assets/images/mentors/dr-rajesh.jpg",
    certifications: ["RHCA", "RHCE", "RHCVA"],
    bio: "With over 15 years of experience in open source technologies, Dr. Sharma leads our Red Hat Academy initiative."
  },
  {
    id: 2,
    name: "Prof. Anjali Patel",
    role: "Senior Trainer",
    expertise: "Container Technologies, DevOps",
    image: "/assets/images/mentors/prof-anjali.jpg",
    certifications: ["RHCE", "OpenShift Administrator"],
    bio: "Specializes in containerization and automation technologies with extensive industry experience."
  },
];

const Mentors = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Mentors</h1>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Learn from certified Red Hat professionals and experienced faculty members
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:px-10 gap-8 justify-items-center">
          {mentors.map(mentor => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
        
        {/* <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Become a Mentor</h2>
          <p className="text-gray-700 mb-6">
            Are you a Red Hat certified professional interested in mentoring the next generation of open source experts? We're always looking for passionate individuals to join our team.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition duration-300"
          >
            Express Interest
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Mentors;