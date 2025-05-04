"use client"

import React, { useRef } from 'react'
import ProjectCard from './ProjectCard'
import { motion , useInView } from 'framer-motion';

const projectData = [
    {
        id: 1,
        title: "Spring Boot CRUD",
        description: `  Spring Boot CRUD API showcasing backend Java skills. RESTful endpoints enable data management, tested with Postman.`,
        image: "/Images/projects/SpringBootCRUD.png",
        gitUrl: "https://github.com/Snehal-RK/Spring-Boot-Application",
        previewUrl: "/",
        tag: ["All" , "Web"]
    },
    {
        id: 2,
        title: "Hibernate CRUD",
        description: `  This project demonstrates fundamental web development skills with 
                        CRUD database operations using Java Servlets and Hibernate.`,
        image: "/Images/projects/HibernateCRUD.png",
        gitUrl: "https://github.com/Snehal-RK/HibernateCRUD",
        previewUrl: "/",
        tag: ["All" , "Web"]
    },
    {
        id: 3,
        title: "Servlet CRUD",
        description: `  This web application serves as a practical demonstration of my proficiency in Java Servlets and 
                        fundamental database interaction.`,
        image: "/Images/projects/ServletCRUD.png",
        gitUrl: "https://github.com/Snehal-RK/CRUD-using-Single-Servlet",
        previewUrl: "/",
        tag: ["All" , "Web"]
    },
    {
        id: 4,
        title: "Category Manager",
        description: `  This project manage databases. Its simple interface allows you to create, find, update, and delete 
                        records efficiently using core Java and JSP. `,
        image: "/Images/projects/JSPCategoryManager.png",
        gitUrl: "https://github.com/Snehal-RK/Category-Manager-Application",
        previewUrl: "/",
        tag: ["All" , "Web"]
    },
    {
        id: 5,
        title: "Registration Template",
        description: `  Pure CSS3 & JSP registration template mirroring a provided design. Showcases front-end styling 
                        and JSP integration for user data input.`,
        image: "/Images/projects/RegistrationTemplate.png",
        gitUrl: "https://github.com/Snehal-RK/RegistrationTemplate",
        previewUrl: "/",
        tag: ["All" , "Web"]
    },
    {
        id: 6,
        title: "JSON Data Processing",
        description: `  Filters and displays food data from JSON, allowing users to view items by category, 
                        calorie content, and sort by protein/carbs.`,
        image: "/Images/projects/JSONProcessing.png",
        gitUrl: "https://github.com/Snehal-RK/JSONData_Processing",
        previewUrl: "/",
        tag: ["All" , "Web"]
    },

    // {
    //     id: 7,
    //     title: "Collaborative Document Editor",
    //     description: "Editor project description",
    //     image: "/Images/projects/screenshotDocEditor.png",
    //     gitUrl: "/",
    //     previewUrl: "/",
    //     tag: ["All" , "Web"]
    // },
]

const ProjectSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const cardVariants = {
        initial : { y : 50 , opacity : 0 },
        animate : { y : 0 , opacity : 1 }
    };

  return (
    <section id="project-section" className='lg:mt-4'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'> My Projects </h2>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            { projectData.map( (project , index) => 
                <motion.li 
                    key={index}
                    variants={cardVariants} 
                    initial="initial" 
                    animate={isInView ? "animate" : "initial"} 
                    transition={{ duration : 0.5, delay: index * 0.4 }}>
                    
                    <ProjectCard 
                        key = {project.id} 
                        title = {project.title}
                        description = {project.description}
                        imgUrl = {project.image}
                        gitUrl = {project.gitUrl}
                        previewUrl = {project.previewUrl}
                    />

                </motion.li>) 
            }
        </ul>
    </section>
  );
};

export default ProjectSection
