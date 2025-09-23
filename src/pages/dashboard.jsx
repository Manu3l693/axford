import React from 'react'
import {Link} from 'react-router-dom';
import './dashboard.css'
import senior_image from '../img/f9855f488816bbd4756f4a9e986b19c0233d984f.jpg'
import DashboardNav from './dashboardNav';
import DashFooter from './dashfooter';

function Dashboard() {

  const congrats = [
    {header: 'Congratulations on joining our team!', texts: " You're now all set to embark on an exciting journey with us. Take a moment to familiarize yourself with your dashboard, and when you're ready, dive into your tasks and projects."},
    {img: senior_image, sj: ' Sarah Johnson', sa: 'Senior Auditor', se: 'sarah.johnson@example.com', am: 'Assigned mentor', bt: 'Contact'}
  ]

  return (
      <div className="dashboard_1">
        <DashboardNav />

        <div className="dashboard_content">
          <div className="dashboard_content_1">
            <div className="congratulations_content">
              
              <div className="congrat_1">
                <div className="congrat_header">
                  <h3>{congrats[0].header}</h3>
                </div>

                <div className="congrat_text">
                  <p>{congrats[0].texts}</p>
                </div>

                <div className="congrat_button">
                 <div className="congrat_button_1">
                  <button type='button'><Link to="">Explore Your Tasks</Link></button>
                 </div>
                </div>
              </div>

            </div>

            <div className="senior_auditor">
              <div className="senior_contact_info">

                <div className="senior_image">
                  <img src={congrats[1].img} alt="" />
                </div>

                <div className="senior_name">
                  <h3>{congrats[1].sj}</h3>
                  <p>{congrats[1].sa}</p>
                </div>

                <div className="assigned">
                  <p>{congrats[1].se}</p>
                  <h4>{congrats[1].am}</h4>
                </div>

                <div className="contact_button">
                  <button><Link to="">{congrats[1].bt}</Link></button>
                </div>

              </div>
            </div>
          </div>
        </div>

        <DashFooter />
     </div>
  )
}

export default Dashboard
