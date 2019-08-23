import React from "react";
import { CSSTransition } from "react-transition-group";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <CSSTransition
        in={true}
        appear={true}
        timeout={9000}
        classNames="fade"
        unmountOnExit
      >
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img ui centered big circular image"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      </CSSTransition>
    </section>
  );
}