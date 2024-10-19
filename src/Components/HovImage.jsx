import React from 'react'
import styles from "./hovImage.module.css"
export const HovImage = () => {
  return (
    <div className='flex'>
      {/* <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
    <div className={styles.card}>
      <div classname={styles.wrapper}>
        <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" className={styles["cover-image"]} />
      </div>
      <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" className={styles.title}/>
      <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" className={styles.character} />
    </div>
  </a>
   */}
  <a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank">
  <div className={styles.card}>
  <div className={styles.wrapper}>
        <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" className={styles["cover-image"]} />
      </div>
      <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" className={styles.title}/>
      <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" className={styles.character} />
    </div>
  </a></div>
  )
}