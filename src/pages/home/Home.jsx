import React from 'react'
import './home.css'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import SIdebar from '../../sidebar/SIdebar'

export default function Home() {
  return (
    <>
    <Header/>
    <div className="home">
        <Posts/>
        <SIdebar/>
    </div>
    </>
  )
}
