import React from 'react'
import '../Navbar/Navbar.css'
// import'/Navbar.css'

export default function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-bg ">

        <div className="container-fluid ">

          <a className="navbar-brand mx-5 nav-heading" href="#">Dream-Net</a>

          <button className="navbar-toggler  custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon  "></span>
          </button>
          <div className="collapse navbar-collapse nav-right" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <a className="nav-link active px-4 text-white " aria-current="page" href="#">Home</a>
              <a className="nav-link px-4 text-white  " href="#">Features</a>
              <a className="nav-link px-4 text-white" href="#">Pricing</a>
              <a className="nav-link px-4 text-white disabled">Disabled</a>
            </div>
          </div>
        </div>

      </nav>


    </>
  )
}
