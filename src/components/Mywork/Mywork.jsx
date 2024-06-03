import React from 'react'
import './Mywork.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data from "../../assets/mywork_data.js"
import arrow_icon from "../../assets/arrow_icon.svg"

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest Work</h1>
            <img src={theme_pattern} alt="" />

        </div>
        <div className="mywork-container">
       {mywork_data.map((work,index)=>{
        return <img src={work.w_img} key={index} alt="" srcset="" />

       })}     

     </div>
        <div className="mywork-showmore">
            <p> <a href="https://github.com/shreya792/">Show More</a></p>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
  )
}

export default Mywork