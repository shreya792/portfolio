import React, { useRef, useState } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import underline from '../../assets/nav_underline.svg'
import toogle from '../../assets/menu_open.svg'
import close from '../../assets/menu_close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'



function Navbar() {
  const [menu,setmenu]=useState("home")
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0"
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px"
  }
  return (
    
    <div className="navbar">
      <div className="navbar-title">

         <h1>Shreya</h1>
        <img src={theme_pattern} alt="" />
      </div>
        <img src={toogle} onClick={openMenu} className='nav-mob-open' alt="" />
        <ul ref={menuRef} className="nav-menu">
          <img src={close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li ><AnchorLink className="anchorlink" href="#home" ><p onClick={()=>setmenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt="" srcset="" />:<></>  }</li>
            <li><AnchorLink className="anchorlink"  offset={50} href="#about"  ><p onClick={()=>setmenu("about")}>About ME</p></AnchorLink>{menu==="about"?<img src={underline} alt="" srcset="" />:<></>  } </li>
            <li><AnchorLink className="anchorlink"  offset={50} href="#services"  ><p onClick={()=>setmenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt="" srcset="" />:<></>  }</li>
            <li><AnchorLink className="anchorlink"  offset={50} href="#work"  ><p onClick={()=>setmenu("work")}>portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt="" srcset="" />:<></>  }</li>
            <li><AnchorLink className="anchorlink" offset={50} href="#contact"><p onClick={()=>setmenu("contact")}>Contact</p></AnchorLink    >{menu==="contact"?<img src={underline} alt="" srcset="" />:<></>  } </li>
        </ul>
        <div  className="nav-connect"><AnchorLink className="anchorlink" offset={50} href="#contact">Connect with me</AnchorLink    ></div>
        





    </div>
  )
}

export default Navbar