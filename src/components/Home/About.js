import React from 'react'
import Tag from '../Elements/Tag'

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row items-start align-start relative w-full py-12 lg:min-h-[35vh]">
            <span className="flex flex-col items-start justify-center px-16 relative h-full sm:w-full lg:w-[70vw]">
                <h2 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>About</h2>
                <p className='sm:inline-block mt-4 md:text-lg lg:text-xl font-in font-light'>
                    I treat complex software architecture like game mechanics. Structuring messy real-world data into precise, 
                    rule-based systems. With a background in CS from HKU and currently reading for an MSc in 
                    AI at HKUST, I work across C++, Unity, React, and LLM workflows.
                </p>
                <p className='sm:inline-block mt-4 md:text-lg lg:text-xl font-in font-light'>
                    From graphics programming to performance optimization, I love building creative, high-impact tech in Hong Kong 🇭🇰.
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