/** @format */

import React from 'react';
import BallCanvas from './Ball';
import { technologies, specialWorks } from '../constants';

const About = () => {
	return (
		<section className='aboutContainer'>
			<h2>
				Educated at the University of Hong Kong under BASc Design+ and Computer
				Science.
			</h2>
			<h2>I'm passionate about</h2>
			<div className='techContainer'>
				{specialWorks.map((technology) => (
					<div className='ballContainer' key={technology.name}>
						<BallCanvas icon={technology.icon} />
						<p>{technology.name}</p>
					</div>
				))}
			</div>
			<h2 id='aboutSubcaption'>I'm also good at</h2>
			<div className='techContainer'>
				{technologies.map((technology) => (
					<div className='ballContainer2' key={technology.name}>
						<BallCanvas icon={technology.icon} />
						<p>{technology.name}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default About;
