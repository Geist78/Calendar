import { useState } from 'react'
import Logo from '../../assets/Logo.png';
import './Navigation.css'

function Navigation({ activeView, setActiveView }){
  return (
    <div className='Menu'>


      <div id='Scaling'>
        <p className={activeView === "Day" ? "active" : ""} onClick={() => setActiveView("Day")}>Day</p>
        <p className={activeView === "Week" ? "active" : ""} onClick={() => setActiveView("Week")}>Week</p>
        <p className={activeView === "Month" ? "active" : ""} onClick={() => setActiveView("Month")}>Month</p>
        <p className={activeView === "Year" ? "active" : ""} onClick={() => setActiveView("Year")}>Year</p>
      </div>
  <div id='line'>
        </div>
        <div id='Other'>
         <p>Settings</p>
         <p>Papierkorb</p>
         <p>Synchronisiren</p>
        </div>
  <div id='line'></div>

        <div id='footer'>
         <img id='Logo' src={Logo} alt="Logo" />
         <h1>TryStudio</h1>
        </div>
    </div>
  )
}
  

export default Navigation;
