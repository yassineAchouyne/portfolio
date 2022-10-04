import React from 'react'

export default function Contact() {
  return (
    <section className="contact section" id="contact">
                <h2 className="section-title">Contact</h2>

                <div className="contact__container bd-grid">
                    <form action="https://formsubmit.co/el/xeyira" method="POST" className="contact__form">
                        <input type="text" name='name' placeholder="Name" className="contact__input"/>
                        <input type="mail" name='email' placeholder="Email" className="contact__input"/>
                        <textarea name="message" id="" cols="0" rows="10" className="contact__input"></textarea>
                        <input type="button" value="Enviar" className="contact__button button"/>
                    </form>
                </div>
            </section>
  )
}
