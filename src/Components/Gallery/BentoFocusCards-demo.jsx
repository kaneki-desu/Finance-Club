import { BentoFocusCards } from "@/components/bento-focus-cards"
import LoadingScreen from "../LoadingScreen"

export default function BentoFocusCardsDemo() {
  const cards = [
    {
      title: "Finance Club farewell",
      src: "https://i.postimg.cc/X7bV6fzb/Fin-farewell.jpg",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      title: "Valley of Life",
      src: "https://i.postimg.cc/X7bV6fzb/Fin-farewell.jpg",
      className: "md:col-span-2",
    },
    {
      title: "Sala Behta Hi Jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Camping is for Pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "md:row-span-2",
    },
    {
      title: "The Road Not Taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "md:col-span-2",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
      className: "md:col-span-2",
    },
  ]

  return (
  <>
  <LoadingScreen/>
  <BentoFocusCards cards={cards} />
  </>)
}

