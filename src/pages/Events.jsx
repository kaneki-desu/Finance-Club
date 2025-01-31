import React, { useEffect, useState } from "react";
import eventData from "../assets/eventData.json";
import ParticlesComponent from "../Components/Particle";
import useTheme from "../contexts/theme";

import defaultImage from "../assets/default.gif";

function Events() {
  const [events, setEvents] = useState([]);
  const { themeMode } = useTheme();

  useEffect(() => {
    setEvents(eventData.events);
  }, []);

  return (
    <div className="relative min-h-screen mt-8 mobile:mt-32">
      <div className="fixed inset-0 -z-0">
        <ParticlesComponent id="particles-bg" />
      </div>

      <div className={themeMode === "light" ? "bg-white text-gray-800" : "bg-black text-gray-200"}>
        <section className="text-center py-5">
          <h1 className="text-3xl font-bold">Upcoming Events</h1>
        </section>

        {events.map((category, index) => (
          <section key={index} className="py-10">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.items.map((item, idx) => (
                 <div
                 key={idx}
                 className={`relative group border rounded-lg shadow-md overflow-hidden ${
                   themeMode === "light" ? "bg-white" : "bg-gray-700/[0.5] backdrop-blur-sm"
                 } hover:shadow-xl transition-transform transform hover:scale-105`}
                 onClick={() => {
                   window.location.href = `/event/${item.id}`; 
                 }}
               >
                 <div className="h-40 bg-gray-300 dark:bg-gray-600">
                   <img
                     src={item.image || defaultImage}
                     alt={item.name}
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                   />
                 </div>
               
                 <div className="p-6">
                   <h3 className="text-xl font-bold text-teal-500">{item.name}</h3>
                   <p
      className="mt-2 text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      {item.description}
    </p>
                 </div>
               
                 <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-20 transition-opacity"></div>
               </div>
               
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Events;
