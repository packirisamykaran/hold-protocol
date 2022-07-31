import React from 'react';
import { NavLink } from 'react-router-dom';
import navbar from "./assets/navbar.png"
import "./style/Navbar.css";
import { useState } from 'react';


export default function Navbar() {

    const [navbarActive, setNavbarActive] = useState(false)

    


    const navbarToggle = ()=>{

        

    }


  return (
    <>
        <div className='navbar'>
            <div className="logo-navbar">
                <div className="logo">
                    Hold Protocol
                </div>
                <img src={navbar} alt="navbar" />
            </div>
            <div className="links-button">
                <div className="links">
                    <NavLink className="link" to="" >Home</NavLink>
                    <NavLink className="link" to="">Deposit/Withdraw</NavLink>
                    <NavLink className="link" to="">Report</NavLink>
                    <NavLink className="link" to="">Stake</NavLink>
                </div>
                <button>Connect Wallet</button>   
            </div>
        </div>
    </>
  )
}


