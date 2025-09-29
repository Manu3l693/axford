import React from 'react';
import './independent.css';
import LauncPad from './launchpad'
import DashboardNav from './dashboardNav'
import DashFooter from './dashfooter'


function Independent() {
  return (
        <div>
            <DashboardNav />
            <LauncPad color1='' color2="" color3="" color4="2px solid #1D1D1C"/>    
                
            <div className="conducting">
                  <div className="conducting_1_1">
                    <div className="overview_header">
                      <h3>Executing Independent Audits to Ensure Accuracy and Compliance</h3>
                    </div>
        
                    <div className="overview_texts">
                      <p>In this phase, you will conduct independent audits to verify the accuracy of financial records and ensure compliance with regulations.</p>
                    </div>
                  </div>
            </div>    
        
            <div className="preparation">
                  <div className="preparation_1">
                     <div className="analysis_1">
                       <div className="analysis_header_1">
                        <h4>1. Audit Planning</h4>
                       </div>
        
                       <div className="analysis_list">
                         <div className="analysis_list_1">
                          <ul>
                            <li><p>Define Objectives: Understand the purpose and scope of the audit.</p></li>
                            <li><p>Develop Audit Plan: Outline the audit steps, resources needed, and timeline.</p></li>
                            <li><p>Identify Key Areas: Determine which areas of the business to focus on based on risk assessment.</p></li>
                          </ul>
                         </div>
                       </div>
                     </div>
        
                     <div className="analysis_1">
                       <div className="analysis_header_1">
                        <h4>2. Fieldwork</h4>
                       </div>
        
                       <div className="analysis_list">
                         <div className="analysis_list_1">
                          <ul>
                            <li><p>Gather Evidence: Collect relevant documents, perform tests, and gather necessary evidence.</p></li>
                            <li><p>Perform Testing: Conduct detailed testing of transactions and controls.</p></li>
                            <li><p>Document Findings: Record observations, test results, and any discrepancies found.</p></li>
                          </ul>
                         </div>
                       </div>
                     </div>
        
                     <div className="analysis_1">
                       <div className="analysis_header_1">
                        <h4>3. Audit Reporting</h4>
                       </div>
        
                       <div className="analysis_list">
                         <div className="analysis_list_1">
                          <ul>
                            <li><p>Analyze Results: Review the collected evidence and test results to draw conclusions.</p></li>
                            <li><p>Draft Report: Prepare a detailed audit report, summarizing the findings and suggesting improvements.</p></li>
                            <li><p>Present Findings: Share the report with senior auditors and management for review and feedback.</p></li>
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

export default Independent
