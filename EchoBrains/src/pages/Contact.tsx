import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  };

  const courses = [
    'Java Full Stack',
    'Python Full Stack',
    'Embedded Systems',
    'MySQL Database',
    'Oracle Database',
    'MongoDB',
    'Data Science'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Echo Brains Learning and Placement Center</title>
        <meta
          name="description"
          content="Get in touch with Echo Brains Learning and Placement Center. Contact us for course inquiries, placement support, and career guidance. Located in Bangalore with WhatsApp support."
        />
        <meta name="keywords" content="contact echo brains, training institute bangalore, course inquiry, placement center contact, career guidance" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-teal-400">Touch</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Ready to start your journey? Contact us today for personalized guidance and course information
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                      Course Interest
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your career goals and how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        No. 75, 4th Floor, 9th Cross, 16th Main,<br />
                        Tavarekere Main Rd, BTM 1st Stage,<br />
                        Bengaluru, Karnataka 560027,India<br />
                        
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+919900007504" className="hover:text-blue-600 transition-colors duration-200">
                          +91-9900007504
                        </a><br />
                        <a href="tel:+919900007503" className="hover:text-blue-600 transition-colors duration-200">
                          +91-9900007503
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@echobrains.com" className="hover:text-blue-600 transition-colors duration-200">
                          info@echobrains.in
                        </a><br />
                        <a href="mailto:admissions@echobrains.com" className="hover:text-blue-600 transition-colors duration-200">
                          admissions@echobrains.in
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 7:00 PM<br />
                        Saturday: 9:00 AM - 6:00 PM
                      
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Connect</h2>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919900007503"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-all duration-200 flex items-center space-x-3 hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">Chat on WhatsApp</div>
                      <div className="text-sm text-green-100">Get instant support</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@echobrains.in"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-all duration-200 flex items-center space-x-3 hover:scale-[1.02]"
                  >
                    <Mail className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">Send Email</div>
                      <div className="text-sm text-blue-100">Detailed inquiries</div>
                    </div>
                  </a>

                  <a
                    href="tel:+919900007503"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-lg transition-all duration-200 flex items-center space-x-3 hover:scale-[1.02]"
                  >
                    <Phone className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">Call Now</div>
                      <div className="text-sm text-teal-100">Speak with counselor</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">Visit our campus in the heart of Bangalore's tech district</p>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
               // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.61123!3d12.92151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzQwLjQiTiA3N8KwMzYnMzkuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0112966755254!2d77.6105181!3d12.9201404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b65e53a077%3A0xb6de64ac94cf0447!2sEcho%20Brains%20Technologies%20Private%20Limited%20%7C%7C%20Java%20Full%20Stack%20Training%20Institute%20%7C%20Software%20Testing%20%7C%20Embedded%20%26%20Automotive!5e0!3m2!1sen!2sin!4v1719224529000!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Echo Brains Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;