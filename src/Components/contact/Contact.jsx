import React from "react";
import Header from "../header/Header.jsx";
import line from "../../assets/line.png";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "@emailjs/browser";

import "./Contact.css";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_wbmb83m", "template_92uq1sn");
  };

  return (
    <>
      <Header />
      <section className="body-contact">
        <div className="title-container">
          <h1 className=" animate__animated animate__backInLeft title-projects">
            Contato
          </h1>{" "}
          <img
            className="animate__animated animate__backInLeft"
            src={line}
            alt=""
          />
        </div>
        <div className="contact-container">
          <form className="form-body" action="submit">
            <div className="form-container">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Digite seu endereço de e-mail"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Assunto
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Assunto a se tratar"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Mensagem
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="container-button">
                <button type="submit" className="send-button">
                  Enviar
                </button>
              </div>
            </div>
          </form>
          <div className="text-contact">
            <h2>Entre em contato comigo para tratar de um assunto</h2>
            <ul>
              <li>Precisa de um serviço web ou desktop ?</li>
              <li>Precisa de um desenvolvedor para sua equipe</li>
              <li>Precisa de mentorias sobre a Stack que domino</li>
              <li>Fique a vontade para tratar de outros assuntos</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
