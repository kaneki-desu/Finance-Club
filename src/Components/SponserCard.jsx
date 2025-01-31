import React from "react";

const SponsorCard = ({ img, name }) => {
  return (
    <figure
      className="relative flex w-[6rem] cursor-pointer items-center overflow-hidden rounded-2xl border border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.0] dark:bg-gray-50/[.00] dark:hover:bg-gray-50/[.01] md:w-[13rem] lg:w-[15rem]"
    >
      <div className="sponserImg">
        <img
          src={img}
          alt={name}
          className="w-25 h-25 grayscale transition duration-300 hover:grayscale-0"
        />
      </div>
    </figure>
  );
};

export default SponsorCard;