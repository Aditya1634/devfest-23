import React from "react";
import "../styles/CommunityPartner.css";
import { ReactComponent as Community1Dark } from "../assets/community/community1.svg";
import { ReactComponent as Community16Dark } from "../assets/community/community16.svg";
import { ReactComponent as Community17Dark } from "../assets/community/community17.svg";
import { ReactComponent as Community18Dark } from "../assets/community/community18.svg";
import { ReactComponent as Community19Dark } from "../assets/community/community19.svg";
import { ReactComponent as Community20Dark } from "../assets/community/community20.svg";
import { ReactComponent as Community7Dark } from "../assets/community/community7.svg";
import { ReactComponent as Community8Dark } from "../assets/community/community8.svg";
import { ReactComponent as Community10Dark } from "../assets/community/community10.svg";
import { ReactComponent as Community21Dark } from "../assets/community/community21.svg";
import { ReactComponent as Community11Dark } from "../assets/community/community11.svg";
import { ReactComponent as Community22Dark } from "../assets/community/community22.svg";
import { ReactComponent as Community30Dark } from "../assets/community/community30.svg";
import { ReactComponent as Community31Dark } from "../assets/community/community31.svg";
import Community24Dark from "../assets/community/community24.png";
import Community25Dark from "../assets/community/community25.png";
import Community26Dark from "../assets/community/community26.png";
import Community27Dark from "../assets/community/community27.png";
import Community28Dark from "../assets/community/community28.png";
import Community29Dark from "../assets/community/community29.png";


const CommunityPartner = () => {
  return (
    <div className="community-partners">
        {/* <div className=" w-full sm:px-16 py-8 border-t md:justify-between border-border">
        </div> */}
        <h2 style={{ color: "#fff" }}>
            Community Partners
        </h2>
        <section>
            <Community1Dark />
            <Community7Dark />
            <Community8Dark />
            <Community10Dark />
            <Community11Dark />
            <Community16Dark />
            <Community17Dark />
            <Community18Dark />
            <Community19Dark />
            <Community20Dark />
            <Community21Dark />
            <Community30Dark />
            <Community31Dark />
            <Community22Dark />
            <img src={Community24Dark} alt="Community 24 Dark" />
            <img src={Community25Dark} alt="Community 25 Dark" />
            <img src={Community26Dark} alt="Community 26 Dark" />
            <img src={Community29Dark} alt="Community 29 Dark" />
            <img src={Community27Dark} alt="Community 27 Dark" />
            <img src={Community28Dark} alt="Community 28 Dark" />
        </section>
    </div>
  );
};

export default CommunityPartner;