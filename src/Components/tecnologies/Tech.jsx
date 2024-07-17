import React from "react";
import Header from "../header/Header";
import line from "../../assets/line.png";
import "./Tech.css";

export default function Tech() {
  return (
    <>
      <Header />
      <section className="tecnologies">
        <div className="animate__animated animate__zoomIn stack">
      
            <div className="stack-title">
              {" "}
              <h1>Back-End</h1>
            </div>

            <div className="stack-images">
              {" "}
              <img
                src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
                alt=""
              />
              <img
                src="https://img.icons8.com/?size=100&id=GPfHz0SM85FX&format=png&color=000000"
                alt=""
              />
              <img
                src="https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=FFFFFF"
                alt=""
              />
              <img
                src="https://img.icons8.com/?size=100&id=90519&format=png&color=000000"
                alt=""
              />
            </div>
         

          <div className="stack-title">
            {" "}
            <h1>Front-End</h1>
          </div>

          <div className="stack-images">
            {" "}
            <img
              src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000"
              alt=""
            />
          </div>

          <div className="stack-title">
            <h1>Banco de Dados</h1>
          </div>
          <div className="stack-images">
            {" "}
            <img
              src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=100&id=74402&format=png&color=000000"
              alt=""
            />
          </div>
        </div>

        <div className="animate__animated animate__zoomIn texts-stack">
          <div className="text-title">
            <h1 className="animate__animated animate__zoomIn">Tecnologias</h1>
            <img
              className="animate__animated animate__zoomIn"
              src={line}
              alt=""
            />
          </div>
          <p>
            Graças a muita dedicação nos estudos e com ideias para projeto.
            Posso dizer que minha Stack se tornou bem diversificada.
          </p>

          <p>
            Passei tempo masterizando minhas habilidades com a linguagem Java,
            mas acredito que são apenas ferramentas utilizadas para uma tarefa
            em específica. Portanto, estou sempre aberto a aprender novas
            tecnologias.
          </p>
          <p>
            A área da tecnologia é um universo amplamente vasto para nos
            prendermos a apenas uma linguagem (planeta) em especifico. Além das
            Stacks, alterno entre o estudo de suas bibliotecas/módulos para
            cumprir certas funções.
          </p>
        </div>
      </section>
    </>
  );
}
