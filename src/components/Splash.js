import React, { useEffect, useRef } from 'react'
import SplashBg from './SplashBg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger );


const Splash = () => {
    const headLineRef = useRef();

    useEffect( () => {
        gsap.fromTo(
            headLineRef.current,
            { autoAlpha: 0, y: -40 },
            {
                autoAlpha: 1, y: 0, duration: 1,
                scrollTrigger: {
                    scroller: 'html',
                    trigger: headLineRef.current,
                    start: "top 60%",
                    end: "bottom 0%",
                    toggleActions: "play none restart reverse"
                },
            },
        );
    }, [] );
    return (
        <section className='splashContainer'>
            <h1 ref={headLineRef}>Raphaele G.</h1>
            <p>A game and web developer</p>
            <p>with a visual arts background</p>
            <SplashBg />
        </section>
    )
}

export default Splash