import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>{/*Yaha pe hamne dark set kiya tha to dark mode enable
    ho gaya tha kyu ki hamne bootstrap se usko call kiya tha aur ab usko likhne ke badle bass hamne javascript se likha hai aur jo bhi 
    haam js se pass karenge wo likha jaega aur hame wahi mode dekhne ko mil jaega */}
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          
          
        </ul>
        {/*<form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button> 
          </form>*/}
          <div className={`form-check form-switch  text-${props.mode === "dark" ? "light" : "dark"}` } >
        <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
        
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes= {
    title:PropTypes.string

}
