import { ReactDOM, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Header from "../header/Header";
import TagCloud from "TagCloud";
import "./Principal.css";
import "animate.css";

export default function Principal() {

  const linkGithub = 'https://img.icons8.com/?size=100&id=106562&format=png&color=2BD9A8'

  const linkEmail = 'https://img.icons8.com/?size=100&id=ahxVUuMZMzJy&format=png&color=2BD9A8'

  const linkLinkedin = 'https://img.icons8.com/?size=100&id=98960&format=png&color=2BD9A8'


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
            />
            <img
              src={linkGithub}
              alt="icon github"
            />
            <img
              src="src/assets/social/linkedin.png"
              alt="icon linkedin"

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
