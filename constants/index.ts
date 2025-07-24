export const skillsSheet = [
  {
    id: '1',
    skill: 'Art and Design',
    img: '/icons/art.svg',
    desc: ['Art has been one of my most basic skills. As a young boy I would draw the cartoons I saw on TV. Slowly I honned this skills, growing from simple pencil cartoon drawings to detailed portrait drawings. I am currently working on my biro-pen drawings. This is not as easy as pencil work since there is little to no room for errors in the work I do, but I am very optimistic that I will be able to crack this frontier too.'],
    callToAction: 'If you would love to be drawn or would like to buy any of my pieces, my contacts are at the bottom. Reach me!!!',
    sampleWorks: [
      {
        id: 'image_01',
        imgUrl: '/images/art/image_01.jpg',
        alt: 'image_01'
      },
      {
        id: 'image_02',
        imgUrl: '/images/art/image_02.jpg',
        alt: 'image_02'
      },
      {
        id: 'image_03',
        imgUrl: '/images/art/image_03.jpg',
        alt: 'image_03'
      },
      {
        id: 'image_04',
        imgUrl: '/images/art/image_04.jpg',
        alt: 'image_04'
      },
      {
        id: 'image_05',
        imgUrl: '/images/art/image_05.jpg',
        alt: 'image_05'
      },
      {
        id: 'image_06',
        imgUrl: '/images/art/image_06.jpg',
        alt: 'image_06'
      },
      {
        id: 'image_07',
        imgUrl: '/images/art/image_07.jpg',
        alt: 'image_07'
      },
      {
        id: 'image_08',
        imgUrl: '/images/art/image_08.jpg',
        alt: 'image_08'
      },
      {
        id: 'image_09',
        imgUrl: '/images/art/image_09.jpg',
        alt: 'image_09'
      }
    ],
  },
  {
    id: '2',
    skill: 'Front-end Dev',
    img: '/icons/front.svg',
    desc: [
      'Hi',
      'I design and develop amazing frontend applications that are resposnsive in all devices. I have 3+ years in working with fontend technologies such as HTML, CSS, Javascript, React, TailwindCSS, among others. I also have the ability to design visually appealing designs using Figma, this is greatly fuelled by my background in art and design. I am also able to use ReactNative to develop mobile application interfaces that are cross-platform.',
    ],
    callToAction: 'In summary, whichever idea you have of either an app or website you want to make, I am your best option in bringing it to life. Give me a call or a whatsapp!!!',
    sampleWorks: [
      {
        id: 'front_01',
        imgUrl: '/images/web/madrinks_poa.png',
        alt: 'madrinks poa image',
        siteUrl: ''
      },
      {
        id: 'front_02',
        imgUrl: '/images/web/movie_appa.png',
        alt: 'movie app image',
        siteUrl: ''
      },
      {
        id: 'front_03',
        imgUrl: '/images/web/sted_fast.png',
        alt: 'sted fast image',
        siteUrl: ''
      },
      {
        id: 'front_04',
        imgUrl: '/images/web/stedy_run.png',
        alt: 'stedy run image',
        siteUrl: ''
      },
    ],
  },
  {
    id: '3',
    skill: 'Back-End Dev',
    img: '/icons/code.svg',
    desc: [
      'Every world-class website needs a mind. In the age of the AI evolution, we all want and app or website that not only gives us information but one that can give us a service, feedback and be able to interact with us.',
      'So.... I have skills in python, javascript and sql. Armed with these I am able to create robust and scalable backend systems to store, manage and manipulate data based on your preference.'
    ],
    callToAction: 'There is no need of worrying about what or how that app will come to life, bring it to me, I will make it both look good and work efficiently.',
    sampleWorks: [
      {
        id: 'back_01',
        imgUrl: '/images/web/madrinks_poa.png',
        alt: 'madrinks poa image',
        siteUrl: ''
      },
      {
        id: 'back_02',
        imgUrl: '/images/web/movie_appa.png',
        alt: 'movie app image',
        siteUrl: ''
      },
      {
        id: 'back_03',
        imgUrl: '/images/web/sted_fast.png',
        alt: 'sted fast image',
        siteUrl: ''
      },
      {
        id: 'back_04',
        imgUrl: '/images/web/stedy_run.png',
        alt: 'stedy run image',
        siteUrl: ''
      },
    ],
  },
  {
    id: '4',
    skill: 'Systems Engineering',
    img: '/icons/systems.svg',
    desc: [
      'Hi',
      'I know you are wondering what a system is and what system engineering is, so, lemme try and explain. A system is a collection of components, functions or mechanism arranged in a way such as to solve a particular problem that would otherwise take a lot of man-power, finances, resources or too many isolated mechanisms.',
      'System Engineering hence is the ability to break a problem into executable commands, mechanisms or functions that solve it in the fastest, best and most cost effective way.',
      'So, my background and an Electrical and Electronics Engineer, a Leader, a Sofware Developer and Artists equip me with both the analytical and creative mind to be able to find the best possible way to solve any problem I am presented with.'
    ],
    callToAction: "Don't sit on that great Idea, Talk to me!!!"
  },
  {
    id: '5',
    skill: 'Electrical Engineering',
    img: '/icons/electrical.svg',
    desc: [
      'I have a Bachelor of Science degree in Electrical and Electronics Engineering.',
      'Armed with this very powerful and interesting degree, I am able to design electrical systems and circuits. I am also skilled in working on the manufacturing, maintenance and building of both electrical and electronics systems and circuits. I am basically your one stop for anything electrical or technological.'
    ],
    callToAction: 'So, incase you need someone to take care of your "Current" issues. Give me a Call or WhatsApp.'
  },
  {
    id: '6',
    skill: 'Musical Things',
    img: '/icons/music.svg',
    desc: [
      'Music is Wow!!!',
      'I love every aspect of the musical proccess from the singing to production to performance to karaoke... I love it all',
      'I am a singer and songwriter. I also produce music for my friends and I love the performing arts.'
    ],
    callToAction: 'You are really welcome to my artistic universe. Call me!!! or WhatsApp!!!'
  }
]

