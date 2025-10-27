import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {urlConfig} from '../../config';
import { useApp } from '../../context';

export default function Navbar() {
    const { setIsLoggedIn, userName } = useAppContext();

 
    const profileSection=()=>{
      navigate(`/app/profile`);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id='navbar_container'>
        <a className="navbar-brand" href={`${urlConfig.backendUrl}/app`}>GiftLink</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/home.html">Home</a> {/* Link to home.html */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app">Gifts</Link> {/* Updated Link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app/search">Search</Link>
            </li>
     
          </ul>
        </div>
      </nav>
        </>
    )
}
