import "../styles/StartupAndDiversity.css";
import startup from '../assets/startup_diversity/startup.png';
import diversity from '../assets/startup_diversity/diversity.png';

const StartupAndDiversity = () => {
  return (
    <div id="startup_diversity">
      <h1 className="theme"> Devfest Theme</h1>
      <div id="startup_section" className="startup_diversity">
        <img  src={startup} alt="startup" className="startup" />
        <img  src={diversity} alt="diversity" className="diversity" />
      </div>
    </div>
  );
};

export default StartupAndDiversity;