export const worksLists = [
  {
    category: 'Website Development',
    title: 'Websites',
    data : [
      {
        id: '3124',
        title: 'Madrinks Poa Site',
        intro: 'A simple cocktails website featuring various drinks in a captivating and engaging way',
        img: '/madrinks_poa.png',
        siteUrl: 'https://drinkss.vercel.app/',
        gitUrl: 'https://github.com/R-Tedy/drinkss',
        stats: [
          'front-end using reactjs',
          'styling using tailwindcss',
          'components using shadcn',
          'animations using gsap'
        ]
      },
      {
        id: '6253',
        title: 'Movie Site',
        intro: 'A movie site showcasing trending movies and the latest movies.',
        img: '/movie_appa.png',
        siteUrl: 'https://movieappa.onrender.com',
        gitUrl: 'https://github.com/R-Tedy/MovieAppA',
        stats: [
          'front-end using nextjs',
          'styling with tailwind',
          'components using shadcn',
          'Database using Appwrite'
        ]
      },
      {
        id:'2311',
        title: 'StedFast',
        intro: 'This is a technological company website showcasing what services they have to offer and how to contact them',
        img: '/sted_fast.png',
        siteUrl: 'https://sted-fast.vercel.app/ ',
        gitUrl: 'https://github.com/R-Tedy/sted_fast',
        stats: [
          'front-end using nextjs',
          'styling using tailwindcss',
          'components using shadcn',
        ]
      },
      {
        id: '8476',
        title: 'StedyRun',
        intro: 'This is a tours site that showcases various hiking destinations and allows you to book a session with the tour guides.',
        img: '/stedy_run.png',
        siteUrl: 'https://stedyrun.vercel.app',
        gitUrl: 'https://github.com/R-Tedy/travel',
        stats: [
          'front-end using nextjs',
          'styling using tailwindcss',
          'components using shadcn',
        ]
      },
    ]
  }
  
]

export const workStages = [
  {
    number: 1,
    title: 'Book a Service',
    description: 'Jus book an appointment to discuss the project you would love my help with. I typically respond within 48hrs and set up a meeting to discuss the details.',
    image: '/icons/booking.svg'
  },
  {
    number: 2,
    title: 'Planning Meeting',
    description: 'This entails a virtual or physical meeting to discuss the details of your work. We will discuss details like pricing, timelines, project specifications and any other relevant data.',
    image: '/icons/planning.svg'
  },
  {
    number: 3,
    title: 'Design/Review Cycle',
    description: 'This phase involves designing and deciding on both the technical and visual compenonts of your project. This is a collaborative venture where I work with the client to bring thier visual to life. It entails constant communication with the client to correct and adjust the designs until a conclusion that is satisfactory to the client.',
    image: '/icons/design.svg'
  },
  {
    number: 4,
    title: 'Development/Testing Cycle',
    description: 'This phase entails the implimentation of the design into a working prototype and testing the prototype. I am thorough and I follow the industry standards while using the latest and most efficient technologies to build the prototype. The client receives regular updates on the progress.',
    image: '/icons/development.svg'
  },
  {
    number: 5,
    title: 'Project Completion/Delivery',
    description: 'On completion of the project and approval that it meets the clients desire, the final product is delivered.',
    image: '/icons/deliver.svg'
  },
  {
    number: 6,
    title: '1 Month Free Maintenance',
    description: 'I also provide 30days of free consultation and maintenance services incase of any issues with the product. I also provide training to the client on how to use the product.',
    image: '/icons/maintenance.svg'
  },
]

export const projectstatus = [
  {
    status: 'compelete',
    number: 13
  },
  {
    status: 'pending',
    number: 25
  },
  {
    status: 'incompelete',
    number: 120
  }
]

export const projectDetails = [
  {
    created_at: '12/07/2025',
    name: 'Roland Stedy',
    email: 'stedyroland@gamil.com',
    phone: '0759693618',
    service: 'Web Development',
  },
  {
    created_at: '13/07/2015',
    name: 'Augustine Stedy',
    email: 'augustinestedy@gmail.com',
    phone: '0798795610',
    service: 'Mobile app development',
  },
  {
    created_at: '14/07/2025',
    name: 'Jack Muts',
    email: 'jackmuts@gmail.com',
    phone: '0793612736',
    service: 'System development',
  }
]