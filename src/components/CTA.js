import React from 'react'

const CTA = ( { isNotFirstPage, aboutRef, worksRef, splashRef, scrollTo } ) => {
    return (
        <span className="CTAContainer">
            {isNotFirstPage ? (
                <>
                    <a href="https://www.linkedin.com/in/raphaele-michelle-guillemot-6a34271a8/">LinkedIn</a>
                    •
                    <a href="https://github.com/raphaeleg">Github</a>
                    •
                    <a href="mailto:raphaeleguillemotmichelle@gmail.com">Email</a>
                    •
                    <p onClick={() => { scrollTo( splashRef ) }}>Back to Top</p>
                </>
            ) : (
                <>
                    <p onClick={() => { scrollTo( aboutRef ) }}>About me</p>
                    •
                    <p onClick={() => { scrollTo( worksRef ) }}>My works</p>
                </>
            )}
        </span>
    )
}

export default CTA