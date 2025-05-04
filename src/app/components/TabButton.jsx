import React from 'react'
import { motion } from 'framer-motion';

const variants = {
  default : { width : 0 },
  active : { width : "calc(100% - 0.75rem)" }
}

const TabButton = ({ active , selectTab , children }) => {
    const buttonClasses = active 
      ? 'text-white' 
      : 'text-[#ADB7BE]';
  return (
    <button onClick={selectTab}> 
       
        <p className= {`mr-3 cursor-pointer font-semibold ${buttonClasses}`}>
          { children } 
        </p> 

        <motion.div 
          animate={active ? "active" : "default"} 
          variants={variants}
          className='h-1 bg-gradient-to-bl from-purple-800 via-blue-500 to-teal-500 rounded-full mt-1.5 mr-3'>
        </motion.div>

    </button>
  )
}

export default TabButton
