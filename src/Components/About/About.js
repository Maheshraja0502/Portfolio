import React from "react";
import "./About.css";
import award from "../img/ca.png";

const About = () => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-card-bg"></div>
        <div className="a-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcc17zVeCImKm0ZfgvsysZE8VhfSYqEXWsCA&usqp=CAU"
            alt=""
            className="a-img"
          ></img>
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
          Being a planner I wish to plan things before I start implementing it.
          A person who always want to complete the task which I have started.
        </p>
        <p className="a-desc">
          I explore new ways to do a thing and also believe in smart work more
          than hard work. Like to have good networking with people and develop
          good relationship with them. Like to work as a team so that I can
          teach and learn from each person in the team.
        </p>
        <div className="a-award">
          <img src={award} alt="" className="a-award-img"></img>
          <div className="a-award-text">
            <h2 className="a-award-title">Chartered Account</h2>
            <p className="a-award-title-disc">
              “It is certainly a great honor to be a CA because you are
              contributing in so many ways towards the growth and strength of
              your country.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
