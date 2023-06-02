import React from 'react'
import './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SIdebar from '../../components/sidebar/SIdebar'

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
