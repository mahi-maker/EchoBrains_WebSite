export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  mode: string;
  overview: string;
  syllabus: string;
  image: string;
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: 'java-fullstack',
    title: 'Java Full Stack',
    description: 'Master Java backend and modern frontend technologies',
    duration: '6 months',
    mode: 'Online / Offline',
    overview: 'Comprehensive Java development program covering Spring Boot, React, and database integration with hands-on projects.',
    syllabus: '/syllabus/java-fullstack.pdf',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
    featured: true
  },
  {
    id: 'python-fullstack',
    title: 'Python Full Stack',
    description: 'Build scalable web applications with Python and modern frameworks',
    duration: '5 months',
    mode: 'Online / Offline',
    overview: 'Learn Django/Flask, React, PostgreSQL, and deployment strategies for full-stack Python development.',
    syllabus: '/syllabus/python-fullstack.pdf',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    featured: true
  },
  {
    id: 'embedded-systems',
    title: 'Embedded Systems',
    description: 'Design and program embedded hardware solutions',
    duration: '4 months',
    mode: 'Offline',
    overview: 'Master microcontroller programming, IoT development, and hardware interfacing with Arduino and Raspberry Pi.',
    syllabus: '/syllabus/embedded-systems.pdf',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
    featured: true
  },
  {
    id: 'mysql',
    title: 'MySQL Database',
    description: 'Master relational database design and optimization',
    duration: '2 months',
    mode: 'Online / Offline',
    overview: 'Learn advanced SQL, database design, performance tuning, and administration of MySQL databases.',
    syllabus: '/syllabus/mysql.pdf',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    featured: true
  },
  {
    id: 'oracle',
    title: 'Oracle Database',
    description: 'Enterprise database administration and development',
    duration: '3 months',
    mode: 'Online / Offline',
    overview: 'Comprehensive Oracle database training including PL/SQL, performance tuning, and enterprise features.',
    syllabus: '/syllabus/oracle.pdf',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
    featured: true
  },
  {
    id: 'mongodb',
    title: 'MongoDB',
    description: 'NoSQL database development and administration',
    duration: '2 months',
    mode: 'Online / Offline',
    overview: 'Learn MongoDB fundamentals, aggregation framework, indexing, and integration with modern applications.',
    syllabus: '/syllabus/mongodb.pdf',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg'
  },
  {
    id: 'data-science',
    title: 'Data Science Specialist',
    description: 'Analyze data and build machine learning models',
    duration: '6 months',
    mode: 'Online / Offline',
    overview: 'Complete data science program covering Python, statistics, machine learning, and data visualization.',
    syllabus: '/syllabus/data-science.pdf',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    featured: true
  }
];