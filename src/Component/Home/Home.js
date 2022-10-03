import React from "react";

export default function Home() {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
        Hi,
          <br />
          I'am <span className="home__title-color">Yassine Achouyne</span>
          <br /> developpeur web
        </h1>

        <a href="#contact" className="button">
          Contact
        </a>
      </div>

      <div className="home__social">
        <a href="https://www.linkedin.com/in/yassine-achouyne-997a71239/"  className="home__social-icon">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/YassineAchouyne2022" className="home__social-icon">
          <i className="bx bxl-github"></i>
        </a>
      </div>

      <div className="home__img">
        <img src="img/yassine.png" />
      </div>
    </section>
  );
}
