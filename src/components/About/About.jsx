import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
function About() {
  return (
    <div>

<div id='about' className="about">
    <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
    </div>
    <div className="about-section">

       
       
        <div className="about-right">
            <div className="about-para">
                <p>I will describe a positive , consious and a resilient preson. Currently, I am pursuing Btech from Arya College of Engineering and IT in computer science branch.</p>
                <p>
                In the short term, I aim to gain hands-on experience through internships and projects that allow me to apply my academic knowledge to real-world problems. I have already worked on web development internship by codeClause which has given me a solid foundation in sharpening frontend as well as backend skills.
                </p>
            </div>
        </div>

    </div>





{/* <div className="about-achievements">
    <div className="about-acheivement">
        <h1>10+</h1>
        <p>years of experience</p>
    </div>
</div>
<hr />
<div className="about-achievements">
    <div className="about-acheivement">
        <h1>90+</h1>
        <p>projects completed</p>
    </div>
</div>
<hr />
<div className="about-achievements">
    <div className="about-acheivement">
        <h1>15+</h1>
        <p>happy clients
            
        </p>
    </div>
</div> */}
</div>



    </div>
  )
}

export default About