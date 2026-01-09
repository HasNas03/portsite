import Card from './Card';
import interac from '../assets/interac.webp';
import rbc from '../assets/rbc.png'


function Experience() {
  return (
    <section className='experience'>
      <h1 className="sectiontitle othertitle">Experience</h1>
      <div className='Experience'>
        <div className='expList'>
          <Card name="DevSecOps & Cloud Co-op" paragraph="<strong>Interac Corporation</strong><br/><br/>Jan. 2025 - Aug. 2025" image={interac} bgColor="rgba(255, 193, 7, 0.4)"/>
          <Card name="Tech Systems Analyst Co-op" paragraph="<strong>Royal Bank of Canada</strong><br/><br/>Sep. 2024 - Dec. 2024" image={rbc} bgColor="rgba(0, 82, 180, 0.4)"/>
          <Card name="Platform & Cloud Co-op" paragraph="<strong>Interac Corporation</strong><br/><br/>May 2024 - Aug. 2024" image={interac} bgColor="rgba(255, 193, 7, 0.4)"/>
          {/* <Card name="Software/Cloud Engineer" paragraph="<strong>Your Company!</strong><br/><br/>Apr. 2026 - " image={interac}/> */}

        </div>
      </div>




    </section>
  );
}

export default Experience;
