

import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/theme';
import TeamCard from '../Components/TeamCard';
import { data } from '../assets/TeamData';
import ParticleBackground from '../Components/Particle';
import {motion} from  'framer-motion';
import { fadeIn, StaggeredfadeIn } from '../Components/fadeInAnimation';
// import pngwing from '../assets/pngwing'

const TeamPage = () => {
  // const [bgImg, setBgImg] = useState(BlackBg);
  const { themeMode } = useContext(ThemeContext); // Get the current theme mode (dark or light)


  const [selectedRole, setSelectedRole] = useState('President');

  // Define the role filters for different roles
  const roleFilters = {
    President: (member) => member.position === 'President' || member.position === 'Vice President',
    Heads: (member) => member.position.includes('Head'),
    Analysts: (member) => member.position.includes('Analyst'),
    Members: (member) => member.position.toLowerCase() === 'member',
  };

  // Filter the team based on the selected role
  const filteredTeamByRole = data.filter(roleFilters[selectedRole]);

  // Group "Members" by their teams into sub-categories
  const memberTeams = {
    Developer: [],
    'Junior Fundamental Analyst': [],
    'Junior Technical Analyst': [],
    'PR and Marketing': [],
    Content: [],
    Design: [],
  };

  filteredTeamByRole.forEach((member) => {
    if (member.position.toLowerCase() === 'member' && member.team) {
      if (memberTeams[member.team]) {
        memberTeams[member.team].push(member);
      }
    }
  });

  return (
    <motion.div
    variants={fadeIn}
    initial='initial'
    whileInView='animate'
    viewport={{
      once:true,
    }}
    
      className="z-[-1000000] flex justify-center min-h-screen bg-transparent"
      style={{
        backgroundColor: themeMode === 'dark' ? 'var(--theme-color-dark)' : 'var(--theme-color-light)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: themeMode === 'dark' ? 'var(--text-color-dark)' : 'var(--text-color-light)',
        paddingTop: '70px', // Adjust this if the navbar height is different
      }}
    >
      <ParticleBackground id='particle'/>
      {/* <pngwing /> */}
      <div className="flex flex-col items-center w-[80vw] max-w-screen-lg">
        {/* Team Header */}
        <h1
          className="text-center text-4xl md:text-5xl font-bold mb-8 head" // Increased margin-bottom here for spacing
          style={{
            color: themeMode === 'dark' ? 'var(--light-color)' : 'var(--nav-color-light)',
          }}
        >
          Meet Our Team
        </h1>

        {/* Role Selector */}
        <div className="flex justify-evenly w-full absolute z-10 mt-16 pt-6">
          {['President', 'Heads', 'Analysts', 'Members'].map((role,index) => (
            <motion.div
              key={role}
              variants={fadeIn}
              initial='initial'
              whileInView='animate'
              viewport={{
                once:true,
              }}
              custom={index}
              onClick={() => setSelectedRole(role)}
              className={`p-1  px-3 rounded-full shadow-md font-semibold cursor-pointer transition-all duration-200 ${
                selectedRole === role
                  ? themeMode === 'light'
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-white text-black hover:bg-gray-300'
                  : themeMode === 'light'
                  ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {role}
            </motion.div>
          ))}
        </div>

        {/* Display team categories for "Members" */}
        {selectedRole === 'Members' && (
          <motion.div className="team-sections w-full mt-16">
            {Object.keys(memberTeams).map((team) => {
              const teamMembers = memberTeams[team];

              return (
                teamMembers.length > 0 && (
                  <div key={team} className="team-section w-full mb-12">
                    <h2
                      className="text-2xl font-semibold text-center mb-4"
                      style={{
                        color: themeMode === 'dark' ? 'var(--light-color)' : 'var(--nav-color-light)',
                      }}
                    >
                      {team} Team
                    </h2>
                    <div className="team-grid flex flex-wrap justify-center gap-10 w-full mt-16 p-1">
                      {teamMembers.map((member, index) => (
                        <TeamCard
                          index={index}
                          key={member.name + index} // Ensure unique keys
                          name={member.name}
                          position={member.position}
                          url={member.imageUrl}
                          facebook={member.facebook}
                          instagram={member.instagram}
                          linkedin={member.linkedin}
                          themeMode={themeMode} // Pass the themeMode to customize card style
                        />
                      ))}
                    </div>
                  </div>
                )
              );
            })}
          </motion.div>
        )}

        {/* Display other roles */}
        {selectedRole !== 'Members' && (
          <div className="team-grid flex flex-wrap justify-center gap-8 w-full mt-24">
            {filteredTeamByRole.length > 0 ? (
              filteredTeamByRole.map((member, index) => (
                <TeamCard
                  key={member.name + index} // Ensure unique keys
                  name={member.name}
                  position={member.position}
                  url={member.imageUrl}
                  facebook={member.facebook}
                  instagram={member.instagram}
                  linkedin={member.linkedin}
                  github={member.github}
                  themeMode={themeMode} // Pass the themeMode to customize card style
                />
              ))
            ) : (
              <p className="text-center text-gray-400 col-span-full">
                No team members found for {selectedRole}
              </p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamPage;