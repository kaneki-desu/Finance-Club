// import React, { useEffect, useState } from "react";
// import eventData from "../assets/eventData.json";
// import ParticlesComponent from "../Components/Particle";
// import useTheme from "../contexts/theme";

// import defaultImage from "../assets/default.gif";

// function Events() {
//   const [events, setEvents] = useState([]);
//   const { themeMode } = useTheme();

//   useEffect(() => {
//     setEvents(eventData.events);
//   }, []);

//   return (
//     <div className="relative min-h-screen">
//       <div className="fixed inset-0 -z-0">
//         <ParticlesComponent id="particles-bg" />
//       </div>

//       <div className={themeMode === "light" ? "bg-white text-gray-800" : "bg-black text-gray-200"}>
//         <section className="text-center py-5">
//           <h1 className="text-3xl font-bold">Upcoming Events</h1>
//         </section>

//         {events.map((category, index) => (
//           <section key={index} className="py-10">
//             <div className="container mx-auto px-4">
//               <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {category.items.map((item, idx) => (
//                  <div
//                  key={idx}
//                  className={`relative group border rounded-lg shadow-md overflow-hidden ${
//                    themeMode === "light" ? "bg-white" : "bg-gray-700/[0.5] backdrop-blur-sm"
//                  } hover:shadow-xl transition-transform transform hover:scale-105`}
//                  onClick={() => {
//                    window.location.href = `/event/${item.id}`; 
//                  }}
//                >
//                  <div className="h-40 bg-gray-300 dark:bg-gray-600">
//                    <img
//                      src={item.image || defaultImage}
//                      alt={item.name}
//                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
//                    />
//                  </div>
               
//                  <div className="p-6">
//                    <h3 className="text-xl font-bold text-teal-500">{item.name}</h3>
//                    <p
//       className="mt-2 text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//     >
//       {item.description}
//     </p>
//                  </div>
               
//                  <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-20 transition-opacity"></div>
//                </div>
               
//                 ))}
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Events;



// import React from "react";

// const events = [
//   {
//     title: "UI/Web & Graph design for teenagers 11-17 years old",
//     startDate: "04.11.2022",
//     imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340103/OrientationRoadmap_pcncdz.jpg",
//   },
//   {
//     title: "UX/UI Web-Design + Mobile Design",
//     startDate: "04.11.2022",
//     imageUrl: "https://via.placeholder.com/300",
//   },
// ];

// const speakerSessions = [
//   {
//     title: "Annual package 'Product+UX/UI+Graph designer 2022'",
//     startDate: "04.11.2022",
//     imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340103/SpeakerSession_usmppk.jpg",
//   },
//   {
//     title: "Motion Design",
//     startDate: "30.11.2022",
//     imageUrl: "https://via.placeholder.com/300",
//   },
// ];

// const competitions = [
//   {
//     title: "Graphic Design",
//     startDate: "04.11.2022",
//     imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340102/Competition2_h6pnre.jpg",
//   },
//   {
//     title: "Front-end development + jQuery + CMS",
//     startDate: null,
//     imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340103/Competition_poukrf.jpg",
//   },
//   {
//     title: "Digital Marketing",
//     startDate: null,
//     imageUrl: "https://via.placeholder.com/300",
//   },
//   {
//     title: "Interior Design",
//     startDate: "31.10.2022",
//     imageUrl: "https://via.placeholder.com/300",
//   },
// ];

// const CourseCard = ({ course }) => (
//   <div className="relative flex-1 min-w-[300px] max-w-[32%] bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105">
//     <a href="#" className="block p-6 relative overflow-hidden">
//       <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: `url(${course.imageUrl})` }}></div>
//       <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover rounded-t-2xl" />
//       <div className="absolute top-0 right-0 h-32 w-32 bg-yellow-500 rounded-full transform translate-x-1/2 -translate-y-1/2 transition-transform scale-100 hover:scale-[10]"></div>
//       <div className="relative z-10">
//         <div className="font-bold text-lg mb-4 text-white">{course.title}</div>
//         {course.startDate && (
//           <div className="text-sm text-white">
//             Start: <span className="font-bold text-yellow-400">{course.startDate}</span>
//           </div>
//         )}
//       </div>
//     </a>
//   </div>
// );

