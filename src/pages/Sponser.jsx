import React from 'react';
import SponserData from '../Data/SponserData';
// import Marquee from './components/ui/Marquee';
import SponserCard from '../Components/SponserCard';
// import BlurFade from './ui/BlurFade';

const Sponsors = () => {
  const zeroRow = SponserData.slice(0, SponserData.length);

  return (
    <div id="sponsors" className="sponser-container">
      <div className="sponser_intro pb-8 text-center">
        {/* <BlurFade> */}
          <span className="w-fit bg-white bg-clip-text p-2 text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl xl:text-6xl">
            Past Sponsors
          </span>
        {/* </BlurFade> */}
      </div>

      <div className="sponser_cards">
        <div className="relative flex flex-col items-center justify-center w-full overflow-hidden rounded-lg py-1 bg-background md:shadow-xl">
          < pauseOnHover className="[--duration:30s]">
            {zeroRow.map((item, index) => (
              <SponserCard key={index} {...item} />
            ))}
          </pauseOnHover>

          <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
          <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;








