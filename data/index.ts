export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client satisfaction and client collaboration. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "my Tool Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "An Aspiring Data Scientist and a Machine Learning Enthusiast",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently deepening my skills in Machine Learning, with an emphasis on model development, evaluation, and practical deployment.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
   {
    id: 1,
    title: "End-to-End Hospital Analysis Dashboard",
    des: "A comprehensive Dashboard designed to provide clear, actionable insights across five key areas: Overview, Patient, Doctor, Hospital, and Finance. This dashboard brings hospital data to life for better decision-making.",
    img: "/BI_1.png",
    iconLists: ["/powerBI.png", "sql.svg"],
    link: "https://t.ly/oMmYp",
  },
  {
    id: 2,
    title: "Fully Interactive Mobile Sales Dashboard ",
    des: "Built in Power BI to transform complex sales data into clear, actionable insights. It covers sales performance, top brands/models, regional demand, seasonal trends, payment behavior, inventory flow, and customer feedback.",
    img: "/BI_2.png",
    iconLists: ["/powerBI.png", "sql.svg"
    ],
    link: "https://t.ly/fK5Mp",
  },
     {
    id: 5,
    title: "🫀 Heart Disease Risk Predictor - ML",
    des: "A Machine learning web app built using Streamlit that predicts the risk of heart disease based on a user's health metrics. This project combines data preprocessing, model training, and deployment in one end-to-end solution.",
    img: "/ML_1.png",
    iconLists: ["/python.svg"],
    link: "https://github.com/rishiigupta04/heart_health_prediction",
  },
   
  {
    id: 3,
    title: "Sales Analysis Dashboard - MS Excel",
    des: "Sales Dashboard using Excel tools like Power Query, PivotTables, Slicers, and Charts. It highlights category-wise sales, customer growth, profit trends, top-performing states, and monthly sales fluctuations, all at a glance.",
    img: "/excel1.png",
    iconLists: [
      "excel.svg"
    ],
    link: "https://t.ly/I_D0g",
  },

  {
    id: 10,
    title: "Retro King - Play Classic Retro Games",
    des: "Missing the golden age of gaming? I've built a full-stack modern web platform that lets you relive those classic moments right in your browser! This is a web-based retro game emulation platform built with Next.js + Prisma.",
    img: "/p10.jpeg",
    iconLists: [
      "/next.svg",
      "/prisma.svg",
      "/postgresql.svg",
      "/tail.svg",
      "/vercel.jpg",
    ],
    link: "https://retro-king.vercel.app/",
  },
  {
    id: 9,
    title: "Trimrr - URL Shortener",
    des: "A Fully responsive Full Stack URL Shortener Web-App with React JS, Tailwind CSS, Supabase, and Shadcn UI. User authentication, URL shortening and redirection with custom links, detailed analytics, QR code generation, and a visually appealing dashboard.",
    img: "/p9.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/supabase-logo.jpg",
      "vite.svg",
      "vercel.jpg",
    ],
    link: "https://trimrrr.vercel.app/",
  },



 
  {
    id: 4,
    title: "DuoStudio – A Frontend Website ",
    des: "DuoStudio is a frontend website made purely in HTML, CSS, and JavaScript - powered by Javascript animation libraries such as GSAP and LocomotiveJS for smooth-scrolling effects.",
    img: "/p4.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/three.svg", "/gsap.svg"],
    link: "https://rishiigupta04.github.io/duostudio/",
  },
  {
    id: 6,
    title: "SunDown - A Frontend Website ",
    des: "Cloned the Frontend of the original website incorporating libraries such as GSAP and LocomotiveJS for smooth scrolling animations and SwiperJS for image slider, for seamless user experience.",
    img: "/p6.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/gsap.svg"],
    link: "https://rishiigupta04.github.io/sundown_clone/",
  },
  {
    id: 8,
    title: "OOCHI - A Frontend Website ",
    des: "A Frontend Website made using React + Tailwind CSS with the help of Vite. Libraries used - Framer Motion and Locomotive for smooth scrolling and animations!",
    img: "/p8.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/vite.svg",
      "/vercel.jpg",
      "/gsap.svg",
    ],
    link: "https://oochi.vercel.app/",
  },
  // {
  //   id: 7,
  //   title: "Very Own Portfolio Website ",
  //   des: "A portfolio website I made for my personal usecase with Next.js, Tailwind, and Typescript. Fully responsive and is powered by the powerful library - Aceternity UI. Learned to incorporate Sentry for error tracking and user feedback.",
  //   img: "/p7.png",
  //   iconLists: [
  //     "/next.svg",
  //     "/tail.svg",
  //     "/ts.svg",
  //     "/sentry.svg",
  //     "vite.svg",
  //     "vercel.jpg",
  //   ],
  //   link: "https://rishi-portfolio-website.vercel.app/",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Rishi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rishi's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rishi is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Rishi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rishi's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rishi is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Rishi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rishi's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rishi is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Rishi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rishi's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rishi is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Rishi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rishi's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rishi is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rishirajgupta04/",
  },
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/rishiigupta04",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/rishiigupta04?t=UgmSdTUvplYuCE9MtelQDg&s=09",
  },
];
