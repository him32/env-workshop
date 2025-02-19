import React from 'react'
import gbu from "../assets/gbuLogo.webp";
import sponsor1 from "../assets/AabirBioservices.png";


const Test = () => {
  return (
    <div>
        <div className="container">
            <div className="Row">
                <div className='Col-md-2'>
                    <img src={gbu} alt="Gautam Buddha University" width={75} />
                </div>
                <div className='Col-md-8'></div>
                <div className='Col-md-2'>
                <img src={sponsor1} alt="Gautam Buddha University" width={75} />

                </div>

            </div>
        </div>
    </div>
  )
}

export default test