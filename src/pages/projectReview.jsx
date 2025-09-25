import React from 'react';
import './projectReview.css';
import DashboardNav from './dashboardNav';
import LaunchPad from './launchpad';
import { Link } from 'react-router-dom';
import DashFooter from './dashfooter'

function ProjectReview() {

    const others = [
      {links: 'Others', color: '#000000', textDecoration: 'none', fontWeight: '700'},
      {links: 'About Client', color: '#585959', textDecoration: 'none', fontWeight: '400'},
      {links: 'Project File', color: '#000000', textDecoration: 'underline', fontWeight: '400'}
    ]
  return (
    <div>
     <DashboardNav />
     <LaunchPad color1='2px solid #1D1D1C' color2="" color3="" color4=""/>

      <div className="employee">
        <div className="overview">
          <div className="overview_header">
            <h3>Employee Responsibilities Overview</h3>
          </div>

          <div className="overview_texts">
            <p>As part of the Audit Project Launchpad team, your role is pivotal in ensuring the successful implementation and execution of this client project. Here’s an overview of what is expected from you:</p>
          </div>
        </div>
      </div>

      <div className="about_11">
          <div className="about_text">
            <div className="about_text_1">
              <div className="about_header">
                <h3>About</h3>
              </div>

              <div className="about_txt1">
                  <div className="about_txt_1">

                    <div className="txt_content_1">
                      <p>The Audit Project Launchpad is a critical client engagement aimed at revolutionizing audit processes for enhanced efficiency and effectiveness. The project's primary objective is to address the challenge of disparate audit procedures and tools across departments, which have led to inconsistencies in reporting and inefficiencies in data management.</p>
                    </div>

                    <div className="txt_content_1">
                      <p>As part of this initiative, your role as a team member is pivotal. You will collaborate closely with the development team to conceptualize, design, and deploy a centralized audit platform. This platform will unify audit resources and tools, providing a cohesive framework for standardized audit procedures, including protocols, checklists, and templates. By implementing these standardized processes, the project aims to streamline audit workflows, improve data accuracy, and facilitate more insightful reporting for client stakeholders.</p>
                    </div>

                    <div className="txt_content_1">
                      <p>Your responsibilities extend beyond platform development. You will also play a key role in client engagement, working directly with stakeholders to understand their requirements, gather feedback, and ensure the platform aligns with their operational needs. Additionally, you will conduct training sessions to onboard audit teams onto the new platform, fostering adoption and proficiency in utilizing the standardized procedures effectively.</p>
                    </div>

                  </div>
              </div>
            </div>

            <div className="about_text_link">
                <div className="about_client_others_link">
                  <ul>
                    {others.map((other, index) => <li key={index}><Link to="" style={{textDecoration: other.textDecoration, fontWeight: other.fontWeight, color: other.color}}>{other.links}</Link></li>)}
                  </ul>
                </div>
            </div>
          </div>
        
        <DashFooter />
      </div>
    </div>
  )
}

export default ProjectReview
