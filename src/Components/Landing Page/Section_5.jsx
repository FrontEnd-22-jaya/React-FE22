import React from 'react'
import Sec5_1 from '../Sec_5/Sec5_1'
import Sec5_2 from '../Sec_5/Sec5_2'
import Sec5_3 from '../Sec_5/Sec5_3'
import Sec5_4 from '../Sec_5/Sec5_4'
import Sec5_5 from '../Sec_5/Sec5_5'

const Section_5 = () => {
  return (
    <div className="faq">
      <div className="faq-text">
        <h3>Frequently Asked Question</h3>
        <p>What do they usually say when looking for work using the app?</p>
      </div>
      <div className='wrapper'>
        <Sec5_1/>
        <Sec5_2/>
        <Sec5_3/>
        <Sec5_4/>
        <Sec5_5/>
      </div>
    </div>
  )
}

export default Section_5