import "./topbar.css"
import React from 'react'

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
            <i className="fa-brands fa-facebook topIcon"></i>
            <i className="fa-brands fa-square-instagram topIcon"></i>
            <i className="fa-brands fa-twitter topIcon"></i>
            <i className="fa-brands fa-pinterest topIcon"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="topImage"/>
            <i class="fa-solid fa-magnifying-glass topSearchIcon"></i>

        </div>
    </div>
  )
}
