import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Code, Download, Eye, ChevronRight } from 'lucide-react';
import { programs, programsByCategory } from '../data/programs';

const Programs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'java' | 'python' | 'embedded' | 'data-science'>('java');
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Handle hash-based navigation
    const hash = window.location.hash.slice(1) as 'java' | 'python' | 'embedded' | 'data-science';
    if (hash && programsByCategory[hash]) {
      setActiveCategory(hash);
    }
  }, []);

  const categories = [
    { id: 'java' as const, name: 'Java Programs', icon: '☕', color: 'from-orange-600 to-red-600' },
    { id: 'python' as const, name: 'Python Programs', icon: '🐍', color: 'from-blue-600 to-green-600' },
    { id: 'embedded' as const, name: 'Embedded Projects', icon: '🔌', color: 'from-purple-600 to-blue-600' },
    { id: 'data-science' as const, name: 'Data Science Projects', icon: '📊', color: 'from-teal-600 to-blue-600' }
  ];

  const currentPrograms = programsByCategory[activeCategory];

  const handleViewCourses = () => {
    navigate('/courses');
  };

  const handleGetFreeDemo = () => {
    navigate('/contact');
  };

  return (
    <>
      <Helmet>
        <title>Programs - Echo Brains Learning and Placement Center</title>
        <meta
          name="description"
          content="Explore our comprehensive collection of programming projects including Java, Python, Embedded Systems, and Data Science with downloadable source code and detailed explanations."
        />
        <meta name="keywords" content="programming projects, java programs, python programs, embedded projects, data science projects, source code download" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Programming <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Explore our collection of real-world projects across different technologies with complete source code and documentation
          </p>
          <div className="flex items-center justify-center space-x-8 text-blue-200">
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5" />
              <span>Real-world Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Free Downloads</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-5 h-5" />
              <span>Code Preview</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <p className="text-lg text-gray-600">
              Practical projects designed to enhance your programming skills
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 flex-1">
                      {program.title}
                    </h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${
                      categories.find(c => c.id === activeCategory)?.color
                    }`}>
                      {categories.find(c => c.id === activeCategory)?.name.replace(' Programs', '').replace(' Projects', '')}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Code Preview */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Code Preview
                      </h4>
                      <button
                        onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        <span>{selectedProgram === program.id ? 'Hide' : 'Show'} Code</span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                          selectedProgram === program.id ? 'rotate-90' : ''
                        }`} />
                      </button>
                    </div>

                    <div className={`bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedProgram === program.id ? 'max-h-96' : 'max-h-20'
                    }`}>
                      <div className="p-4">
                        <pre className={`text-sm text-gray-300 overflow-x-auto ${
                          selectedProgram === program.id ? '' : 'overflow-hidden'
                        }`}>
                          <code>{selectedProgram === program.id ? program.code : program.code.slice(0, 150) + '...'}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Full Code</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Programs Stand Out?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each project is carefully crafted to provide hands-on learning experience with industry-standard practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Production-Ready Code</h3>
              <p className="text-gray-600">
                All projects follow industry best practices with clean, well-documented, and maintainable code.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-purple-50 hover:bg-purple-100 transition-all duration-300">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Source Code</h3>
              <p className="text-gray-600">
                Download complete project files including source code, documentation, and setup instructions.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-teal-50 hover:bg-teal-100 transition-all duration-300">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Step-by-Step Guide</h3>
              <p className="text-gray-600">
                Each project comes with detailed explanations and implementation guides for better understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Build These Projects?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Enroll in our courses and learn to build these projects from scratch with expert guidance
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={handleViewCourses}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              View Courses
            </button>
            <button 
              onClick={handleGetFreeDemo}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105"
            >
              Get Free Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;