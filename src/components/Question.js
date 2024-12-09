import { useState } from "react";

export default function QuestionPage() {
  // FAQ data
  const faqs = [
    {
      question: "How do I create an account on Skill Careers?",
      answer:
        "Click on the 'Sign Up' button on the homepage, provide your email address, create a password, and fill in your basic details. You can also sign up using your Google or LinkedIn account for quicker registration.",
    },
    {
      question: "How can I apply for jobs on Skill Careers?",
      answer:
        "Browse available job listings, select the job that matches your profile, and follow the application instructions provided.",
    },
    {
      question: "Is there a cost to use Skill Careers as a job seeker?",
      answer: "No, using Skill Careers is completely free for job seekers.",
    },
    {
      question: "How do I update my profile or resume?",
      answer:
        "Navigate to your profile page, click on 'Edit Profile', and update your information including your resume.",
    },
    {
      question: "Can recruiters contact me directly through Skill Careers?",
      answer:
        "Yes, recruiters can send you direct messages through the platform's messaging feature if your profile matches their requirements.",
    },
    {
      question: "What kind of jobs are available on Skill Careers?",
      answer:
        "You can find a wide range of jobs including full-time, part-time, freelance, and remote opportunities across various industries.",
    },
    {
      question: "How do I post a job as a recruiter?",
      answer:
        "After logging in as a recruiter, go to the 'Post a Job' section, fill out the job details, and publish your listing.",
    },
    {
      question: "Are there any tools to help me stand out as a job seeker?",
      answer:
        "Yes, we provide tools like resume builders, profile optimization tips, and skill assessments to enhance your job search.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 md:p-6">
      <div className="container mx-auto px-3">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg md:text-xl font-bold p-24 text-[#001571]">
            FAQs
          </h2>
          <a
            href="#"
            className="text-[#001571] p-24 text-lg font-bold hover:underline"
          >
            View All
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-4 md:p-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full flex justify-between items-center py-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-base md:text-lg font-bold text-black">
                {faq.question}
              </span>
              <span className="text-gray-500">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {activeIndex === index && (
              <p className="text-sm md:text-base text-gray-600 pb-4">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
