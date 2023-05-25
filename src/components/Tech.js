import React from "react";

import BallCanvas from "./Ball";
import { technologies } from "../constants";

const Tech = () => {
    return (
        <div className='techContainer'>
            {technologies.map( ( technology ) => (
                <div className='ballContainer' key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                    <p>{technology.name}</p>
                </div>
            ) )}
        </div>
    );
};

export default Tech;