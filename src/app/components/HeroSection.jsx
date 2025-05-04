"use client";

import React , { useRef } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion, useInView } from 'framer-motion';
import HandleClick from './HandleClick';

const HeroSection = () => {

    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef);

  return (
    <motion.section 
        ref={ sectionRef }
        initial={{ opacity : 0 }} 
        animate={ isSectionInView ? { opacity : 1 , scale : 1 } : { opacity : 0 , scale : 0.8 }} 
        transition={{ duration : 1.2 }} 
        className='lg:py-5 md:py-14'>

        <div className="grid grid-cols-1 sm:grid-cols-12">

            {/* Intro Section */}
            <motion.div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">

                {/* Your intro */}
                <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-400'>
                        Hello, I'm {" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        'Snehal',
                        1000,
                        'Full stack developer',
                        1000,
                        'Java Developer',
                        1000,
                        'Web Developer',
                        1000
                    ]}
                    wrapper="span"
                    speed={40}
                    
                    repeat={Infinity}
                    />
                </h1>

                {/* Some description about yourself */}
                <p className='text-[#ADB7BE] mb-6 md:mr-2 text-base sm:text-lg lg:text-lg'>
                    I possess a comprehensive skillset encompassing Java Backend Development, Front-End web technologies and Full-Stack Architecture.
                    My proficiency includes the development of scalable backend systems utilizing Java and Spring Boot, the creation of
                    dynamic user interfaces with HTML, CSS, and Javascript frameworks such as React, Next, and the integration of these components to
                    produce complete application solutions. I am capable of managing the entire development lifecycle, from database design to user interface implementation,
                    ensuring efficient and maintainable software delivery.
                </p>

                <div>
                    
                    <HandleClick
                        destination='#email-section'
                        className=' cursor-pointer px-6 py-3 rounded-full w-full sm:w-fit mr-4 
                                  text-white bg-gradient-to-br from-purple-800 via-blue-500 to-teal-500 
                                    hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600'>
                        Hire me
                    </HandleClick>

                    <HandleClick 
                        destination="/SNEHAL-RESUME-2025.pdf"
                        className=' cursor-pointer px-1 py-1 rounded-full w-full sm:w-fit 
                                    bg-gradient-to-br from-purple-800 via-blue-500 to-teal-500 
                                    hover:bg-slate-800 text-white mt-3'> 
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                            Download CV
                        </span>
                    </HandleClick>
                
                </div>
            </motion.div>

            {/* Image section */}
            <motion.div 
                initial={{ opacity : 0 }} 
                animate={{ opacity : 1 , scale : 1 }} 
                transition={{ duration : 1.2 }} 
                className="col-span-4 place-self-center mt-4 lg-mt-0">
                <div className="rounded-full md:ml-3 bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image 
                        src="/Images/myPic2.png"
                        alt='Hero Image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    />
                </div>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default HeroSection
