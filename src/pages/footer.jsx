import React from "react";
import {Link} from 'react-router-dom'
import './footer.css'

function Footer(){

    const quickLinks = [
            {linkname: "Home", path: "/"}, 
            {linkname: "About Us", path: "/"}, 
            {linkname: "Services", path: "/"}, 
            {linkname: "Careers", path: "/"}, 
            {linkname: "Blog", path: "/"}, 
            {linkname: "Contact", path: "/"}
        ]
    
        const follow_us = [
            {link: 'Facebook', toLink: '/'},
            {link: 'Twitter', toLink: '/'},
            {link: 'LinkedIn', toLink: '/'}, 
            {link: 'Instagram', toLink: '/'}
        ]
    
        const legal = [
            {legalLink: 'Private Policy', link: '/'},
            {legalLink: 'Terms of Service', link: '/'},
            {legalLink: 'Cookie of Policy', link: '/'}
        ]
        
    return(
        <div>
            <footer>
             <div className="footer_1">
                <div className="footer_links">
                    <div className="contact-us">
                        <div className="contact-header">
                            <h3>Contact Us</h3>
                        </div>

                        <div className="head-office">
                            <p><span>Head Office:</span><br/>123 Finance Street, Suite 456 City, Country, ZIP Code</p>
                        </div>

                        <div className="phone">
                            <p>Phone:+1 (555) 123-4567</p>
                        </div>

                        <div className="email">
                            <p>Email: <span>contact@company.com</span></p>
                        </div>

                    </div>

                    <div className="quick-links">
                        <div className="quick-header">
                            <h3>Quick Links</h3>
                        </div>

                        <div className="quick_link_1">
                           <ul>
                             {quickLinks.map((quick, index) => <li key={index}><Link to={quick.path}>{quick.linkname}</Link></li>)}
                           </ul>
                        </div>
                    </div>

                    <div className="follow-us">
                        <div className="follow-head">
                            <h3>Follow Us</h3>
                        </div>

                        <div className="follow_link">
                            <ul>
                                {follow_us.map((follow, index) => <li key={index}><Link to={follow.toLink}>{follow.link}</Link></li>)}
                            </ul>
                        </div>
                    </div>

                    <div className="legal">
                        <div className="legal-head">
                            <h3>Legal</h3>
                        </div>

                        <div className="legal-links">
                            <ul>
                              {legal.map((leg, index) => <li key={index}><Link to={leg.link}>{leg.legalLink}</Link></li>)} 
                            </ul>
                        </div>
                    </div>
                </div>

                 <div className="copy-rights">
                    <div className="copy-right-text">
                        <p>© 2024 Axford. All rights reserved.</p>
                    </div>
                 </div>
             </div>
           </footer>
        </div>
    )
}

export default Footer;