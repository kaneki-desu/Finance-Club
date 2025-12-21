
import ParticleBackground from '../Components/Particle';
import { ThemeContext } from '../contexts/theme';
import {motion} from  'framer-motion';
import { fadeIn, StaggeredfadeIn } from "../Components/fadeInAnimation";
import useIsMobile from '../utils/useIsMobile';



const upcomingEvents = [
   
  // {
  //   title: "​Swapso and Finance and Investment Club, NIT Silchar presents: Bitcoin India Tour - Silchar Edition . ​This event is a golden opportunity for all Bitcoin enthusiasts to engage, learn, and network. Join us for an insightful session and be part of this transformative journey in the world of Bitcoin.",
  //   startDate: "23.03.2025",
  //   imageUrl: "https://res.cloudinary.com/dlcmnk3rr/image/upload/v1742300034/485182643_17964548120892751_1846050145700160919_n.webp_jqoivi.webp",
  //   eventURL: "https://lu.ma/1b4o0tjs"
  // },
  // {
  //   title: "Join Arthniti for finance events—Treasure Hunt, Quiz, and Discussions. Sharpen skills and claim your treasure!",
  //   startDate: "04.11.2022",
  //   imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340103/OrientationRoadmap_pcncdz.jpg",
  // },
  // {
  //   title: "Treasure Hunt: A finance-based problem-solving event encouraging teamwork, strategy, and quick thinking while enhancing financial knowledge.",
  //   startDate: "04.11.2022",
  //   imageUrl: "https://res.cloudinary.com/duqavhkag/image/upload/v1738340104/TreasureHunt_yyhcbr.jpg",
  // },
  
];

const speakerSessions = [
  {
    title: "​webinar : Ai & Stock market",
    startDate: "15.10.2025",
    imageUrl: "https://res.cloudinary.com/dgqpu7qic/image/upload/v1760280076/WhatsApp_Image_2025-10-12_at_7.19.35_PM_ghmjjx.jpg",
    // eventURL: "https://luma.com/fncxgdju"
  },
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

const CourseCard = ({ course ,index,eventURL}) => (

  
  <motion.div className="relative flex-1 min-w-[300px] max-w-[40%] bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg group h-[440px] mx-auto  "
  variants={StaggeredfadeIn}
      initial='initial'
      whileInView='animate'
      viewport={{
        once:true,
      }}
      custom={index}
      > {/* Increased card height */}
    <a href={eventURL?eventURL:"#"} className="block p-6 relative overflow-hidden h-full "> {/* Set height for the card content */}
      
      {/* Image used as background without cropping */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-100 z-0" 
        style={{ backgroundImage: `url(${course.imageUrl})`, objectFit: 'cover' }}
      ></div>


      <div className="w-full h-full relative z-10 ">
        <img 
          src={course.imageUrl} 
          alt={course.title} 
          className="w-full h-full object-cover rounded-t-2xl opacity-0"
        />
      </div>

      {/* Yellow Circle Animation */}
      <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-r from-[#2E3192] to-[#1BFFFF] rounded-full  transform translate-x-1/2 -translate-y-1/2 transition-transform scale-100 duration-[750ms] group-hover:scale-[10] z-0"></div>

      {/* Hidden Text */}
      <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 transform translate-y-8 transition-all duration-1000 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 z-10 ">
        <div>
          <div className="font-bold text-lg mb-4 text-white px-2">{course.title}</div>
          {course.startDate && (
            <div className="text-sm text-white">
              Start: <span className="font-bold text-yellow-400">{course.startDate}</span>
            </div>
          )}
        </div>
      </div>

      {/* Dummy Title (Initially Hidden) */}
      <div className="absolute inset-0 flex items-center justify-center text-center opacity-100 transform translate-y-0 transition-all duration-1000 ease-in-out group-hover:opacity-0 group-hover:translate-y-8 z-0">
        <div className="text-lg font-semibold text-gray-500"></div>
      </div>
    </a>
  </motion.div>
);

const Events = () => {  
  const isMobile = useIsMobile();
  return (
  <div className="w-full max-w-5xl mx-auto  p-6">
    
    <div className="flex flex-wrap justify-center gap-6 py-12">
    { !isMobile && <ParticleBackground id='particle'/>}
      <div className="w-full text-center mb-12">
        <h2 className="text-3xl font-bold ">Upcoming Events</h2>
      </div>
      {upcomingEvents.map((course, index) => (
        
        <CourseCard index={index} course={course} eventURL={course.eventURL} />
      ))}

      <div className="w-full text-center my-12">
        <h2 className="text-3xl font-bold ">Speaker Sessions</h2>
      </div>
      {speakerSessions.map((course, index) => (
        <CourseCard index={index} course={course} />
      ))}

      <div className="w-full text-center my-12">
        <h2 className="text-3xl font-bold ">PastEvent</h2>
      </div>
      {pastEvent.map((course, index) => (
        <CourseCard index={index} course={course} />
      ))}
    </div>
  </div>
);
}

export default Events;


