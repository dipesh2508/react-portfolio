import React from "react";
import "./portfolio.css";
import HealthOptima from "../../assets/images/HealthOptima.png";
import IMG1 from "../../assets/images/img1.png";
import IMG2 from "../../assets/images/img2.png";
import IMG3 from "../../assets/images/img3.png";
import ReactQuiz from "../../assets/images/ReactQuiz.png";
import Chitksa from "../../assets/images/Chikitsa.png";

const data = [
  {
    id: 1,
    image: HealthOptima,
    title: "Health Optima",
    github: "https://github.com/dipesh2508/Health-Optima",
    demo: "https://www.healthoptima.in/",
  },
  {
    id: 6,
    image: Chitksa,
    title: "Chikitsa Salah",
    github: "https://github.com/dipesh2508/Chikitsa-Salah",
    demo: "https://chikitsa-salah-y6bc.vercel.app/",
  },
  {
    id: 2,
    image: IMG1,
    title: "Chat App",
    github: "https://github.com/dipesh2508/chat-app",
    demo: "",
  },
  {
    id: 5,
    image: ReactQuiz,
    title: "Quiz App",
    github: "https://github.com/dipesh2508/Quiz-App",
    demo: "https://dipesh2508.github.io/Quiz-App/",
  },
  {
    id: 3,
    image: IMG2,
    title: "Weather App",
    github: "https://github.com/dipesh2508/Weather",
    demo: "https://dipesh2508.github.io/Weather/",
  },
  {
    id: 4,
    image: IMG3,
    title: "Sign-in page",
    github: "https://github.com/dipesh2508/sign-page",
    demo: "https://dipesh2508.github.io/sign-page/",
  },

  
  
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
