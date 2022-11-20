import React from 'react'
import Card from '../Sec_4/Card'

const Section_4 = () => {
  return (
    <>
    <div className="saysJob">
    <div className="saysJob-text">
      <h3>What Says Job Seeker About Us</h3>
      <p>Various positive reviews from workers at Jobsidian</p>
    </div>
    </div>
    <div className="main-card">
        <div className="cards">
            <Card/>
            
            
        </div>
               <div className="dots">
                <div type="radio" name="dot" id="one"></div>
                <div type="radio" name="dot" id="two"></div>
                <div type="radio" name="dot" id="three"></div>
               </div>

              <div className="button">
                <label for="one" className="active one"></label>
                <label for="two" className="two"></label>
              </div>
      </div>
    </>
  )
}

export default Section_4