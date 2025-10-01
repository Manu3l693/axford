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
      {img: img2, color: 'transparent', path: '/submitwork'}, 
      {img: img3, color: 'transparent'}, 
      {img: img4, color: 'transparent', path: "/resources"}, 
      {img: img5, color: '#FF3D00', path: "", showNotis, NoNotis}
    ]

    function showNotis(){
      const check = document.querySelector('#showNotis')

      if(check.classList.contains('hidden')){
        check.classList.remove('hidden')
      }else{
        check.classList.add('hidden')
      }
    }

    function NoNotis(){
      const check = document.querySelector('#showNotis')
      if(check.classList.contains('hidden')){
        check.classList.add('hidden')
      }else{
        check.classList.remove('hidden')
      }
    }
    

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
                    <Link to={icon.path} onMouseEnter={icon.showNotis} onMouseLeave={icon.NoNotis}><img src={icon.img} alt='images'/></Link>
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

       <div className="showNotis hidden" id='showNotis'>
          <div className="show_notis_text">
            <h3>Notifications</h3>
            <p>4 Unread</p>
          </div>
       </div>
    </div>
  )
}

export default DashboardNav
