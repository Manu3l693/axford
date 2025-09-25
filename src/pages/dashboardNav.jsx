import React from 'react'
import {Link} from 'react-router-dom';
import './dashboardNav.css'
import img1 from '../img/home.svg';
import img2 from '../img/folder.svg';
import img3 from '../img/archive.svg';
import img4 from '../img/briefcase.svg';
import img5 from '../img/bell.svg';
import junior_author_img from '../img/2588b21c8c64a52772784a3c354fa08294114e35.jpg'

function DashboardNav() {

    const icons = [
      {img: img1, color: 'transparent', path:"/Explore"},
      {img: img2, color: 'transparent'}, 
      {img: img3, color: 'transparent'}, 
      {img: img4, color: 'transparent'}, 
      {img: img5, color: '#FF3D00'}
    ]

    

  return (
    <div>
       <div className="navbar_111">
          <div className="navbar_1">
            <div className="navbar_11">
                <div className="logo1">
                    <div className="axford_dot"></div>
                    <h3>Axford & Co.</h3>
                </div>

                <div className="icons">
                  {icons.map((icon, index) => <div className='icon-images' key={index}>
                    <div className="top-color" style={{backgroundColor: icon.color}}></div>
                    <Link to={icon.path}><img src={icon.img} alt='images'/></Link>
                    </div>)}
                </div>

                <div className="auditor">
                  <button type="button"><p>Junior Auditor</p></button>
                  <div className="junior_image">
                    <img src={junior_author_img} alt="" />
                  </div>
                </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default DashboardNav
