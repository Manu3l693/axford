import React from 'react'
import './dashfooter.css';
import footrimg1 from '../img/phone-call-phone-call-mobile-telephone 1.svg'
import footrimg2 from '../img/message 1.svg'
import footrimg3 from '../img/plus.svg'

function DashFooter() {
  return (
    <div className='dashfooter'>
        <div className="dashfooter_1">
            <div className="ball1">
                <img src={footrimg1} alt="" />
            </div>
            <div className="ball2">
                <img src={footrimg2} alt="" />
            </div>

            <div className="ball3">
                <img src={footrimg3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default DashFooter
