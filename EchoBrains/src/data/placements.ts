export interface PlacedStudent {
  id: string;
  name: string;
  course: string;
  company: string;
  year: number;
  package: string;
  image: string;
}

export interface CompanyPartner {
  id: string;
  name: string;
  logo: string;
}

export const placedStudents: PlacedStudent[] = [
  {
    id: '1',
    name: 'Sohit',
    course: 'Java Full Stack',
    company: 'Unisys',
    year: 2024,
    package: '6.5 LPA',
   // image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    image: 'https://www.echobrains.in/images/test-04.png'
  },
  {
    id: '2',
    name: 'shylish.SD',
    course: 'Java Full Stack',
    company: 'L&T',
    year: 2024,
    package: '10.5 LPA',
   // image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg'
    image: 'https://www.echobrains.in/images/test-02.png'
  },
  {
    id: '3',
    name: 'Delip Kumar',
    course: 'Java Full Stack',
    company: 'Capgemini',
    year: 2024,
    package: '12 LPA',
   // image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
    image: 'https://www.echobrains.in/images/test-01.png'
  },
  {
    id: '4',
    name: 'Sneha Patel',
    course: 'Embedded Systems',
    company: 'HCL Technologies',
    year: 2024,
    package: '6.8 LPA',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg'
  },
  {
    id: '5',
    name: 'Vikash Yadav',
    course: 'Java Full Stack',
    company: 'Cognizant',
    year: 2024,
    package: '7.5 LPA',
    image: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg'
  },
  {
    id: '6',
    name: 'Anjali Gupta',
    course: 'Python Full Stack',
    company: 'Accenture',
    year: 2024,
    package: '8.0 LPA',
    image: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg'
  }
];

export const companyPartners: CompanyPartner[] = [
  {
    id: '1',
    name: 'capgemini',
    //logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_Consultancy_Services_Logo.svg'
    logo: 'https://www.echobrains.in/images/cl-03.jpg'
  },
  {
    id: '2',
    name: 'l&t',
    //logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Infosys_logo.svg'
    logo: 'https://www.echobrains.in/images/cl-01.jpg'
  },
  {
    id: '3',
    name: 'Dextris',
   // logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Wipro_Primary_Logo_Color_RGB.svg'
    logo: 'https://www.echobrains.in/images/cl-16.jpg'
  },
  {
    id: '4',
    name: 'Tata motors',
   // logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/HCL_Technologies_Logo.svg'
    logo: 'https://www.echobrains.in/images/cl-05.jpg'
  },
  {
    id: '5',
    name: 'Tech Mahindra',
   // logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Cognizant_logo_2022.svg'
    logo: 'https://www.echobrains.in/images/cl-04.jpg'
  },
  {
    id: '6',
    name: 'Accord',
   // logo: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Accenture.svg'
    logo: 'https://www.echobrains.in/images/cl-13.jpg'
  },
  {
    id:'7',
    name:'luxoft',
    logo:'https://www.echobrains.in/images/cl-11.jpg'
  },
  {
    id:'8',
    name:'musictribe',
    logo:'https://www.echobrains.in/images/cl-15.jpg'
  },
  {
    id:'9',
    name:'veoneer',
    logo:'https://www.echobrains.in/images/cl-14.jpg'
  },
  {
    id:'10',
    name:'mercedes benz',
    logo:'https://www.echobrains.in/images/cl-08.jpg'
  },
  {
    id:'11',
    name:'volvo',
    logo:'https://www.echobrains.in/images/cl-07.jpg'
  },
  {
    id:'12',
    name:'infineon',
    logo:'https://www.echobrains.in/images/cl-10.jpg'
  },
];
