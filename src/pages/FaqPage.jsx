import FaqItem from '../components/FaqItem';

const faqs = [
  {
    question: "What is Red Hat Academy?",
    answer: "Red Hat Academy is an open source curriculum designed for academic institutions to help students gain industry-relevant skills. It provides access to Red Hat training materials, curriculum, and certification exams at academic prices."
  },
  {
    question: "Who can join the Red Hat Academy at IIPS?",
    answer: "The program is open to all currently enrolled students of IIPS, DAVV. Some courses may have prerequisites which will be mentioned in the course details."
  },
  {
    question: "Are there any fees for the courses?",
    answer: "While the training is provided at no additional cost to IIPS students, certification exams may have fees (with student discounts available)."
  },
  {
    question: "How do I get Red Hat certified?",
    answer: "After completing the training, you can register for the respective certification exam. Our academy coordinator will guide you through the process."
  },
  {
    question: "What certifications are available through the academy?",
    answer: "We offer preparation for RHCSA (Red Hat Certified System Administrator), RHCE (Red Hat Certified Engineer), and other Red Hat certifications."
  }
];

const Faq = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Frequently Asked Questions</h1>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Find answers to common questions about our Red Hat Academy
        </p>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            If you didn't find what you were looking for, feel free to contact our academy coordinator.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faq;