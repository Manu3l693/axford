import React from 'react'
import './Resources.css'
import DashboardNav from './dashboardNav'
import searchIcon from '../img/search.svg'
import DashFooter from './dashfooter'
import Tools from './tools'
import img1 from '../img/audit 1.svg'
import img2 from '../img/online-analytics 1.svg'
import img3 from '../img/document 1.svg'
import img4 from '../img/business 1.svg'
import img5 from '../img/solution 1.svg'
import img6 from '../img/presentation 1.svg'
import img7 from '../img/data-security 1.svg'
import img8 from '../img/collaboration 1.svg'
import img9 from '../img/tax-book 1.svg'
import img10 from '../img/microsoft-powerpoint 1.svg'


function Resources() {
  return (
    <div>
      <DashboardNav />
      <div className="project_launchpad_1">
        <div className="empty_space"></div>
        <div className="launch_header">
            <div className="launch_header_1">
              <h3>Resources and Tools</h3>
              <p>Understanding the types and functionalities of these resources will help streamline workflows and ensure effective management of audit projects.</p>
            </div>
        </div>
        <div className="progress_bar">
            <div className="bar_1_1">
                <div className="bar_text">
                    <p>Your Progress - <span>50%</span></p>
                </div>

                <div className="color_bar">
                    <div className="orange_1"></div>
                    <div className="whi"></div>
                </div>
            </div>
        </div>
      </div>

      <div className="search_bar">
        <div className="searc_bar_1">
          <input type="text" name="" placeholder="Search resources" />
          <div className="search_icon">
            <img src={searchIcon} alt="searc_icon" />
          </div>
        </div>
      </div>

      <div className="tools_and_resources">
        <Tools img1={img1} h1=" Audit Management" p1="Software Application" l1="View Software"  img2={img2} h2="Data Analytics" p2="Analytics Tools" l2="View Tools"  img3={img3} h3="Document Management" p3="Management Systems" l3="View Systems"  img4={img4} h4="Risk Assessment" p4="Assessment Tools" l4="View Tools"   img5={img5} h5="Compliance Tracking" p5="Tracking Systems" l5="View Systems"/>
        <Tools img1={img6} h1="Training and Development" p1="Training Resources" l1="View Resources"  img2={img7} h2="Data Security and Encryption" p2="Security Software" l2="View Software"  img3={img8} h3="Team Collaboration" p3="Collaboration Tools" l3="View Tools"  img4={img9} h4="Audit Report Generation" p4="Software Application" l4="View Software"   img5={img10} h5="PowerPoint" p5="Presentation Software" l5="View Software"/>
        <DashFooter />
      </div>
    </div>
  )
}

export default Resources
