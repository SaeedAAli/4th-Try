import profile from './images/profile.png'
import CV from './images/CV 2024.pdf'
import'./App.css'
import Button from './Components/Button'
import Eco from './images/Eco.png'
import Space from './images/Spaceship.png'
import games from './images/image.png'
import tick from './images/tick.png'
import SkillsList from './SkillsList'
function App() {
  const handleClick = () => {
    window.location.href = "https://github.com/SaeedAAli"

  }



  return (
    <div className='Hero'>
      <img src={profile} alt='AI'></img>
        <h1><span>I'm Saeed Ali,</span></h1>
        <h2>18 Year old Computer Science Student</h2>
        <h2>Connect with Me</h2>
        <div className="hero-action">
        <button onClick={handleClick} className='hero-connect'>GitHub</button>
        <button className='hero-connect'>
        <a href={CV} download="CV" className='hero-connect'>Resume</a>
        </button>
          </div>
          <div className="Projects">
            <h5>Experiences in Building Web Development and Game Development</h5>
            <br />
          <h1 className="PRO-TITLE">Projects</h1>
          <img src={Eco} alt="Eco" className='Eco'>
          </img>
          <h3 className="Carbon-Text">Carbon Collector Unity Game</h3>
          <p>2D Platform Based Game</p>
          <img src={Space} alt="Spaceship">
          </img>
          <h4>Rocket Space Ship</h4>
          <p>Fast Paced Action Shooter</p>
          <img src={games} alt="Games">
          </img>
          <h4>Esports Website</h4>
          <p>Whether to Add or Delete Games or Players</p>
          </div>
          <div className="Skills">
          <h1>Skills</h1>
          </div>
            <div className='front-end'>
             <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>C-Sharp</li>
             </ul>
             </div>
             < br className="Seperate"
             />
              <div className="framework-title">
                <h2>Frameworks</h2>
                </div>
                <div className="Frameworks">
                <ul>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>ExpressJS</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="Software-title">
                <h1>Software</h1>
              </div>
              <div className="Software-list">
                <ul>
                  <li>Unity</li>
                  <li>Visual Studio 2022</li>
                  <li>Visual Studio Code</li>
                </ul>
                </div>
                <div className='Contact'>
                  <h1 className="Contact h1">Contact</h1>
                  <label for="message" hidden=""></label>
                  <textarea name="message" className="message" placeholder="Message" required=""></textarea>
                  </div>
                  <button type="button" className="btn">Primary</button>
                  </div>
  )
}


export default App
