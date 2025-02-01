import React from 'react'
import { BentoFocusCards } from '../Components/Gallery/Bento-focus-cards'

const Gallery = () => {
    const cards = [
        {
          title: "Finance Club Farewell",
          src: "https://i.postimg.cc/X7bV6fzb/Fin-farewell.jpg",
          className: "md:col-span-2 md:row-span-2",
        },
        {
          title: "Group Discussion",
          src: "https://res.cloudinary.com/duqavhkag/image/upload/v1738393192/IMG-20250131-WA0025_knol2h.jpg",
          className: "md:col-span-2",
        },
        {
          title: "Speech",
          src: "https://i.postimg.cc/CMDF2PJ7/Fin-Orientation.jpg",
        },
        {
          title: "Quiz",
          src: "https://i.postimg.cc/CMDF2PJ7/Fin-Orientation.jpg",
        },
        {
          title: "Treasure Hunt",
          src: "https://i.postimg.cc/prDRnry4/Fin-horizontal.jpg",
          className: "md:row-span-2",
        },
        {
          title: "Quizes",
          src:"https://res.cloudinary.com/duqavhkag/image/upload/v1738393198/IMG-20250131-WA0027_xseyhj.jpg",
          className: "md:col-span-2",
        },
        {
          title: "The First Rule",
          src: "https://i.postimg.cc/prDRnry4/Fin-horizontal.jpg",
          className: "md:row-span-2",
        },
        {
          title: "Treasure Hunt",
          src: "https://res.cloudinary.com/duqavhkag/image/upload/v1738393197/IMG-20250131-WA0023_xydraf.jpg",
          className: "md:col-span-2",
        },
      ]
  return (
    <div><BentoFocusCards cards={cards}/></div>
  )
}

export default Gallery