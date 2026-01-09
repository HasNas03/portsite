import React from 'react';
import Card from './Card';
import treemap from '../assets/treemap.png';
import boggle from '../assets/boggle.avif';
import site from '../assets/site.jpg';
import tetris2 from '../assets/tetris.webp';
// import todo from '../assets/todo.png';
import houseImage from '../assets/house.jpeg'
import covidImage from '../assets/covid.jpg'
import carImage from '../assets/car.jpg'
import suiteImage from '../assets/suite.jpg'
import comicImage from '../assets/comics.webp'


function Projects() {
  return (
    <section className='Projects'>
      <h1 className="sectiontitle othertitle">Projects</h1>
      {/* <p className='desc desc2'>Here are some of my personal projects</p> */}

      <div className='projects'>
        <div className='projectList'>
          {/* comic catalog*/}
          <a href='https://github.com/HasNas03/comic-catalog-service' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="Comic Catalog ↗" paragraph="Java | Spring Boot | Postman" image={comicImage}/>
          </a>
          {/* rekognition*/}
          <a href='https://github.com/HasNas03/rekognition_app' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="Face Rekognizer ↗" paragraph="React.js | AWS Rekognition, S3, Lambda, DynamoDB" image={suiteImage}/>
          </a>
          {/* treemap*/}
          <Card name="FilePath Treemap Visualizer" paragraph="Python | pygame" image={treemap}/>
          {/* boggle pro*/}
          <Card name="Boggle Pro" paragraph="Java | JavaFX" image={boggle}/>
          {/* tetris*/}
          <Card name="Tetris" paragraph="Java | JavaFX" image={tetris2}/>
          {/* site suitability*/}
          <a href='https://github.com/HasNas03/Jupyter-notebooks/blob/main/Site%20Suitability%20Analysis%20Report%20-%20Personal.pdf' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="Site Suitability Analysis ↗" paragraph="postgreSQL | QGIS | PostGIS" image={site}/>
          </a>
          {/* to do*/}
          {/* <a href='https://github.com/HasNas03/to-do-list' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="To-Do App ↗" paragraph="JavaScript | React.js | HTML/CSS" image={todo}/>
          </a> */}
          {/* emissions*/}
          <a href='https://github.com/HasNas03/Jupyter-notebooks/blob/main/emissions/Carbon%20Emissions.ipynb' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="CO2 Emissions Statistical Analysis ↗" paragraph="Python | pandas | Jupyter Notebook" image={carImage}/>
          </a>
          {/* covid tableau*/}
          <a href='https://public.tableau.com/views/COVIDDashboard_17050443722110/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="2020 COVID Cases Interactive Dashboard ↗" paragraph="Tableau" image={covidImage}/>
          </a>
          {/* house tableau*/}
          <a href='https://public.tableau.com/views/HouseSaleDashboard_17050002821300/HouseSaleDashboard?:language=en-US&:display_count=n&:origin=viz_share_link' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="Real Estate Interactive Dashboard ↗" paragraph="Tableau" image={houseImage}/>
          </a>
        </div>
      </div>




    </section>
  );
}

export default Projects;
