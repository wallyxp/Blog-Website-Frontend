import React from 'react'
import './sidebar.css'

export default function SIdebar() {
  return (
    <div className='sideBar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME
            </span>
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed gravida purus. Vestibulum euismod mauris a neque semper.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                CATEGORIES
            </span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Games</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">Tech</li>
            </ul>
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className='sidebarSocial'>
                <i className="fa-brands fa-facebook sidebarIcon"></i>
                <i className="fa-brands fa-square-instagram sidebarIcon"></i>
                <i className="fa-brands fa-twitter sidebarIcon"></i>
                <i className="fa-brands fa-pinterest sidebarIcon"></i>
            </div>
        </div>
    </div>
  )
}
