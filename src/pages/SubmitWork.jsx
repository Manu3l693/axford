import React from 'react'
import DashboardNav from './dashboardNav';
import './Resources.css'
import './submitwork.css'
import DashFooter from './dashfooter';


function SubmitWork() {
  return (
    <div>
      <DashboardNav />
      <div className="project_launchpad_1">
        <div className="empty_space"></div>
        <div className="launch_header">
            <div className="launch_header_1">
              <h3>Submit Your Work</h3>
              <p className='submit_work_1'>Please fill out the form below to submit your work. Ensure all required fields are completed. For any issues or questions, feel free to contact us at <span>audit@group.com</span>. If you need to upload a large file, please use the optional link provided.</p>
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

      <div className="submit_email">
        <div className="submit_email_1">
            <div className="email_submit">
                <div className="email_header">
                    <h3>Submission Email:</h3>
                </div>

                <div className="email_texts">
                    <p>Please submit your work using the email address <span>auditprojectlaunch@gmail.com</span></p>
                    <p>For any queries or to submit additional information, please email us at <span>submissions@company.com</span></p>
                </div>
            </div>

            <div className="large_file">
                <h3>Optional Large File Upload:</h3>
                <p>If you need to upload a large file, please use this link <span>https://www.example.com/large-file-upload</span>.</p>
            </div>
        </div>


        <DashFooter />
      </div>
    </div>
  )
}

export default SubmitWork
