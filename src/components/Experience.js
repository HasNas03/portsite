import React from 'react';
import Card from './Card';
import treemap from '../assets/treemap.png';
import boggle from '../assets/boggle.avif';
import site from '../assets/site.jpg';
import tetris from '../assets/tetris.jpg';
import reactImage from '../assets/react.png';
import todo from '../assets/todo.png';




function Experience() {
  return (
    <section className='experience'>
      <h1 className="sectiontitle">Projects</h1>
      <p className='desc'>Here are some of my personal projects</p>

      <div className='projectList'>
        <Card name="FilePath Treemap Visualizer" paragraph="Python | pygame" image={treemap}/>
        <Card name="Site Suitability Analysis" paragraph="postgreSQL | QGIS | PostGIS" image={site}/>
        <Card name="ExerciseBuddy" paragraph="MongoDB | Express.js | Node.js | React.js | JavaScript | HTML/CSS" image={reactImage}/>
        <Card name="Boggle Pro" paragraph="Java | JavaFX" image={boggle}/>
        <Card name="Tetris" paragraph="Java | JavaFX" image={tetris}/>
        <Card name="To-Do App" paragraph="JavaScript | React.js | HTML/CSS" image={todo}/>
      </div>

    </section>
  );
}

export default Experience;
