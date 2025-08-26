import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Star, MapPin, Calendar, TrendingUp, Award, Users, CheckCircle } from 'lucide-react';
import { placedStudents, companyPartners } from '../data/placements';

const Placement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('students');
  const navigate = useNavigate();

  const testimonials = [
    {
      id: '1',
      name: 'G SREENIVASULU',
      company: 'Mirafra Technologies',
      course: 'EMBEDDED SYSTEMS',
      rating: 5,
      text: "I'm delighted with my decision to choose Echobrains for embedded systems training. The instructors are outstanding, providing top-notch support and guidance. The training is of exceptional quality, with up-to-date content and invaluable practical experience. Plus, their placement assistance helped me land a job quickly. I highly recommend Echobrains!",
      image: '/images/test-01.png'
    },
    {
      id: '2',
      name: 'M.Meghashree',
      company: 'ERBrains',
      course: 'data science',
      rating: 5,
      text: '“Excellent training institute with knowledgeable instructors and a practical, well-structured curriculum. The supportive environment made learning enjoyable and effective. Highly recommended for anyone looking to upgrade their skills! The course content is up-to-date with industry standards, and the practical exposure is invaluable. Thanks to their placement assistance, I secured a job within a short period of time. Plus, their cost-effective fee structure makes it accessible to all.”',
      image: '/images/test-01.png'
    },
    {
      id: '3',
      name: 'Narendra',
      company: 'Wipro',
      course: 'EMBEDDED SYSTEMS',
      rating: 5,
      text: '“I\'m so glad I chose Echobrains for Embedded Training the instructors are phenomenal and provide top-notch support and guidance. The course content is comprehensive and covers the latest industry topics. Thanks to their placement assistance, I landed a great job shortly after completing the course. Best decision ever!”',
      image: '/images/test-01.png'
    },
    {
      id: '4',
      name: 'Sohit',
      company: 'Unisys',
      course: 'Java Full Stack',
      rating: 5,
      text: '“Echobrains is an excellent training institute with knowledgeable instructors and a practical, well-structured curriculum. The supportive environment made learning enjoyable and effective. Highly recommended for anyone looking to upgrade their skills! The course content is up-to-date with industry standards, and the practical exposure is invaluable. Thanks to their placement assistance, I secured a job within a short period of time. Plus, their cost-effective fee structure makes it accessible to all.”',
      image: '/images/test-01.png'
    },
    {
      id: '5',
      name: 'shylish.SD',
      company: 'L&T',
      course: 'Java Full Stack',
      rating: 5,
      text: '“Hello, I\'m Shylesh SD. Introduced to Echo Brains through a friend, with 2 years of experience since graduating in 2019. Their training center provides a structured learning approach, empowering software developers like me with hands-on skills and efficient collaboration methods, paving the way for promising placement opportunities.”',
      image: '/images/test-01.png'
    },
    {
      id: '6',
      name: 'Thanvitha',
      company: 'Tech Mahindra',
      course: 'Java Full Stack',
      rating: 5,
      text: '"I\'m very much grateful to choose Echobrains for Java full stack training. Our training institute is dedicated to empowering individuals with the skills and knowledge needed to secure fulfilling careers. With expert instructors, hands-on learning, and a focus on industry-relevant skills, and with good placement assistance, which help me to grab the job. I highly recommend Echobrains!"',
      image: '/images/test-01.png'
    },
    {
      id: '7',
      name: 'soujanya y',
      company: 'Tata Elxsi',
      course: 'Embedded Systems',
      rating: 5,
      text: "Echobrains' Embedded and Automotive course exceeded my expectations! The quality of training is unparalleled. The course content is up-to-date with industry standards, and the practical exposure is invaluable. Highly recommend!",
      image: '/images/test-01.png'
    },
    {
      id: '8',
      name: 'G Nagomi ',
      company: 'Wimate Technologies',
      course: 'Data Science',
      rating: 5,
      text: "I joined the Data Science course at Echo Brains and got placed at Wimate. The training was clear and practical — from real projects to mock interviews and personal guidance. It really boosted my confidence.Grateful to Echo Brains for helping me kickstart my tech career. Highly recommend it!",
      image: '/images/test-01.png'
    },
    {
      id: '9',
      name: 'Sumanth S',
      company: ' Wimate Technologies',
      course: 'Data Science',
      rating: 5,
      text: "I’m thrilled to share that I have been placed at Wimate Technologies as a Trainee Engineer!A big thank you to EchoBrains for being the driving force behind this achievement. The training provided was not just technical but also career-focused, helping me build confidence, improve my skills. If you're looking to kickstart your career with the right skills and real opportunities, I highly recommend EchoBrains!",
      image: '/images/test-01.png'
    }
  ];

  const placementSupport = [
    {
      icon: Users,
      title: 'Resume Building',
      description: 'Professional resume preparation with industry-specific templates and expert review'
    },
    {
      icon: Award,
      title: 'Interview Preparation',
      description: 'Mock interviews, technical rounds practice, and soft skills development'
    },
    {
      icon: TrendingUp,
      title: 'Career Guidance',
      description: 'One-on-one career counseling and job market insights'
    },
    {
      icon: CheckCircle,
      title: 'Job Referrals',
      description: 'Direct referrals to partner companies and exclusive job opportunities'
    }
  ];

  const handleStartJourney = () => {
    navigate('/courses');
  };

  const handleTalkToCounselor = () => {
    navigate('/contact');
  };

  return (
    <>
      <Helmet>
        <title>Placement - Echo Brains Learning and Placement Center</title>
        <meta
          name="description"
          content="View our successful placement record with 500+ students placed in top companies like TCS, Infosys, Wipro. 95% placement success rate with comprehensive career support."
        />
        <meta name="keywords" content="placement support, job placement, career counseling, resume building, interview preparation, company partners" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Placement <span className="text-green-400">Success</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Join hundreds of successful professionals who transformed their careers with our comprehensive placement support
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">200+</div>
              <div className="text-blue-200">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-blue-200">Company Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">12 LPA</div>
              <div className="text-blue-200">Highest Package</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center space-x-8">
            <button
              onClick={() => setActiveTab('students')}
              className={`px-6 py-3 font-semibold rounded-lg transition-all duration-200 ${
                activeTab === 'students'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Placed Students
            </button>
            <button
              onClick={() => setActiveTab('companies')}
              className={`px-6 py-3 font-semibold rounded-lg transition-all duration-200 ${
                activeTab === 'companies'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Company Partners
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-6 py-3 font-semibold rounded-lg transition-all duration-200 ${
                activeTab === 'testimonials'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Testimonials
            </button>
          </div>
        </div>
      </section>

      {/* Placed Students */}
      {activeTab === 'students' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Meet our alumni who are now working in top companies across the industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {placedStudents.map((student) => (
                <div
                  key={student.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {student.package}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {student.name}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Award className="w-4 h-4 mr-2 text-blue-600" />
                        <span>{student.course}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                        <span>{student.company}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                        <span>{student.year}</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Package</div>
                      <div className="text-lg font-bold text-green-600">{student.package}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Company Partners */}
      {activeTab === 'companies' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Hiring Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We have partnered with leading companies to provide our students with the best career opportunities
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* {companyPartners.map((company) => (
                <div
                  key={company.id}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg mb-3 flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-200">
                      <span className="text-lg font-bold text-gray-700 group-hover:text-blue-600">
                        {company.name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      {company.name}
                    </div>
                  </div> 
                </div>
              ))} */}
              {companyPartners.map((partner) => (
                   <img 
                        key={partner.id}
                        src={partner.logo}
                        alt={partner.name}
                        className="h-30 object-contain mx-6 my-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    />
              ))}

            </div>

            {/* Placement Support Services */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Our Placement Support Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {placementSupport.map((service, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {activeTab === 'testimonials' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Students Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hear directly from our successful alumni about their journey with Echo Brains
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <div className="text-gray-600 text-sm">
                        {testimonial.course} • {testimonial.company}
                      </div>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Career?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join our proven placement program and take the first step towards your dream job
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={handleStartJourney}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Start Your Journey
            </button>
            <button 
              onClick={handleTalkToCounselor}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105"
            >
              Talk to Counselor
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Placement;