import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <>
      <nav>
        <div className="container1">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>

          <Link to={"/sobre-mim"}>
            {" "}
            <p>Sobre mim</p>{" "}
          </Link>
        </div>

        <div className="container2">
          <ul className="topics">
            <li>
              <Link to={"/tecnologias"}>Tecnologias</Link>
            </li>
            <li>
              <Link to={"/projetos"}>Projetos</Link>
            </li>
            <li>
              <Link to={"/contato"}>Contato</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
