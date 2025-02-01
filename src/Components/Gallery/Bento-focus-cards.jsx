import { useState, memo } from "react"
import cn from 'classnames';

const BentoCard = memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-xl relative overflow-hidden transition-all duration-300 ease-out h-full",
      card.className,
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
    )}
  >
    <img src={card.src || "/placeholder.svg"} alt={card.title} fill className="object-cover absolute inset-0" />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end p-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
    </div>
  </div>
))

BentoCard.displayName = "BentoCard"

export function BentoFocusCards({ cards }) {
  const [hovered, setHovered] = useState(null)
  if (!cards || cards.length === 0) {
    return <div>No cards to display</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]">
        {cards.map((card, index) => (
          <BentoCard key={card.title} card={card} index={index} hovered={hovered} setHovered={setHovered} />
        ))}
      </div>
    </div>
  )
}

