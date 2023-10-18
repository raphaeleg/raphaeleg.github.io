/** @format */

import React, { useState, useEffect, useRef } from 'react';

import './App.scss';
import Splash from './components/Splash';
import About from './components/About';
import MainWorks from './components/MainWorks';
import CTA from './components/CTA';
import ScrollBar from './components/ScrollBar';

function App() {
	const worksRef = useRef();
	const aboutRef = useRef();
	const splashRef = useRef();
	const [scrollPos, setScrollPos] = useState(0);
	const [isNotFirstPage, setIsNotFirstPage] = useState(false);
	const [currentPage, setCurrentPage] = useState(-1);
	const [prevPage, setPrevPage] = useState(0);
	const [scrollBarPos, setScrollBarPos] = useState(0);

	useEffect(() => {
		function onScroll() {
			let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
			if (currentPosition > 500) {
				setIsNotFirstPage(true);
				let idx = Math.floor(currentPosition / (window.innerHeight * 1.1));
				// get scroll values for scrollbar
				setCurrentPage(idx - 1);
				if (idx - 6 != prevPage) {
					setScrollBarPos(
						calcPosition(idx - (idx > 6 ? 6 : 1), idx > 6 ? 3 : 5)
					);
					setPrevPage(idx - 1);
				}
			} else setIsNotFirstPage(false);

			setScrollPos(currentPosition);
		}
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollPos]);

	function scrollTo(toGo) {
		toGo.current.scrollIntoView({ behavior: 'smooth' });
	}

	function calcPosition(cur, tot) {
		let calcPosition = ((cur - 0.5) * window.innerHeight) / tot;
		return calcPosition;
	}

	return (
		<div className='App'>
			<ScrollBar currentPage={currentPage} scrollBarPos={scrollBarPos} />
			<span ref={splashRef}>
				<Splash />
			</span>
			<span ref={aboutRef}>
				<About />
			</span>

			<span ref={worksRef}>
				<MainWorks
					title='Abandoned'
					category='Video Game • Horror • Unreal Engine 5'
					images={[42, 43, 44]}
					dark={false}
				/>
			</span>
			<MainWorks
				title='Escapee'
				category='Video Game • RPG • Unity'
				images={[1, 2, 3, 4]}
				dark={false}
				ytLink='https://www.youtube.com/embed/f3OJeqz19LE'
			/>
			<MainWorks
				title='Sharing© Water'
				category='Board Game • Speculative Design • Adobe Illustrator'
				images={[9, 10, 11, 12, 13, 14]}
				dark={false}
			/>
			<MainWorks
				title='Liminal Floor'
				category='Study • Horror • React.js'
				images={[5, 6, 7, 8]}
				dark={false}
				ytLink='https://www.youtube.com/embed/oDc_kKkF0g0'
			/>
			<MainWorks
				title='Translation Situation'
				category='Video Game • Puzzle • Scratch'
				images={[37, 38, 39, 40, 41]}
				dark={false}
				ytLink='https://scratch.mit.edu/projects/909850203/embed'
			/>

			<MainWorks
				title='Jane Austen'
				category='Website • UXUI • Next.js'
				images={[15, 16, 17, 18]}
				dark={true}
				sideContent={true}
			/>
			<MainWorks
				title='Art & Graphic'
				category=''
				images={[36, 27, 28, 29, 30, 31]}
				sideContent={true}
			/>
			<MainWorks
				title='Upcoming Projects'
				category=''
				images={[32, 33, 34]}
				sideContent={true}
			/>

			<CTA
				isNotFirstPage={isNotFirstPage}
				aboutRef={aboutRef}
				worksRef={worksRef}
				splashRef={splashRef}
				scrollTo={scrollTo}
			/>
		</div>
	);
}

export default App;
