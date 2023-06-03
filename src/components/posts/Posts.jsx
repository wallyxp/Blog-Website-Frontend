import React from 'react'
import './posts.css'
import Post from '../post/Post'
import { useNavigate } from 'react-router-dom'

export default function Posts() {
  let navigate = useNavigate()
  return (
    <div className="posts" onClick={ ()=> {
      navigate("/single")
    }}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}
