import React from "react";
import "./about.css";
import ME from "../../assets/images/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { GiArchiveResearch, GiFullFolder } from "react-icons/gi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ Year of experience in web dev</small>
            </article>

            <article className="about__card">
              <GiArchiveResearch className="about__icon" />
              <h5>Research Papers</h5>
              <small>1 paper in Scopus journal</small>
            </article>

            <article className="about__card">
              <GiFullFolder className="about__icon" />
              <h5>Projects</h5>
              <small>17 Projects completed</small>
            </article>
          </div>

          <p>
            Passionate Third-year Bachelor's of Engineering student specializing
            in Computer Science at Chandigarh University. Current serving as the
            Editorial Co-Ordinator of IEEE Delhi Section Student Network.
            Skilled in Next JS, Graphics Design, Research publication, and
            Effective leadership. Seeking opportunities to contribute expertise
            and expand knowledge.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
