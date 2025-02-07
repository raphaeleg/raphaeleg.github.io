import React from 'react'
import Tag from '../Elements/Tag'

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row items-start align-start relative w-full py-12 lg:min-h-[35vh]">
            <span className="flex flex-col items-start justify-center px-16 relative h-full sm:w-full lg:w-[70vw]">
                <h2 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>About</h2>
                <p className='sm:inline-block mt-4 md:text-lg lg:text-xl font-in font-light'>
                    Solid foundation in C++, React.js, and Unity, with a strong interest in code optimization and graphics
                    programming. I have strong collaboration and leadership skills, with a history of working with cross-functional
                    teams and co-founding a startup.
                </p>
                <p className='sm:inline-block mt-4 md:text-lg lg:text-xl font-in font-light'>
                    Looking forward to working on creative and innovative technical projects in Hong Kong 🇭🇰
                </p>
                <span className="flex items-start justify-start py-4 my-5 w-full h-full relative">
                    <Tag link='Raphaele-Michelle-Guillemot-Resume.pdf' isNewPage={true} isSolid={true} name="Resume" className="mr-5" />
                    <Tag link='https://github.com/raphaeleg' isNewPage={true} name="GitHub" />
                </span>
            </span>
        </div>
    )
}

export default About