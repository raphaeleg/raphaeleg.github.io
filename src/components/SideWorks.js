import React, { useState, useEffect, useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger );

const SideWorks = ( { title, category, images, dark, ytLink } ) => {
    const [my_swiper, set_my_swiper] = useState( {} );
    const headLineRef = useRef();
    const [showHeading, setShowHeading] = useState( true );
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
        <section className={'sideGalleryContainer'}>
            <span className='mainWorksTitles positionRight' ref={headLineRef}>
                {showHeading &&
                    <>
                        <h1>{title}</h1>
                        <h2>{category}</h2>
                    </>
                }
            </span>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[EffectFade]}
                effect="fade"
                className={`mySwiper ${showHeading ? 'arrCursorLight' : 'arrCursorDark'}`}
                onInit={( ev ) => {
                    set_my_swiper( ev )
                }}
                onClick={() => {
                    my_swiper.slideNext();
                    if ( my_swiper.realIndex == 0 )
                        setShowHeading( true );
                    else
                        setShowHeading( false );
                }}
                loop={true}
            >
                {images.map( ( slideContent ) => (
                    <SwiperSlide key={slideContent}>
                        <img src={`../MainWorks/${slideContent}.jpg`} alt={slideContent} />
                    </SwiperSlide>
                ) )}

                {ytLink &&
                    <SwiperSlide key={0}>
                        <iframe width={49 * window.screen.width / 100} height={46 * window.screen.height / 100} src={ytLink} title="YouTube video player" frameBorder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SwiperSlide>}
            </Swiper>
        </section>
    )
}

export default SideWorks