"use client";

import React, { useTransition , useState , useRef } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import { animate, motion , useInView } from 'framer-motion';

const TAB_DATA = [
    {
        title : "Skills",
        id: "skills",
        content : (
            <ul className='list-disc pl-2'>
                <li>Object Oriented Programming</li>
                <li>Java Programming</li>
                <li>Servlet and JSP</li>
                <li>Hibernate</li>
                <li>Spring Boot</li>
                <li>JavaScript , NextJS</li>
                <li>HTML, CSS, Bootstrap</li>
                <li>Tailwind CSS</li>
            </ul>
        )
    } ,
    {
        title : "Experience",
        id: "experience",
        content : (
            <ul className='list-disc pl-2'>
                <li>FullStack Web Developer (2025)</li>
                <li>Software Engineer (2023-2024)</li>
            </ul>
        )
    } ,
    {
        title : "Certifications",
        id: "certifications",
        content : (
            <ul className='list-disc pl-2'>
                <li>FullStack Web Developer (2025)</li>
                <li>Java Full Stack Web Development (2024)</li>
                <li>Introduction to Java Programming (2019)</li>
            </ul>
        )
    }
]

const AboutSection = () => {

    const [ tab , setTab ] = useState("skills");
    const [ isPending, startTransition] = useTransition();

    // png animation
    const imageRef = useRef(null);
    const isImageInView = useInView(imageRef);
    const cardVariants = {
        initial : { y : 50 , opacity : 0 },
        animate : { y : 0 , opacity : 1 }
    };

    const handleTabChange = (id) => {
        startTransition( () => {
            setTab(id);
        });
    }

  return (
    <section id='about-section' className='text-white lg:-mt-4'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 sm:py-16 px-4 xl:gap-16 xl:px-16'>
            <motion.div
                ref = {imageRef}
                variants={cardVariants}
                initial = "initial"
                animate = { isImageInView ? "animate" : "initial" }
                transition={{ duration : 1 }}
                >
                <Image src="/Images/aboutme.png" alt='about me' width={500} height={500} />
            </motion.div>

            <div className='mt-4 md:mt-0 text-left flex flex-col h h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'> About Me </h2>
                <p className='text-base text-[#ADB7BE] lg:text-lg '> 
                    I'm a dedicated full-stack developer with a love for learning and a passion for 
                    building great web applications. I enjoy the process of turning ideas into reality
                    and continuously strive to improve my skills. I'm eager to contribute my expertise to create
                    exceptional digital experiences.
                </p>

                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> {" "} Skills {" "} </TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}> {" "} Experience {" "} </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}> {" "} Certifications {" "} </TabButton>
                </div>

                <motion.div 
                    key={tab}
                    initial = {{ opacity : 0 }}
                    animate = {{ opacity : 1 }}
                    transition={{ duration : 1 }}
                    className='mt-8'
                    >
                    {TAB_DATA.find( (t) => t.id === tab).content}
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
