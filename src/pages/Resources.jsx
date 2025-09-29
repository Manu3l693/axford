import React from 'react'
import './Resources.css'
import DashboardNav from './dashboardNav'


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
        </div>
      </div>
    </div>
  )
}

export default Resources
