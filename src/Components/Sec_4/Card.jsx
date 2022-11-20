import React from 'react'

const Card = () => {
  return (
    <div className="card">
      <div className="content">
        <div className="img">
          <img src="avatar.png" width="150" alt=""></img>
        </div>
        <div className="details">
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.”</p>
          <h4>Jasmine Carter, Surabaya</h4>
        </div>
      </div>
    </div>
  )
}

export default Card