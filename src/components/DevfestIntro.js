import "../styles/DevfestIntro.css";
import devfest from "../assets/intro/devfest-intro.png";
import monuments from "../assets/intro/monuments.svg";

const DevfestIntro = () => {
  return (
    <div className="devfest_intro_section">
      <h1 className="devfest_title_heading">What is DevFest?</h1>
        <div className="devfest_container">
            <img src={devfest} alt="devfest-nagpur" className="devfest_intro_image" />
            <div className="devfest_title">
                <p className="devfest_title_para_one">DevFest is a community led tech conference, hosted by the Google Developer Groups (GDGs) to nurture the needs and interests of the local developer community by fostering knowledge exchange, networking, and learning about Google technologies.  </p>
                <p className="devfest_title_para_two">DevFest Nagpur is an initiative by GDG Nagpur, where we take you on a tech-led drive. DevFest is an enthusiastic joyride of learning and empowering yourself with a strong focus on knowledge exchange, networking and learning about technologies to nurture the needs and interests of the local developer community ecosystem.</p>
            </div>
        </div>
        <div className="devfest_intro_monuments">
          <img src={monuments} alt="devfest-monuments" className="devfest_intro_monument" />
        </div>
    </div>
  );
};

export default DevfestIntro;
