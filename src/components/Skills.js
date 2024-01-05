// Skills.js
import React from 'react';

import reactImage from '../assets/react.png';
import pythonImage from '../assets/python.png'; // Import the images for each skill
import javascriptImage from '../assets/javascript.png';
import mongodbImage from '../assets/mongodb.png';
import postgresqlImage from '../assets/postgresql.png';
import gitImage from '../assets/git.png';
import arcgisImage from '../assets/arcgis.png';
import javaImage from '../assets/java.png';



function Skills() {
    
    return (
        <section className='skills'>
            <h1 className="sectiontitle othertitle">Skills</h1>
            <p className='desc desc2'>Here are some of my technical skills</p>

            <div className="skill-images-container">
                <img src={pythonImage} alt="Python" className="skill-image" />
                <img src={javascriptImage} alt="JavaScript" className="skill-image" />
                <img src={reactImage} alt="React" className="skill-image" />
                <img src={javaImage} alt="Java" className="skill-image" />
                <img src={postgresqlImage} alt="PostgreSQL" className="skill-image" />
                <img src={gitImage} alt="Git" className="skill-image" />
                <img src={arcgisImage} alt="ArcGIS" className="skill-image" />
                <img src={mongodbImage} alt="MongoDB" className="skill-image" />
                
            </div>
    

        </section>
    );
}

export default Skills;
// <img src={react} style={{ width: '15%', height: 'auto' }}/>