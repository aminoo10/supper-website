import React from 'react'
import { Link } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <div className="site-header">
        <div className="top">
            <h1>* BANNER HERE *</h1>
        </div>
        <div className="links">
            <Link to="/"><h2>HOME↓</h2></Link>
            <Link to="/gallery"><h2>GALLERY↓</h2></Link>
        </div>
    </div>
  )
}
