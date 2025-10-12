import React from 'react';
import './controlAcces.css'
import DashboardNav from './dashboardNav';
import LaunchPad from './launchpad';
import DashFooter from './dashfooter'

function ControlAccess() {
  return (
    <div>
       <DashboardNav />
       <LaunchPad color1='' color2="2px solid #1D1D1C" color3="" color4=""/>

       <div className="learning">
          <div className="learning_1">
            <div className="overview_header">
               <h3> Learning to Evaluate and Improve Internal Controls</h3>
            </div>

            <div className="overview_texts">
               <p>Learn and perform assessments of the company’s internal controls to ensure compliance with regulatory standards and identify areas for improvement.</p>
            </div>
          </div>
       </div>

       <div className="steps_1">
        <div className="steps_11">

            <div className="training">
                <div className="training_header">
                    <h4>Training</h4>
                </div>

                <div className="training_text">
                    <div className="training_text_1">
                        <p>Learn about internal controls and how to check them. Check the <span>ebook and resources</span> on how to do that.</p>
                    </div>
                </div>
            </div>

            <div className="training_1">
                <div className="training_header_1">
                    <h4>Guided Assessments</h4>
                </div>

                <div className="training_text_1">
                    <div className="training_text_1_1">
                      <p>Work with your assigned senior auditor to check controls and identify key areas.</p>
                    </div>
                </div>
            </div>

            <div className="training_1">
                <div className="training_header_1">
                    <h4>Documentation</h4>
                </div>

                <div className="training_text_1">
                    <div className="training_text_1_1">
                        <p>Record your findings and prepare initial reports. Use the provided <span>templates.</span></p>
                    </div>
                </div>
            </div>
        </div>


        <DashFooter />
       </div>
    </div>
  )
}

export default ControlAccess
