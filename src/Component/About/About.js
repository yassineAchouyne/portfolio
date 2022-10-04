import React from 'react'

export default function About() {
  return (
    <div>
        <section className="about section " id="about">
                <h2 className="section-title">About</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src="img/yassine.png" alt=""/>
                    </div>
                    
                    <div>
                        <h2 className="about__subtitle">I'am Yassine Achouyne</h2>
                        <p className="about__text">Student at ISTA NTIC SAFI on the
web programming (front-end && back-end).
I am now looking for an internship.
to develop my skills.</p>           
                    </div>                                   
                </div>
            </section>
    </div>
  )
}