// const Events = () => (
//   <div className="w-full max-w-5xl mx-auto bg-black p-6">
//     <div className="flex flex-wrap justify-center gap-6 py-12">
//       <div className="w-full text-center mb-12">
//         <h2 className="text-3xl font-bold text-white">Events</h2>
//       </div>
//       {events.map((course, index) => (
//         <CourseCard key={index} course={course} />
//       ))}

//       <div className="w-full text-center my-12">
//         <h2 className="text-3xl font-bold text-white">Speaker Sessions</h2>
//       </div>
//       {speakerSessions.map((course, index) => (
//         <CourseCard key={index} course={course} />
//       ))}

//       <div className="w-full text-center my-12">
//         <h2 className="text-3xl font-bold text-white">Competitions</h2>
//       </div>
//       {competitions.map((course, index) => (
//         <CourseCard key={index} course={course} />
//       ))}
//     </div>
//   </div>
// );

// export default Events;



// import React from "react";

// const courses = [
//   {
//     title: "UI/Web & Graph design for teenagers 11-17 years old",
//     startDate: "04.11.2022",
//     imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738263740/Priyanshu1_firqak.jpg",
//   },
//   {
//     title: "UX/UI Web-Design + Mobile Design",
//     startDate: "04.11.2022",
//     imageUrl: "https://via.placeholder.com/300",
//   },
//   {
//     title: "Annual package 'Product+UX/UI+Graph designer 2022'",
//     startDate: "04.11.2022",
//     imageUrl: "https://via.placeholder.com/300",
//   },
//   {
//     title: "Graphic Design",
//     startDate: "04.11.2022",
//     imageUrl: "https://via.placeholder.com/300",
//   },
//   {
//     title: "Motion Design",
//     startDate: "30.11.2022",
//     imageUrl: "https://via.placeholder.com/300",
//   },
//   {
//     title: "Front-end development + jQuery + CMS",
//     startDate: null,
//     imageUrl: "https://via.placeholder.com/300",
//   },
//   {
//     title: "Digital Marketing",
//     startDate: null,
//     imageUrl: "https://via.placeholder.com/300",
//   },
//   {
//     title: "Interior Design",
//     startDate: "31.10.2022",
//     imageUrl: "https://via.placeholder.com/300",
//   },
// ];

// const Events = () => {
//   return (
//     <div className="w-full max-w-7xl mx-auto bg-black p-10">
//       <div className="flex flex-wrap justify-center gap-8 py-16">
//         {courses.map((course, index) => (
//           <div
//             key={index}
//             className="relative flex-1 min-w-[320px] max-w-[30%] bg-gray-900 text-white rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-110"
//           >
//             <a href="#" className="block p-8 relative overflow-hidden">
//               <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${course.imageUrl})` }}></div>
//               <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover rounded-t-3xl" />
//               <div className="absolute top-0 right-0 h-36 w-36 bg-yellow-500 rounded-full transform translate-x-1/2 -translate-y-1/2 transition-transform scale-100 hover:scale-[10]"></div>
//               <div className="relative z-10">
//                 <div className="font-bold text-xl mb-4 text-white">{course.title}</div>
//                 {course.startDate && (
//                   <div className="text-base text-white">
//                     Start: <span className="font-bold text-yellow-400">{course.startDate}</span>
//                   </div>
//                 )}
//               </div>
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Events;

// import React from "react";

// const events = [
//   {
//     title: "UI/Web & Graph design for teenagers 11-17 years old",
//     startDate: "04.11.2022",
//     imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340103/OrientationRoadmap_pcncdz.jpg",
//   },
//   {
//     title: "UX/UI Web-Design + Mobile Design",
//     startDate: "04.11.2022",
//     imageUrl: "https://via.placeholder.com/300",
//   },
// ];

