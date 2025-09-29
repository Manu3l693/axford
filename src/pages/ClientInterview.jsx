import React from 'react'
import './ClientInterview.css'
import LauncPad from './launchpad'
import DashboardNav from './dashboardNav'
import DashFooter from './dashfooter'

function ClientInterview() {
  return (
    <div>
        <DashboardNav />
        <LauncPad color1='' color2="" color3="2px solid #1D1D1C" color4=""/>
        
        <div className="conducting">
          <div className="conducting_1">
            <div className="overview_header">
              <h3>Conducting Effective Interviews to Gather Key Client Insights</h3>
            </div>

            <div className="overview_texts">
              <p>In this phase, you will conduct and document client interviews to gather crucial insights for our auditing processes.</p>
            </div>
          </div>
        </div>

        <div className="preparation">
          <div className="preparation_1">
             <div className="analysis_1">
               <div className="analysis_header_1">
                <h4>1. Preparation</h4>
               </div>

               <div className="analysis_list">
                 <div className="analysis_list_1">
                  <ul>
                    <li><p>Research Clients: Learn about the clients you will be interviewing, including their business operations and financial practices.</p></li>
                    <li><p>Develop Interview Questions: Create a list of questions aimed at understanding the client's processes, controls, and potential risks.</p></li>
                    <li><p>Schedule Interviews: Coordinate with clients to set up interview times.</p></li>
                  </ul>
                 </div>
               </div>
             </div>

             <div className="analysis_1">
               <div className="analysis_header_1">
                <h4>2. Conducting Interviews</h4>
               </div>

               <div className="analysis_list">
                 <div className="analysis_list_1">
                  <ul>
                    <li><p>Engage with Clients: Conduct interviews in a professional and respectful manner, ensuring you cover all key areas.</p></li>
                    <li><p>Take Detailed Notes: Document the client’s responses accurately, noting any concerns or areas that need further investigation.</p></li>
                    <li><p>Clarify Doubts: Ask follow-up questions to ensure you fully understand the client’s processes and any issues they mention.</p></li>
                  </ul>
                 </div>
               </div>
             </div>

             <div className="analysis_1">
               <div className="analysis_header_1">
                <h4>3. Post-Interview Analysis</h4>
               </div>

               <div className="analysis_list">
                 <div className="analysis_list_1">
                  <ul>
                    <li><p>Review Notes: Analyze your notes to identify key insights and potential red flags.</p></li>
                    <li><p>Summarize Findings: Create a summary of the interview findings, highlighting important points and areas for follow-up.</p></li>
                    <li><p>Report Insights: Prepare a report to present your findings to your supervisor and the audit team.</p></li>
                  </ul>
                 </div>
               </div>
             </div>
          </div>

        <DashFooter />
        </div>
    </div>
  )
}

export default ClientInterview
