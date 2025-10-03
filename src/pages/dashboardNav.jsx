import React from 'react'
import {Link} from 'react-router-dom';
import './dashboardNav.css'
import img1 from '../img/home.svg';
import img2 from '../img/folder.svg';
import img3 from '../img/archive.svg';
import img4 from '../img/briefcase.svg';
import img5 from '../img/bell.svg';
import notisimg1 from '../img/calendar 2.svg';
import notisimg2 from '../img/policy 1.svg';
import notisimg3 from '../img/online-document 1.svg';
import junior_author_img from '../img/2588b21c8c64a52772784a3c354fa08294114e35.jpg'

function DashboardNav() {

    const icons = [
      {img: img1, color: 'transparent', path:"/Explore"},
      {img: img2, color: 'transparent', path: '/submitwork'}, 
      {img: img3, color: 'transparent'}, 
      {img: img4, color: 'transparent', path: "/resources"}, 
      {img: img5, color: '#FF3D00', showNotis}
    ]

    function showNotis(){
      const check = document.querySelector('#showNotis')

      if(check.classList.contains('hidden')){
        check.classList.remove('hidden')
      }else{
        check.classList.add('hidden')
      }
    }

    const notif = ['#EDF2FE', '#EFEFEFEE']
    

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
                    <Link to={icon.path}  onClick={icon.showNotis}><img src={icon.img} alt='images'/></Link>
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

          <div className="rest_1">
            <div className="rest_1_1">
              <div className="notis_1">
                <div className="notis_1_img">
                  <div className="notis_img" style={{backgroundColor: notif[0]}}>
                    <img src={notisimg1} alt="" />
                  </div>
                </div>

                <div className="notis_1_texts">
                  <div className="notis_header">
                    <h3>Audit Report Submission Due</h3>
                    <p>The audit report for Project Launchpad is due on July 15th, 2024. Ensure all sections are completed and reviewed</p>
                  </div>
                  <div className="notis_footer">
                    <ul>
                      <p>Jun 17</p>
                      <li>2:30 pm</li>
                      <li>from Senior Auditor</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rest_1">
            <div className="rest_1_1">
              <div className="notis_1">
                <div className="notis_1_img">
                  <div className="notis_img" style={{backgroundColor: notif[1]}}>
                    <img src={notisimg2} alt="" />
                  </div>
                </div>

                <div className="notis_1_texts">
                  <div className="notis_header">
                    <h3>New Remote Work Policy</h3>
                    <p>Please review the updated company policy on remote work, effective July 1st, 2024. Details are available <span>here.</span></p>
                  </div>
                  <div className="notis_footer">
                    <ul>
                      <p>Mar 20</p>
                      <li>1:00 pm</li>
                      <li>from HR Manager</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rest_1">
            <div className="rest_1_1">
              <div className="notis_1">
                <div className="notis_1_img">
                  <div className="notis_img" style={{backgroundColor: notif[1]}}>
                    <img src={notisimg3} alt="" />
                  </div>
                </div>

                <div className="notis_1_texts">
                  <div className="notis_header">
                    <h3>Upcoming Webinar on Advanced Data Analytics</h3>
                    <p>Join the upcoming webinar on 'Advanced Data Analytics in Auditing' on June 28th, 2024, at 10:00 AM. Register <span>here.</span></p>
                  </div>
                  <div className="notis_footer">
                    <ul>
                      <p>Jun 14</p>
                      <li>4:30 pm</li>
                      <li>Training Coordinator</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rest_1">
            <div className="rest_1_1">
              <div className="notis_1">
                <div className="notis_1_img">
                  <div className="notis_img" style={{backgroundColor: notif[0]}}>
                    <img src={notisimg1} alt="" />
                  </div>
                </div>

                <div className="notis_1_texts">
                  <div className="notis_header">
                    <h3>Scheduled Maintenance</h3>
                    <p>System maintenance is scheduled for June 25th, 2024, from 2:00 AM to 4:00 AM. Please save your work and log out before this time.</p>
                  </div>
                  <div className="notis_footer">
                    <ul>
                      <p>April 17</p>
                      <li>9:00 am</li>
                      <li>IT Support Coordinator</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default DashboardNav
