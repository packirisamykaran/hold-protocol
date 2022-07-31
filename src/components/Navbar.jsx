import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import navbar from "./assets/navbar.png"
import "./style/Navbar.css";


export default function Navbar() {


    


    const navbarToggle = ()=>{

        const icon = document.getElementById("navbar-icon");
        icon.classList.toggle("navbar-active");

        const links = document.getElementById("links");
        links.classList.toggle("links-button-active")

        const btn = document.getElementById("btn");
        btn.classList.toggle("links-button-active");

    }


  return (
    <>
        <div className='navbar'>
            <div className="logo-icon">
                <div className="logo">
                    Hold Protocol
                </div>
                <img id='navbar-icon' src={navbar} alt="navbar" onClick={navbarToggle} />
            </div>
            
            <div className="links" id="links">
                <NavLink className="link" to="home" >Home</NavLink>
                <NavLink className="link" to="">Deposit/Withdraw</NavLink>
                <NavLink className="link" to="report">Report</NavLink>
                <NavLink className="link" to="">Stake</NavLink>
            </div>
            <div className="btn-container">
                <button id='btn'>Connect Wallet</button>  
            </div> 
        
        </div>
        <Outlet/>
    </>
  )
}


