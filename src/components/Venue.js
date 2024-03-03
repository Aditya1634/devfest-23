import React from "react";
import "../styles/Venue.css"


const Venue = () => {
  return (
    <div className="venue_container">
        <h1 className="venue_text">Venue</h1>
        <h3 className="venue">Indian Institute of Management, Nagpur</h3>
        <div className="venue_location">
            <iframe
              title="map"
              loading="lazy"
              allowFullScreen
              frameBorder={0}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119105.36692782375!2d78.96596053692058!3d21.110863090522813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0785aca6f1d%3A0x9ac8f93fd0edb1c8!2sIndian%20Institute%20of%20Management%E2%80%93Nagpur%20(IIM%E2%80%93Nagpur)!5e0!3m2!1sen!2sin!4v1701410204498!5m2!1sen!2sin" >

              </iframe>
        </div>
    </div>
  );
};

export default Venue;
