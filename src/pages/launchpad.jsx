import React from 'react';
import './launchpad.css'
import { Link } from 'react-router-dom';

function LaunchPad(props) {
    const color1 = props.color1
    const color2 = props.color2
    const color3 = props.color3
    const color4 = props.color4
    const projects = [
        {first: 'Project Review', path: '/projectreview', color: color1 },
        {first: 'Control Assessment', path: '/control', color: color2},
        {first: 'Client Interviews', path: '/', color: color3},
        {first: 'Independent Audits', path: '/', color: color4},
    ]

  return (
    <div>
      <div className="project_launchpad">
        <div className="empty_space"></div>
        <div className="launch_header">
            <h3>Project Launchpad</h3>
            <p>Below, you’ll find a detailed breakdown of your first tasks and assignments for <span>5 weeks.</span> </p>
        </div>
        <div className="progress_bar">
            <div className="bar_1">
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

      <div className="project_nav">
        <ul>
            {projects.map((pro, index) => <li key={index} style={{borderBottom: pro.color}}><Link to={pro.path}>{pro.first}</Link></li>)}
        </ul>
      </div>
      
    </div>
  )
}

export default LaunchPad
