import React, { useState, useEffect, useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
// Scroll Animation
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger );

const MainWorks = ( { title, category, images, dark, ytLink, sideContent } ) => {
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

    function checkShowTitle() {
        if ( my_swiper.realIndex == 0 )
            setShowHeading( true );
        else
            setShowHeading( false );
    }


    return (
        <section className={`${sideContent ? 'sideGalleryContainer' : 'mainGalleryContainer'}`}>
            <span className={`mainWorksTitles ${sideContent ? 'positionRight' : ''}`} ref={headLineRef}>
                <span className={`${showHeading ? '' : 'toHide'}`}>
                    <h1>{title}</h1>
                    <h2>{category}</h2>
                </span>

            </span>
            <Swiper
                className={`mySwiper ${( dark || sideContent && showHeading ) ? 'arrCursorDark' : 'arrCursorLight'}`}
                modules={[EffectFade, Pagination]}
                effect="fade"
                pagination={true}
                onInit={( ev ) => {
                    set_my_swiper( ev )
                }}
                onClick={() => {
                    my_swiper.slideNext();
                    checkShowTitle();
                }}
                onSlideChange={() => checkShowTitle()}
                loop={true}
            >
                {images.map( ( slideContent ) => (
                    <SwiperSlide key={slideContent}>
                        <img src={`../MainWorks/${slideContent}.jpg`} alt={slideContent} />
                    </SwiperSlide>
                ) )}
                {/* style={{ backgroundColor: "#232325" }} */}
                {ytLink &&
                    <SwiperSlide key={0}>
                        <iframe width={60 * window.innerWidth / 100} height={50 * window.innerHeight / 100} src={ytLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading='eager' allowFullScreen></iframe>

                    </SwiperSlide>}
            </Swiper>
        </section >
    )
}

export default MainWorks