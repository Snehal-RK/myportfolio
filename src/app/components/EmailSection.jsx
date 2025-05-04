"use client";

import React , { useState } from 'react'
import GithubIcon from '../../../public/socials/github.svg'
import LinkedinIcon from '../../../public/socials/linkedin.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {

    const [ emailSubmitted , setEmailSubmitted ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email : e.target.email.value,
            subject : e.target.subject.value,
            message : e.target.message.value,
        };
        console.log("Data before stringify : ", data);

        const JSONdata = JSON.stringify(data);
        console.log("JSON data being sent : " , JSONdata);

        const response = await fetch( '/api/send' , {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(data),
        } );
        console.log("Response : ", response);
        
        const resData = await response.json();

        if(response.ok) {
            console.log('Message sent.');
            setEmailSubmitted(true);
        }
    }

  return ( 
        <section id="email-section" className='grid md:grid-cols-2 my-12 md:my-12 py-24 lg:py-30 gap-4 relative'>
            <div className='bg-radial opacity-25 from-cyan-300 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'> </div>

            {/* Lets connect section */}
            <div className='z-5'>
                <h5 className='text-4xl font-bold text-white my-2'> Let's connect </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {' '}
                    I am currently looking  for the new opportunities, my inbox is always open.
                    Whether you have a question or just want to say Hii, I'll try my best to get back to you..!
                </p>

                <div className='socials flex flex-row gap-2 sm:mb-2'>
                    <Link href={"https://github.com/snehal-rk"}>
                        {/* <Image className='text-teal-50 fill-current w-5' src={GithubIcon} alt='github' /> */}

                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </Link>

                    <Link className='fill-white w-5' href={"https://www.linkedin.com/in/snehal-rajendra-01official"}>
                        {/* <Image src={LinkedinIcon} alt='Linkedin' /> */}

                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Contact form */}
            <div className='z-5'>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor='email' className='text-white block text-sm font-medium mb-2'> Your Email </label>
                        <input name='email' className='bg-[#18191E] outline-0 border border-cyan-200 focus:border-cyan-400 placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' type='email' id='email' required placeholder='example@gmail.com' />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='subject' className='text-white block text-sm font-medium mb-2'> Subject </label>
                        <input name='subject' className='bg-[#18191E] outline-0 border border-blue-200 focus:border-blue-400 placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' type='text' id='subject' required placeholder='Just saying hii..' />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white block text-sm font-medium mb-2'> Message </label>
                        <textarea className='  resize-none
                                               h-30
                                             bg-[#18191E]
                                               outline-0 
                                               border 
                                               border-purple-200 
                                               focus:border-purple-400 
                                               placeholder:[#9CA2A9] 
                                               text-gray-100 
                                               text-sm 
                                               rounded-lg 
                                               block w-full p-2.5 
                                               overflow-y-auto [&::-webkit-scrollbar]:w-2
                                               [&::-webkit-scrollbar-track]:rounded-full
                                             [&::-webkit-scrollbar-track]:bg-gray-100
                                               [&::-webkit-scrollbar-thumb]:rounded-full
                                             [&::-webkit-scrollbar-thumb]:bg-gray-300
                                             dark:[&::-webkit-scrollbar-track]:bg-transparent
                                             dark:[&::-webkit-scrollbar-thumb]:bg-purple-500' 
                                  name='message' id='message' placeholder="Let's talk about..."></textarea>
                    </div>

                    <button type='submit' className='cursor-pointer bg-gradient-to-br from-blue-500 to-teal-500 hover:bg-gradient-to-br hover:from-teal-500 hover:to-blue-500 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button>

                    {/* Verify message is sent */}
                    {
                        emailSubmitted && (
                            <p className='text-green-500 text-sm mt-2'>
                                Email sent successfully...!
                            </p>
                        )
                    }

                </form>
            </div>
        </section>
  )
}

export default EmailSection