// const speakerSessions = [
//   {
//     title: "Annual package 'Product+UX/UI+Graph designer 2022'",
//     startDate: "04.11.2022",
//     imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340103/SpeakerSession_usmppk.jpg",
//   },
//   {
//     title: "Motion Design",
//     startDate: "30.11.2022",
//     imageUrl: "https://via.placeholder.com/300",
//   },
// ];

// const competitions = [
//   {
//     title: "Graphic Design",
//     startDate: "04.11.2022",
//     imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340102/Competition2_h6pnre.jpg",
//   },
//   {
//     title: "Front-end development + jQuery + CMS",
//     startDate: null,
//     imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340103/Competition_poukrf.jpg",
//   },
//   {
//     title: "Digital Marketing",
//     startDate: null,
//     imageUrl: "https://via.placeholder.com/300",
//   },
//   {
//     title: "Interior Design",
//     startDate: "31.10.2022",
//     imageUrl: "https://via.placeholder.com/300",
//   },
// ];

// const CourseCard = ({ course }) => (
//   <div className="relative flex-1 min-w-[300px] max-w-[32%] bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 group">
//     <a href="#" className="block p-6 relative overflow-hidden">
//       <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: `url(${course.imageUrl})` }}></div>
//       <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover rounded-t-2xl" />
      
//       {/* Yellow Circle Animation */}
//       <div className="absolute top-0 right-0 h-32 w-32 bg-yellow-500 rounded-full transform translate-x-1/2 -translate-y-1/2 transition-transform scale-100 group-hover:scale-[10] z-0"></div>

//       {/* Hidden Text */}
//       <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 transform translate-y-8 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 z-10">
//         <div>
//           <div className="font-bold text-lg mb-4 text-white">{course.title}</div>
//           {course.startDate && (
//             <div className="text-sm text-white">
//               Start: <span className="font-bold text-yellow-400">{course.startDate}</span>
//             </div>
//           )}
//         </div>
//       </div>

//       {/*  (Initially Hidden) */}
//       <div className="absolute inset-0 flex items-center justify-center text-center opacity-100 transform translate-y-0 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-8 z-0">
//         <div className="text-lg font-semibold text-gray-500"></div>
//       </div>
//     </a>
//   </div>
// );

// const Events = () => (
//   <div className="w-full max-w-5xl mx-auto bg-black p-6">
//     <div className="flex flex-wrap justify-center gap-6 py-12">
//       <div className="w-full text-center mb-12">
//         <h2 className="text-3xl font-bold text-white">Events</h2>
//       </div>
//       {events.map((course, index) => (
//         <CourseCard key={index} course={course} />
//       ))}

//       <div className="w-full text-center my-12">
//         <h2 className="text-3xl font-bold text-white">Speaker Sessions</h2>
//       </div>
//       {speakerSessions.map((course, index) => (
//         <CourseCard key={index} course={course} />
//       ))}

//       <div className="w-full text-center my-12">
//         <h2 className="text-3xl font-bold text-white">Competitions</h2>
//       </div>
//       {competitions.map((course, index) => (
//         <CourseCard key={index} course={course} />
//       ))}
//     </div>
//   </div>
// );

// export default Events;



import React from "react";
import ParticleBackground from '../Components/Particle';
import { ThemeContext } from '../contexts/theme';
import {motion} from  'framer-motion';
import { fadeIn, StaggeredfadeIn } from "../Components/fadeInAnimation";



const upcomingEvents = [
  {
    title: "UI/Web & Graph design for teenagers 11-17 years old",
    startDate: "04.11.2022",
    imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340103/OrientationRoadmap_pcncdz.jpg",
  },
  {
    title: "Treasure Hunt: A finance-based problem-solving event encouraging teamwork, strategy, and quick thinking while enhancing financial knowledge.",
    startDate: "04.11.2022",
    imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340104/TreasureHunt_yyhcbr.jpg",
  },
];

