import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
   <div className="container">
    <div className="brand-icons">
    <ul>
        <li> <FontAwesomeIcon icon={faFacebook} /></li>
        <li> <FontAwesomeIcon icon={faInstagram} /></li>
        <li> <FontAwesomeIcon icon={faTwitter} /></li>
        <li> <FontAwesomeIcon icon={faYoutube} /></li>
    </ul>
   </div>
     <div className='row footer'>
       
       <div className="col">
           <ul>
               <li>Audio Description</li>
               <li>Investor Relations</li>
               <li>Legal Notices</li>
           </ul>
       </div>
       <div className="col">
           <ul>
               <li>Help Center</li>
               <li>Jobs</li>
               <li>Cookie Preferences</li>
           </ul>
       </div>
       <div className="col">
           <ul>
               <li>Gift Cards</li>
               <li>Terms of Use</li>
               <li>Corporate Informations</li>
           </ul>
       </div>
       <div className="col">
           <ul>
               <li>Media center</li>
               <li>Privacy</li>
               <li>Contact US</li>
           </ul>
       </div>
   </div>
   
   </div>
  )
}

export default Footer