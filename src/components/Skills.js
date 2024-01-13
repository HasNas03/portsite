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
import tableauImage from '../assets/tableau.png';
import pandasImage from '../assets/pandas.png';
import jupyterImage from '../assets/jupyter.png';
import codeImage from '../assets/code.png';

function Skills() {
    const skillsData = [
        { image: pythonImage, text: 'Python' },
        { image: javascriptImage, text: 'JavaScript' },
        { image: reactImage, text: 'React' },
        { image: javaImage, text: 'Java' },
        { image: postgresqlImage, text: 'PostgreSQL' },
        { image: pandasImage, text: 'pandas' },
        { image: mongodbImage, text: 'MongoDB' },
        { image: arcgisImage, text: 'ArcGIS Pro' },
        { image: tableauImage, text: 'Tableau' },
        { image: gitImage, text: 'Git' },
        { image: jupyterImage, text: 'Jupyter Notebook' },
        { image: codeImage, text: 'HTML/CSS' }
    ];

    
    return (
        <section className='skills'>
            <h1 className="sectiontitle othertitle">Skills</h1>
            <p className='desc desc2'>Here are some of my technical skills</p>

            <div className="skill-images-container">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <img src={skill.image} alt={skill.text} className="skill-image" />
                        <p className="skill-text">{skill.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
// <img src={react} style={{ width: '15%', height: 'auto' }}/>