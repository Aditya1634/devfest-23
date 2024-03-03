import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/AdvocatePage.css';
import profile from "../../assets/audience_count/profile.svg";
import profile1 from "../../assets/audience_count/profile1.svg";
import profile2 from "../../assets/audience_count/profile2.svg";
import profile3 from "../../assets/audience_count/profile3.svg";

const AdvocatePage = () => {
  const advocates = [
    {
      quote:
        "DevFest is the best way to connect with the developer community and learn the latest about APIs and Frameworks!",
      name: "Thomas Ezan",
      role: "Developer Advocate at Google",
      image: profile,
    },
    {
      quote:
       "DevFest is an amazing opportunity for you to connect with other passionate developers and learn from them!",
      name: "Carlos J. Rojas Reyes",
      role: "Principal Customer Engineer at Google",
      image: profile3,
    },
    {
      quote:
        "It will feel like a family reunion meeting again with the developer community after years of staring into the screen.",
      name: "Angie Sasmita ",
      role: "Android DevRel Engineer at Google",
      image: profile2,
    },
    {
      quote:
        "A developer should attend DevFest this year to connect with others to expand their view of software delivery.",
      name: "Amanda Lewis",
      role: "Developer Advocate at Google",
      image: profile1,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1000,
  };

  return (
    <div className='advocate-page'>
      <Slider {...settings}>
        {advocates.map((advocate, index) => (
          <div key={index} className="advocate-page-container">
            <div className="advocate-content">
              <div className="image-container">
                <img src={advocate.image} alt={`profile-${index}`} className='profile' />
              </div>
              <div className="quote-container">
                <p className='quote'>{advocate.quote}</p>
                <p className='name'>
                  {advocate.name}
                  <br />
                  {advocate.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AdvocatePage;
