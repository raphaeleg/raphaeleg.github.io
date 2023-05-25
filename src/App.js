import React, { useState, useEffect, useRef } from "react";

import './App.scss';
import Splash from './components/Splash';
import SplashBg from './components/SplashBg';
import About from './components/About';
import MainWorks from './components/MainWorks';
import SideWorks from './components/SideWorks';
import CTA from './components/CTA';
import ScrollBar from "./components/ScrollBar";

function App() {
  const worksRef = useRef();
  const aboutRef = useRef();
  const splashRef = useRef();
  const [scrollPos, setScrollPos] = useState( 0 );
  const [isNotFirstPage, setIsNotFirstPage] = useState( false );
  const [currentPage, setCurrentPage] = useState( 1 );
  const [prevPage, setPrevPage] = useState( 0 );
  const [totalPages, setTotalPages] = useState( 5 );
  const [scrollBarPos, setScrollBarPos] = useState( 0 );

  useEffect( () => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if ( currentPosition > 500 ) {
        setIsNotFirstPage( true );
        let idx = Math.floor( currentPosition / window.innerHeight );
        // get scroll values for scrollbar
        if ( currentPosition > window.innerHeight * 7 ) {
          setCurrentPage( idx - 6 );
          setTotalPages( 3 );
          if ( idx - 6 != prevPage ) {
            setScrollBarPos( calcPosition( idx - 6, 3 ) );
            setPrevPage( idx - 6 );
          }
        }
        else {
          setCurrentPage( idx - 1 );
          setTotalPages( 5 );
          if ( idx - 6 != prevPage ) {
            setScrollBarPos( calcPosition( idx - 1, 5 ) );
            setPrevPage( idx - 1 );
          }
        }
      }
      else
        setIsNotFirstPage( false );

      setScrollPos( currentPosition );
    }
    window.addEventListener( "scroll", onScroll );
    return () => window.removeEventListener( "scroll", onScroll );
  }, [scrollPos] );

  function scrollTo( toGo ) {
    toGo.current.scrollIntoView( { behavior: 'smooth' } );
  }

  function calcPosition( cur, tot ) {
    let calcPosition = ( cur - 0.5 ) * window.innerHeight / tot;
    return calcPosition
  }

  return (
    <div className="App">
      <ScrollBar currentPage={currentPage} totalPages={totalPages} scrollBarPos={scrollBarPos} />
      <span ref={splashRef}>
        <Splash />
      </span>
      <span ref={aboutRef}>
        <About />
      </span>

      <span ref={worksRef}>
        <MainWorks title='Escapee' category='Video Game • RPG • Unity' images={[1, 2, 3, 4]} dark={false} ytLink="https://www.youtube.com/embed/f3OJeqz19LE" />
      </span>
      <MainWorks title='Liminal Floor' category='Study • Horror • React.js' images={[5, 6, 7, 8]} dark={false} ytLink="https://www.youtube.com/embed/oDc_kKkF0g0" />
      <MainWorks title='Sharing© Water' category='Board Game • Speculative Design • Adobe Illustrator' images={[9, 10, 11, 12, 13, 14]} dark={false} />
      <MainWorks title='Jane Austen' category='Website • UXUI • Next.js' images={[15, 16, 17, 18]} dark={true} />
      <MainWorks title='SALBOY FIFTY5IVE' category='Website • VR • JQuery' images={[19, 20, 21, 22]} dark={true} />

      <SideWorks title='Marketing' category='' images={[35, 23, 24, 25, 26]} />
      <SideWorks title='Art & Graphic' category='' images={[36, 27, 28, 29, 30, 31]} />
      <SideWorks title='Upcoming Projects' category='' images={[32, 33, 34]} />

      <CTA isNotFirstPage={isNotFirstPage} aboutRef={aboutRef} worksRef={worksRef} splashRef={splashRef} scrollTo={scrollTo} />
    </div>
  );
}

export default App;
