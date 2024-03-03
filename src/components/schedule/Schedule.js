import React from "react";
import { EventCard } from "./EventCard";
import styles from "./Schedule.module.css";
import { SpeakerCard } from "./SpeakerCard";
import Speaker5 from "../../assets/schedule/Speaker5.jpeg";
import Speaker12 from "../../assets/schedule/Speaker12.jpeg";
import Speaker13 from "../../assets/schedule/Speaker13.jpeg";
import Speaker15 from "../../assets/schedule/Speaker15.jpeg";
import Speaker17 from "../../assets/schedule/Speaker17.jpeg";
import Speaker18 from "../../assets/schedule/Speaker18.jpeg";
import Speaker19 from "../../assets/schedule/Speaker19.jpeg";
import Speaker20 from "../../assets/schedule/Speaker20.jpeg";

export const Schedule = () => {
  const green = "#0F9D56",
    red = "#DB4437",
    blue = "#4285F4",
    yellow = "#F4B400";

  //===============================================================
  const events2 = [
    {
      time: "9:00am - 10:00am ",
      // date: "Nov 06",
      event: ["Registration", "Breakfast  ☕"],
      bordercolor: ["#DB4437", green],
      multiEvent: true,
      bg: [
        ["#e8eaed", "#28292B"],
        ["rgba(15, 157, 86, 0.2)", "#1D3A2E"],
      ],
    },
    {
      time: "10:45am - 11:00am",
      // date: "Nov 06",
      // event: (
      //   <SpeakerCard
      //     path={[Speaker11]}
      //     event={"Opening Ceremony "}
      //     speaker={"Host"}
      //   />
      // ),
      event: ["Opening Ceremony "],
      bordercolor: green,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "11:00am - 11:30am",
      // date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker12]}
          event={"Keynote"}
          speaker={"Arun Teja Goavarthi"}
        />
      ),
      bordercolor: blue,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "11:30am -12:00pm",
      // date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker13]}
          event={
            "Limitless Opportunities for startups to get GenAi Ready."
          }
          speaker={"Vidhi Chugh"}
        />
      ),
      bordercolor: yellow,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "12:00pm -12:30pm",
      // date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker5]}
          event={
            "How to Secure Firebase Databases the Right Way."
          }
          speaker={"Anubhav Singh"}
        />
      ),
      bordercolor: "#DB4437",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "12:30pm - 1:00pm",
      // date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker15]}
          event={
            "Fireside chat with Sana Farheen"
          }
          speaker={"Sana Farheen"}
        />
      ),
      bordercolor: yellow,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "1:00pm - 2:30pm",
      // date: "Nov 06",
      event: "Lunch Break 🍕",
      bordercolor: green, //green
      multiEvent: false,
      smallBg: green,
      bg: ["rgba(15, 157, 86, 0.2)", "#1D3A2E"],
    },
    {
      time: "2:30pm - 2:40pm",
      // date: "Nov 05",
      event: "Fun Activities",
      bordercolor: blue,
      multiEvent: false,
      smallBg: blue,
      bg: ["rgba(66, 133, 244, 0.2)", "#263D64"],
    },
    {
      time: "2:40pm - 3:10pm      ",
      // date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker18]}
          event={"Empowerment Hour: Unleashing Confidence, Boldness and Career Triumphs. "}
          speaker={"Ananya R "}
        />
      ),
      bordercolor: yellow,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "3:10pm- 3:40pm ",
      // date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker17]}
          event={"Building the Future: Empowering apps with LLM and AI"}
          speaker={"Pawan Kumar "}
        />
      ),
      bordercolor: red,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "3:40pm - 4:10pm",
      // date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker19]}
          event={"Refactoring Web Performance"}
          speaker={"Srashti Jain "}
        />
      ),
      bordercolor: green,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "4:10pm - 4:40pm ",
      // date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker20]}
          event={"How to get started with your startup."}
          speaker={"Rushabh Vasa"}
        />
      ),
      bordercolor: yellow,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "4:40pm - 5:30pm",
      // date: "Nov 06",
      event: (
        <div className="special-event">
          {" "}
          <div>Building the Next  Unicorns in Nagpur</div>
          <div style={{ fontSize: "14px" }}>Panel Discussion</div>
        </div>
      ),
      bordercolor: blue,
      multiEvent: false,
      smallBg: blue,
      bg: ["rgba(66, 133, 244, 0.2)", "#263D64"],
    },
    {
      time: "5:30pm - 6:00pm",
      // date: "Nov 06",
      event: "Closing Keynote and Vote of Thanks",
      bordercolor: yellow, //green
      multiEvent: false,
      smallBg: yellow,
      bg: ["rgba(244, 180, 0, 0.2)", "#483D1C"],
    },
    {
      time: "6:00pm - 6:30pm ",
      // date: "Nov 06",
      event: "High Tea ☕",
      bordercolor: green,
      multiEvent: false,
      smallBg: green,
      bg: ["rgba(15, 157, 86, 0.2)", "#1D3A2E"],
    },
    
  
    
    
  ];


  return (
    <div className={styles.scheduleMainContainer}>
      <div className={styles.heading}>Schedule</div>
      <div className={styles.scheduleContainer}>
        {events2.map((event) => {
              return (
                <EventCard
                  date={event.date}
                  time={event.time}
                  event={event.event}
                  bordercolor={event.bordercolor}
                  multiEvent={event.multiEvent}
                  bg={event.bg}
                  smallBg={event.smallBg === undefined ? "" : event.smallBg}
                />
              );
            })}
      </div>
    </div>
  );
};
