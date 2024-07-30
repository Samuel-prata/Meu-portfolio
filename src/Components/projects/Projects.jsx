import React from "react";
import Header from "../header/Header";
import "../projects/Projects.css";
import line from "../../assets/line.png";
import samthunder from "../../assets/projects/samthunder.png";
import duoctor from "../../assets/projects/duoctor.png";
import school from "../../assets/projects/school.png";
import navegador from "../../assets/projects/navegador.png";
import breve from "../../assets/projects/breve.png";
import giticon from "../../assets/social/github.png";

export default function Projects() {
  return (
    <>
      <Header />
      <section className="body-projects">
        <div className="title-container">
          <h1 className=" animate__animated animate__backInLeft title-projects">
            Projetos
          </h1>{" "}
          <img
            className="animate__animated animate__backInLeft"
            id="lines"
            src={line}
            alt=""
          />
        </div>
        <div className="animate__animated animate__zoomIn cards" id="cards">
          <div className="card-container">
            <div className="card-image">
              <img src={samthunder} alt="" />
            </div>
            <div className="card-text">
              <div className="bar-title">
                <h1>Samthunder </h1>
                <div className="icons">
                  <img className="image-link" src={navegador} alt="" />
                  <img src={giticon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card-image">
              <img src={duoctor} alt="" />
            </div>
            <div className="card-text">
              <div className="bar-title">
                <h1>Duoctor </h1>
                <div className="icons">
                  <img className="image-link" src={navegador} alt="" />
                  <img src={giticon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="animate__animated animate__zoomIn second-cards">
          <div className="card-container">
            <div className="card-image">
              <img src={school} alt="" />
            </div>
            <div className="card-text">
              <h1>API sistema escolar</h1>
              <div className="icons">
                <img className="image-link" src={navegador} alt="" />
                <img src={giticon} alt="" />
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card-image">
              <img src={breve} alt="" />
            </div>
            <div className="card-text">
              <h1>Em breve</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
