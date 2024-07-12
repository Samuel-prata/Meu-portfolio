import { ReactDOM, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Header from "../header/Header";
import TagCloud from "TagCloud";
import "./Principal.css";
import "animate.css";

export default function Principal() {
  useEffect(() => {
    return () => {
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
    };
  }, []);
  return (
    <>
      <Header />
      <section className="main">
        <div className="containerInfo">
          <div className="texts">
            <Fade cascade>
              <p>
                Olá, meu nome é{" "}
                <span className="animated-span">Samuel Silverio</span>
              </p>
              <p>
                Sou um <span>Desenvolvedor de Sistemas</span>
              </p>
            </Fade>
          </div>
          <div className="social">
            <img
              src="src/assets/social/email.png"
              alt="icon email"
              width={"50px"}
              height={"50px"}
            />
            <img
              src="src/assets/social/github.png"
              alt="icon github"
              width={"50px"}
              height={"50px"}
            />
            <img
              src="src/assets/social/linkedin.png"
              alt="icon linkedin"
              width={"50px"}
              height={"50px"}
            />
          </div>
          <div className="more">
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
