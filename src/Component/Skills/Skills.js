import React from "react";

export default function Skills() {
  return (
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills__container bd-grid">
          <div>
            <h2 className="skills__subtitle">Profesional Skills</h2>
            <p className="skills__text">
              
            </p>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-html5 skills__icon"></i>
                <span className="skills__name">HTML5</span>
              </div>
              <div className="skills__bar skills__html"></div>
              <div>
                <span className="skills__percentage">95%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-css3 skills__icon"></i>
                <span className="skills__name">CSS3</span>
              </div>
              <div className="skills__bar skills__css"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-javascript skills__icon"></i>
                <span className="skills__name">JAVASCRIPT</span>
              </div>
              <div className="skills__bar skills__js"></div>
              <div>
                <span className="skills__percentage">82%</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-react skills__icon"></i>
                <span className="skills__name">React</span>
              </div>
              <div className="skills__bar skills__react"></div>
              <div>
                <span className="skills__percentage">40%</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxs-php skills__icon"style={{fontSize:"16px"}}>php</i>
                <span className="skills__name">PHP</span>
              </div>
              <div className="skills__bar skills__php"></div>
              <div>
                <span className="skills__percentage">91%</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-jquery skills__icon"></i>
                <span className="skills__name">JQUERY</span>
              </div>
              <div className="skills__bar skills__jquery"></div>
              <div>
                <span className="skills__percentage">20%</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxs-php skills__icon"style={{fontSize:"16px"}}>mysql</i>
                <span className="skills__name">MY SQL</span>
              </div>
              <div className="skills__bar skills__sql"></div>
              <div>
                <span className="skills__percentage">75%</span>
              </div>
            </div>

          </div>

          

          <div>
            <img src="img/" alt="" className="skills__img" />
          </div>
        </div>
      </section>
  );
}
