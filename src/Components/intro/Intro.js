import React from "react";
import "../intro/intro.css";
import intro from '../img/intro.png';

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name">Mahesh Raja</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Fornt-End Developer</div>
              <div className="i-title-item">Accounted</div>
              <div className="i-title-item">Writter</div>
            </div>
          </div>
          <div className="i-desc">
            To work in a pragmatic way and to succeed in an environment of
            growth and excellence and earn a job which provide me job
            satisfaction and self development and help ke achieve personal as
            well as organizational goals.
          </div>
        </div>
      </div>
      <div className="i-right">
        {/* <div className="i-bg"></div> */}
        <img src={intro} alt='' className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
