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
    image: '/images/test-04.png'
  },
  {
    id: '2',
    name: 'shylish.SD',
    course: 'Java Full Stack',
    company: 'L&T',
    year: 2024,
    package: '10.5 LPA',
   // image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg'
    image: '/images/test-02.png'
  },
  {
    id: '3',
    name: 'Delip Kumar',
    course: 'Java Full Stack',
    company: 'Capgemini',
    year: 2024,
    package: '12 LPA',
   // image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
    image: '/images/test-01.png'
  },
  {
    id: '4',
    name: 'G Sreenivasulu ',
    course: 'Embedded Systems',
    company: 'Mirafra Technologies',
    year: 2024,
    package: '4.5 LPA',
    // image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg'
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Transparent_1x1.png'
  },
  {
    id: '5',
    name: 'M.Meghashree',
    course: 'Data Science',
    company: 'ERBrains',
    year: 2024,
    package: '3.8 LPA',
    // image: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg'
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/1x1.png'
  },
  {
    id: '6',
    name: 'Narendra',
    course: 'Embedded Systems',
    company: 'Unicharm',
    year: 2024,
    package: '4 LPA',
    // image: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg'
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/1x1.png'
  },
  {
    id: '7',
    name: 'Thanvitha',
    course: 'Java Full Stack',
    company: 'Tech Mahindra',
    year: 2024,
    package: '3.8 LPA',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/1x1.png'
  },
  {
    id: '8',
    name: 'Soujanya y',
    course: 'Embedded Systems',
    company: 'Tata Elxsi',
    year: 2024,
    package: '4 LPA',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/1x1.png'
  },
  {
    id: '9',
    name: 'G Nagomi',
    course: 'Data Science',
    company: 'Wilmate Technologies',
    year: 2024,
    package: '5 LPA',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/1x1.png'
  },
  {
    id: '10',
    name: 'Sumanth S',
    course: 'Data Science',
    company: 'Wilmate Technologies',
    year: 2024,
    package: '4.5 LPA',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/1x1.png'
  
  },
  
];

export const companyPartners: CompanyPartner[] = [
  {
    id: '1',
    name: 'capgemini',
    //logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_Consultancy_Services_Logo.svg'
    logo: '/images/cl-03.jpg'
  },
  {
    id: '2',
    name: 'l&t',
    //logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Infosys_logo.svg'
    logo: '/images/cl-01.jpg'
  },
  {
    id: '3',
    name: 'Dextris',
   // logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Wipro_Primary_Logo_Color_RGB.svg'
    logo: '/images/cl-16.jpg'
  },
  {
    id: '4',
    name: 'Tata motors',
   // logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/HCL_Technologies_Logo.svg'
    logo: '/images/cl-05.jpg'
  },
  {
    id: '5',
    name: 'Tech Mahindra',
   // logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Cognizant_logo_2022.svg'
    logo: '/images/cl-04.jpg'
  },
  {
    id: '6',
    name: 'Accord',
   // logo: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Accenture.svg'
    logo: '/images/cl-13.jpg'
  },
  {
    id:'7',
    name:'luxoft',
    logo:'/images/cl-11.jpg'
  },
  {
    id:'8',
    name:'musictribe',
    logo:'/images/cl-15.jpg'
  },
  {
    id:'9',
    name:'veoneer',
    logo:'/images/cl-14.jpg'
  },
  {
    id:'10',
    name:'mercedes benz',
    logo:'/images/cl-08.jpg'
  },
  {
    id:'11',
    name:'volvo',
    logo:'/images/cl-07.jpg'
  },
  {
    id:'12',
    name:'infineon',
    logo:'/images/cl-10.jpg'
  },
  {
    id:'13',
    name:'university of petroleum and energy studies',
    logo:'/images/cl-12.jpg'
  },
  {
    id:'14',
    name:'unisys',
    logo:'/images/cl-09.jpg'
  },
  {
    id: '15',
    name: 'HCL Technologies',
    logo: '/images/cl-06.jpg'
  },
  {
    id: '16',
    name: 'Cognizant',
    logo: '/images/cl-02.jpg'
  },
 
];
