import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className='headerTitleSm'>React & Node</span>
          <span className='headerTitleLg'>Blog</span>
        </div>
        <img src="https://w0.peakpx.com/wallpaper/1002/295/HD-wallpaper-forest-mountains-trees-coniferous-dark-u-16-9-background.jpg" alt="" className='headerImg'/>
    </div>
  )
}
