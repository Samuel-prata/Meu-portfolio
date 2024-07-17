import React from "react";
import "../header/Header";
import Header from "../header/Header";
import "./AboutMe.css";
import line from "../../assets/line.png";
import book from "../../assets/book.png";

export default function AboutMe() {
  return (
    <>
      <Header />
      <section className="about">
        <div className="texts">
          <div className="title">
            <h1 className="animate__animated animate__zoomIn">Sobre mim</h1>
            <img className="animate__animated animate__zoomIn" src={line} alt="" />
          </div>
          <div className="animate__animated animate__zoomIn text-aboutme">
            <p>
              Apaixonado por resolução de desafios e com o entusiasmo de criar
              de forma livre. Vi na programação a chance de trabalhar com o que
              gosto. Assim então, iniciei meus estudos na linguagem Java no ano
              de 2022.
            </p>

            <p>
              A primeiro momento foquei no aprendizado em tecnologias back end,
              já que sempre tive facilidade com lógica. No ano de 2023, me
              interessei pela área do front-end e me vi tentado a entrar no
              mundo da criação de telas dinamicas.
            </p>
            <p>
              Hoje, digo que sou um desenvolvedor Back-End com uma parcela de
              experiência em Front-end. Me permitindo criando aplicações Web e
              Desktop com qualidade, bem funcional e estilizada.
            </p>
          </div>
        </div>
        <div className="animate__animated animate__zoomIn container-image">
          <img src={book} alt="" />
        </div>
      </section>
    </>
  );
}
