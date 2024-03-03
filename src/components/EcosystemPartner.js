import "../styles/EcosystemPartner.css";
import ecosystem from "../assets/community/IIMNagpur.png";

const EcosystemPartner = () => {
  return (
    <div className="ecosystem_section">
      <h1 className="ecosystem_heading">Ecosystem Partner</h1>
        <div className="ecosystem_container">
            <a href="https://www.iimnagpur.ac.in/" target="_blank" rel="noopener noreferrer">
            <img src={ecosystem} alt="ecosystem-nagpur" className="ecosystem_image" />
            </a>
        </div>
    </div>
  );
};

export default EcosystemPartner;
