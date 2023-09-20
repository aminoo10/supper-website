import React from 'react'
import { Link } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <div className="site-header">
        <div className="top">
            <h1>* BANNER HERE *</h1>
        </div>
        <div className="links">
            <Link to="/">HOME↓</Link>
            <Link to="/gallery">GALLERY↓</Link>
        </div>
    </div>
  )
}
