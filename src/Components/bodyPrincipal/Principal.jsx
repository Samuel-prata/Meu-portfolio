import { ReactDOM, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Header from "../header/Header";
import TagCloud from "TagCloud";
import linkGithub from '../../assets/social/github.png'
import linkEmail from '../../assets/social/email.png'
import linkLinkedin from '../../assets/social/linkedin.png'
import "./Principal.css";
import "animate.css";

export default function Principal() {


  useEffect(() => {
      const container = ".tagcloud";
      const texts = [
        "Java",
        "Spring Boot",
        "Python",
        "Flask",
        "Django",
        "MySQL",
        "MongoDB",
        "HTML",
        "CSS",
        "Javascript",
        "Styled-Components",
        "MaterialUI",
        "Bootstrap",
        "ReactJS",
        "Git",
        "Vscode",
        "Eclipse",
        "Tests",
      ];
      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
      TagCloud(container, texts, options);
  }, []);
  return (
    <>
      <Header />
      <section className="main">
        <div className="containerInfo">
          <div className="animate__animated animate__zoomIn texts">
           
              <p>
                Olá, meu nome é{" "}
                <span className="animated-span">Samuel Silverio</span>
              </p>
              <p>
                Sou um <span>Desenvolvedor de Sistemas</span>
              </p>

          </div>
          <div className="animate__animated animate__zoomIn social">
            <img
              src={linkEmail}
              alt="icon email"
              width={"50px"}
              height={"50px"}
            />
            <img
              src={linkGithub}
              alt="icon github"
              width={"50px"}
              height={"50px"}
            />
            <img
              src={linkLinkedin}
              alt="icon linkedin"
              width={"50px"}
              height={"50px"}
            />
          </div>
          <div className="animate__animated animate__zoomIn more">
            <div className="button-more">
              <h3>Mais sobre mim</h3>
            </div>

          </div>
        </div>
        <div className="containerSphere">
          <div className="animation">
            <div className="text-shpere">
              <span className="tagcloud"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
