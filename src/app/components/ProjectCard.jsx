import React from 'react'
import { CodeBracketIcon , EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const ProjectCard = ({ imgUrl , title , description , gitUrl , previewUrl }) => {
  return (
    <div>
        {/* Image Div */}
        <div className='h-52 md:h-72 rounded-t-xl relative group' style={{ background: `url(${imgUrl})` , backgroundSize: "cover" }}>
          <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:opacity-80 transition-all duration-500 '>

              <Link href={gitUrl} className='h-14 w-14 mr-1 border-2 relative rounded-full border-[#ADB7BE] hover:border-teal-500 group/link'>
                <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 cursor-pointer transform -translate-y-1/2 -translate-x-1/2 group-hover/link:text-white' />
              </Link>

              <Link href={previewUrl} className='h-14 w-14 ml-1 border-2 relative rounded-full border-[#ADB7BE] hover:border-teal-500 group/link'>
                <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 cursor-pointer transform -translate-y-1/2 -translate-x-1/2 group-hover/link:text-white' />
              </Link>

          </div>
        </div>

        {/* Title */}
        <div className='text-white lg:mb-4 rounded-b-xl bg-[#181818] py-6 px-4'>
            <h5 className='font-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE] text-sm'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard
