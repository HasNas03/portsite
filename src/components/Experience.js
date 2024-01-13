import React from 'react';
import Card from './Card';
import treemap from '../assets/treemap.png';
import boggle from '../assets/boggle.avif';
import site from '../assets/site.jpg';
import tetris2 from '../assets/tetris.webp';
import todo from '../assets/todo.png';
import exerciseImage from '../assets/e.png'
import houseImage from '../assets/house.jpg'
import covidImage from '../assets/covid.jpg'
import carImage from '../assets/car.jpg'


function Experience() {
  return (
    <section className='experience'>
      <h1 className="sectiontitle othertitle">Projects</h1>
      <p className='desc desc2'>Here are some of my personal projects</p>

      <div className='projects'>
        <div className='projectList'>
          <Card name="FilePath Treemap Visualizer" paragraph="Python | pygame" image={treemap}/>
          {/* link to site suitability*/}
          <a href='https://github.com/HasNas03/Jupyter-notebooks/blob/main/Site%20Suitability%20Analysis%20Report%20-%20Personal.pdf' style={{ textDecoration: 'none', color: 'white' }} target="_blank">
          <Card name="Site Suitability Analysis" paragraph="postgreSQL | QGIS | PostGIS" image={site}/>
          </a>
          <Card name="ExerciseBuddy" paragraph="MongoDB | Express.js | Node.js JavaScript | React.js | HTML/CSS" image={exerciseImage}/>
          <Card name="Boggle Pro" paragraph="Java | JavaFX" image={boggle}/>
          <Card name="Tetris" paragraph="Java | JavaFX" image={tetris2}/>
          {/* link to to do*/}
          <a href='https://reactchecklist.netlify.app/' style={{ textDecoration: 'none', color: 'white' }} target="_blank">
          <Card name="To-Do App" paragraph="JavaScript | React.js | HTML/CSS" image={todo}/>
          </a>
          {/* link to emissions*/}
          <a href='https://github.com/HasNas03/Jupyter-notebooks/blob/main/emissions/Carbon%20Emissions.ipynb' style={{ textDecoration: 'none', color: 'white' }} target="_blank">
          <Card name="CO2 Emission Data Analysis" paragraph="Python | pandas | Jupyter Notebook" image={carImage}/>
          </a>
          {/* link to covid tableau*/}
          <a href='https://public.tableau.com/views/COVIDDashboard_17050443722110/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link' style={{ textDecoration: 'none', color: 'white' }} target="_blank">
          <Card name="2020 COVID Cases Interactive Dashboard" paragraph="Tableau" image={covidImage}/>
          </a>
          {/* link to house tableau*/}
          <a href='https://public.tableau.com/views/HouseSaleDashboard_17050002821300/HouseSaleDashboard?:language=en-US&:display_count=n&:origin=viz_share_link' style={{ textDecoration: 'none', color: 'white' }} target="_blank">
          <Card name="Real Estate Interactive Dashboard" paragraph="Tableau" image={houseImage}/>
          </a>
        </div>
      </div>




    </section>
  );
}

export default Experience;
