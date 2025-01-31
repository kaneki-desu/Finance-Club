// import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import '../css/Card.css'; // Ensure you have this CSS file for custom styles if necessary

// const TeamCard = ({ name, position, url, facebook, instagram, linkedin, github }) => {
//   return (
//     <div className="profile-card">
//       <div className="img">
//         <img src={url} alt={`${name}'s profile`} />
//       </div>
//       <div className="caption">
//         <h3>{name}</h3>
//         <p>{position}</p>
//         <div className="social-links flex justify-center space-x-4">
//           {facebook && (
//             <a href={facebook} target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-facebook text-3xl text-black hover:text-blue-500 transition duration-300"></i>
//             </a>
//           )}
//           {instagram && (
//             <a href={instagram} target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-instagram text-3xl  text-black hover:text-pink-500 transition duration-300"></i>
//             </a>
//           )}
//           {linkedin && (
//             <a href={linkedin} target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-linkedin text-3xl  text-black hover:text-blue-600 transition duration-300"></i>
//             </a>
//           )}
//           {/* Conditionally render GitHub icon for Developer role */}
//          { github && (
//             <a href={github} target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-github text-3xl text-black hover:text-gray-800 transition duration-300"></i>
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamCard;




import React from 'react';
 import '@fortawesome/fontawesome-free/css/all.min.css';

import '../css/Card.css';
 // Ensure you have this CSS file for custom styles if necessary

const TeamCard = ({ name, position, url, facebook, instagram, linkedin, github }) => {
  return (
    <div className="profile-card relative z-10">
      <div className="img">
        <img src={url} alt={`${name}'s profile`} />
      </div>
      <div className="caption">
        <h3>{name}</h3>
        <p>{position}</p>
        <div className="social-links flex justify-center space-x-4 relative z-20">
          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon "
            >
              <i className="fab fa-facebook icon-size text-black hover:text-blue-500 transition duration-300 "></i>
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-instagram icon-size text-black hover:text-pink-500 transition duration-300"></i>
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-linkedin icon-size text-black hover:text-blue-600 transition duration-300"></i>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-github icon-size text-black hover:text-gray-800 transition duration-300"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