const speakerSessions = [
  {
    title: "Devayukta Karva Session: Insights from Devayukta Karva on navigating volatile markets, emphasizing intellectual engagement and investment strategies.",
    startDate: "04.11.2022",
    imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340103/SpeakerSession_usmppk.jpg",
  },
  
];

const pastEvent = [
  {
    title: "Financial Quiz: A competitive quiz testing finance and investment knowledge, encouraging learning through challenging questions and quick responses.",
    startDate: null,
    imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340103/QuizCompetation_qyndfa.jpg",
  },
  {
    title: "Group Discussion: Participants discussed economic and financial issues, promoting teamwork, critical thinking, and communication on relevant industry topics",
    startDate: "31.10.2022",
    imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340103/GD_kaajws.jpg",
  },
  {
    title: "Trading Mania: A collaboration blending finance, technology, and creativity, offering a comprehensive and interdisciplinary financial education experience.",
    startDate: "04.11.2022",
    imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340102/Competition2_h6pnre.jpg",
  },
  
  {
    title: "National Level Trading Championship : A national event merging academic rigor and competitive spirit, fostering excellence and participation from top institutions",
    startDate: null,
    imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340103/Competition_poukrf.jpg",
  },
  
];

const CourseCard = ({ course ,index}) => (

  
  <motion.div className="relative flex-1 min-w-[300px] max-w-[39%] bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg group h-[400px]  "
  variants={StaggeredfadeIn}
      initial='initial'
      whileInView='animate'
      viewport={{
        once:true,
      }}
      custom={index}
      > {/* Increased card height */}
    <a href="#" className="block p-6 relative overflow-hidden h-full"> {/* Set height for the card content */}
      
      {/* Image used as background without cropping */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-100 z-0" 
        style={{ backgroundImage: `url(${course.imageUrl})`, objectFit: 'cover' }}
      ></div>

      <div className="w-full h-full relative z-10">
        <img 
          src={course.imageUrl} 
          alt={course.title} 
          className="w-full h-full object-cover rounded-t-2xl opacity-0"
        />
      </div>

      {/* Yellow Circle Animation */}
      <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-r from-[#2E3192] to-[#1BFFFF] rounded-full transform translate-x-1/2 -translate-y-1/2 transition-transform scale-100 group-hover:scale-[10] z-0"></div>

      {/* Hidden Text */}
      <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 transform translate-y-8 transition-all duration-100 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 z-10">
        <div>
          <div className="font-bold text-lg mb-4 text-white">{course.title}</div>
          {course.startDate && (
            <div className="text-sm text-white">
              Start: <span className="font-bold text-yellow-400">{course.startDate}</span>
            </div>
          )}
        </div>
      </div>

      {/* Dummy Title (Initially Hidden) */}
      <div className="absolute inset-0 flex items-center justify-center text-center opacity-100 transform translate-y-0 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-8 z-0">
        <div className="text-lg font-semibold text-gray-500"></div>
      </div>
    </a>
  </motion.div>
);

const Events = () => (
  <div className="w-full max-w-5xl mx-auto  p-6">
    <div className="flex flex-wrap justify-center gap-6 py-12">
      <div className="w-full text-center mb-12">
        <h2 className="text-3xl font-bold ">UpcomingEvents</h2>
      </div>
      {upcomingEvents.map((course, index) => (
        
        <CourseCard index={index} course={course} />
      ))}

      <div className="w-full text-center my-12">
        <h2 className="text-3xl font-bold text-white">Speaker Sessions</h2>
      </div>
      {speakerSessions.map((course, index) => (
        <CourseCard index={index} course={course} />
      ))}

      <div className="w-full text-center my-12">
        <h2 className="text-3xl font-bold text-white">PastEvent</h2>
      </div>
      {pastEvent.map((course, index) => (
        <CourseCard index={index} course={course} />
      ))}
    </div>
  </div>
);

export default Events;


