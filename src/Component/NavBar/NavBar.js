import React from 'react'
import "./NavBar.css"
export default function NavBar() {
  return (
    <div className="navb">
        <input type="checkbox" id="navb-check"/>
        <div className="navb-header">
          <div className="navb-title">
            <img src='img/LGGENE1 - Copie.png' /> 
          </div>
        </div>
        <div class="navb-btn">
          <label for="navb-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="navb-links">
            <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="https://formsubmit.co/el/xeyira">Contact</a></li>
            </ul>
        </div>
      </div>
  )
}
