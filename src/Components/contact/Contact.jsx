import React from "react";
import Header from "../header/Header.jsx";
import line from '../../assets/line.png'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <Header />
      <section className="body-contact">
      <div className="title-container">
          <h1 className=" animate__animated animate__backInLeft title-projects">
            Projetos
          </h1>{" "}
          <img
            className="animate__animated animate__backInLeft"
            src={line}
            alt=""
          />
        </div>
      </section>
    </>
  );
}
