import React from 'react';
import Card from './Card';
import treemap from '../assets/treemap.png';
import boggle from '../assets/boggle.avif';
import site from '../assets/site.jpg';
import tetris2 from '../assets/tetris.webp';
import todo from '../assets/todo.png';
import exerciseImage from '../assets/e.png'



function Experience() {
  return (
    <section className='experience'>
      <h1 className="sectiontitle othertitle">Projects</h1>
      <p className='desc desc2'>Here are some of my personal projects</p>

      <div className='projectList'>
        <Card name="FilePath Treemap Visualizer" paragraph="Python | pygame" image={treemap}/>
        <Card name="Site Suitability Analysis" paragraph="postgreSQL | QGIS | PostGIS" image={site}/>
        <Card name="ExerciseBuddy" paragraph="MongoDB | Express.js | Node.js JavaScript | React.js | HTML/CSS" image={exerciseImage}/>
        <Card name="Boggle Pro" paragraph="Java | JavaFX" image={boggle}/>
        <Card name="Tetris" paragraph="Java | JavaFX" image={tetris2}/>
        <a href='https://reactchecklist.netlify.app' style={{ textDecoration: 'none', color: 'white' }} target="_blank">
        <Card name="To-Do App" paragraph="JavaScript | React.js | HTML/CSS" image={todo}/>
        </a>
      </div>

    </section>
  );
}

export default Experience;
