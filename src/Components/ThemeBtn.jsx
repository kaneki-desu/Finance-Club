import React from 'react'
import { Sun, Moon} from "lucide-react";
import useTheme from '../contexts/theme';
import { motion, AnimatePresence } from "framer-motion"

const ThemeBtn = ({size}) => {
  console.log(size)
    const {themeMode, lightTheme, darkTheme}= useTheme()
    const onClickThemeButton=(e)=>{
     themeMode==='light'?darkTheme():lightTheme() 
    }
  return (
    <div onClick={onClickThemeButton}>
      <AnimatePresence>
        {themeMode==='light'?
      <AnimatePresence>  
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration:0.5}}
      exit={{ opacity: 0 }}
      >
        <Sun size={size} />
      </motion.div>
      </AnimatePresence>
      :<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration:0.5}}
      exit={{ opacity: 0 }}
      >
        <Moon size={size}/>
      </motion.div>}
      </AnimatePresence>
    </div>
  )
}

export default ThemeBtn