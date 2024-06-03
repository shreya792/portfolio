import React from 'react'
import './Hero.css'
// import pic from '../../assets/pic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Hero() {
  return (
    <div>

<div  id='home' className="hero">
    <img  className='hero-img' src="/pic.jpg" alt="" />
    <h1><span>I am shreya ,</span> fullstack  webdeveloper </h1>
    <p>Targeting Full-Stack Developer roles with an organization of high repute with a scope of improving knowledge and further career growth. Enthusiastic Student with superior skills in working in both team-based and independent capacities.</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchorlink" offset={50} href="#contact">Connect with me</AnchorLink    ></div>
        <div className="hero-resume">
        <a href="/Shreya_webdev_CV.pdf" download="Shreya_Resume.pdf">My Resume</a>
        </div>



    </div>





</div>

    </div>
  )
}

export default Hero