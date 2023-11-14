import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (

        <div className='nav'>
            <img className='logo' src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" alt="netflix-logo" />
            <div className="navbar">
              <ul>
                <li>Home</li>
                <li>TV shows</li>
                <li>Movies</li>
                <li>News & Popular</li>
                <li>My List</li>
                <li>Browse by Language</li>
              </ul>
            </div>
            <div className='NavSection2'>
              <ul>
                <li><FontAwesomeIcon icon={faSearch} /></li>
                <li>Children</li>
                <li><FontAwesomeIcon icon={faBell} /></li>
              </ul>
            </div>
            <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
        </div>
  
  )
}

export default Header