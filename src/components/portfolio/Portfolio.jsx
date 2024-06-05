import React from "react";
import "./Portfolio.scss";
const Portfolio = () => {
  return (
    <div className="continer">
      <div className="skills">
        <h1>About ME</h1>
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms <br /> of programming and technology
        </p>
        <div className="skill">
          <div className="skill1">
            <h1>Get to know me!</h1>
            <p>
              I'm a Frontend Focused Web Developer building and managing the
              Front-end of Websites and Web Applications that leads to the
              success of the overall product. Check out some of my work in the
              Projects section. I also like sharing content related to the stuff
              that I have learned over the years in Web Development so it can
              help other people of the Dev Community. Feel free to Connect or
              Follow me on my Linkedin and Instagram where I post useful content
              related to Web Development and Programming I'm open to Job
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don't hesitate to contact me.
            </p>
            <button>Contact</button>
          </div>
          <div className="skill1">
            <h1>My Skills</h1>
            <div className="skill_cart">
              <div className="js">Html</div>
              <div className="js">Css</div>
              <div className="js">Js</div>
              <div className="js">React</div>
              <div className="js">Html</div>
              <div className="js">Css</div>
              <div className="js">Js</div>
              <div className="js">React</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
