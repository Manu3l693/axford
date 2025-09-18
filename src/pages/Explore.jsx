import React, {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import './Explore.css'
import Footer from './footer';
import video from '../img/vecteezy_two-creative-business-people-meeting-and-planning-use-post_33857742.mp4';
import photo1 from '../img/eca4c2ff188b878d73b699a0eabd1cb9076ae0a1.jpg';
import photo2 from '../img/03258d75341a78484305434b80db5a3af84dff3c.jpg';
import photo3 from '../img/d79a7198e9e95fe91f19458960094703d6901c81.jpg';
import photo4 from '../img/02c068dcaa3a6f44fa8d69d6e5cbe06b79124587.jpg';
import imp1 from '../img/4c07d76dad6449b9cc0aeeccb2f591f02b0e6173.jpg';
import imp2 from '../img/42838658a60ebbe6239a47d8e88f7626c151d368.jpg';
import imp3 from '../img/ceb84dc9e8c8d54a226b841b728e2d4b240d3c70.jpg';
import imp4 from '../img/bd42acf9a11f375d8a8e457b1bb6cb7b0ec37197.jpg';
import keyInf1 from '../img/international-client 1.svg';
import keyInf2 from '../img/project 1.svg';
import keyInf3 from '../img/badge 1.svg';
import FirstCarousel from '../firstCarousel';

export default function ExplorePage(){
    const[click, setClick] = useState(false);
    const[width, setWidth] = useState('0px');
    const[fontSize, setFontSize] = useState('0px')
    const[play, setPlay] = useState(false);

    
    const pages = [
        {name: 'Explore', path:"/Explore", color: '2px solid #FF3D00'},
        {name: 'Departments', path:"/Department"},
        {name: 'Dashboard', path:"/"},
        {name: 'Log out', path:"/logout"},
    ]

    function handlleClick(){
        setClick(!click)
       setWidth(w => w === '0px' ? '300px' : '0px')
       setFontSize(f => f === '0px' ? '15px' : '0px')
    }

    const videoRef = useRef(null);

    function handleVideo(){
        setPlay(!play);

        if(videoRef.current){
            videoRef.current.play()
        }else{
            videoRef.current.pause()
        }
    }

    const important_contacts = [
        {image: imp1, name: 'Lisa Brown', role: 'HR Manager'}, 
        {image: imp2, name: 'Mark Anderson', role: 'IT Support Coordinator'}, 
        {image: imp3, name: 'Michael Thompson', role: 'Director of all departments'}, 
        {image: imp4, name: 'Dave Brendan', role: 'Public Relations Manager'}
    ]

    const key_information = [
        {image: keyInf1, header: 'Clients Managed', text: "1.2k managed potential clients worldwide. We've successfully connected with a wide array of clients across different sectors, reflecting our versatile approach and global reach"}, 
        {image: keyInf2, header: 'Projects Completed', text: '3k successful projects completed. Our team has delivered over 3,000 projects, ensuring quality and timely completion for our clients.'}, 
        {image: keyInf3, header: 'Awards Received', text: '5 international awards received. Our commitment to excellence has been recognized with five prestigious international awards, highlighting our innovation and leadership.'}
    ]
    return(
        <div>
            <nav className="navbar">
                <div className="logo">
                    <div className='dot-logo'></div>
                    <Link className='logo-name' to={"/"}>Axford & Co.</Link>
                    <button className='navbutton hidden' onClick={handlleClick}><i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i></button>
                </div>

                <ul className='nav-links'>
                    {pages.map((page, index)=> <li key={index} style={{borderBottom: page.color}}><Link className='page-link' to={page.path}>{page.name}</Link></li>)}
                </ul>
            </nav>

            <div className="page-links-desktop " id='Page-links' style={{width: width}}>
                <button className='closebtn' onClick={handlleClick} id='btn-hidden'><i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i></button>
                <div className="page-small-link" style={{width: width}}>
                    <ul className='ul-links' style={{width: width}}>
                        {pages.map((page, index) => <li key={index}><Link to={page.path} className='page-link' style={{fontSize: fontSize}}>{page.name}</Link></li>)}
                    </ul>
                </div>
            </div>

            <div className="welcome-onboard">
                <div className="welcome_text">
                    <div className="welcome-text">
                        <h1>Welcome Onboard!</h1>
                        <p>We're excited to have you with us! To help you get started, please watch the introductory video below to familiarize yourself with our company and its structure.</p>
                        <button onClick={handleVideo}><div className="video-icon"><i className={play ? "fa-solid fa-play" : "fa-solid fa-pause"}></i></div> Watch the Video</button>
                    </div>
                </div>

                <div className="play-video">
                    <video ref={videoRef} loop muted className='video1'>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>

            </div>

            <div className="about-us">
                <div className="about-us-1">
                    <div className="ab-text">
                        <h2>About Us</h2>
                    </div>
                    <div className="vector-6">
                        <div className="vector-6-1"></div>
                    </div>
                </div>

                <div className="about-us-content">
                    <div className="about-text-content">
                        <p><span>Axford & Co</span>. epitomizes excellence in the accounting industry, blending decades of expertise with a commitment to integrity and client-centric solutions. Specializing in tailored financial services, from meticulous tax advisory to comprehensive audit and assurance, we empower clients across diverse sectors to navigate complexities with confidence. Embracing cutting-edge technology and a dedication to personalized service, we ensure accuracy, efficiency, and strategic insight in every engagement. At Axford & Co., exceeding expectations is not just a goal; it's our standard, redefining reliability and innovation in accounting services.</p>
                    </div>
                </div>
            </div>

            <div className="out-founders-1">
                <div className="our-founder-texts">
                    <h2>Our Founders</h2>
                </div>

                <div className="our-founder-photo">
                    <div className="our-founder-photo-1">
                        <div className="indiv-1">
                            <img src={photo1} alt="" />
                            <div className="nam-occ-1">
                                <h3>John Smith</h3>
                                <p>CEO and visionary leader.</p>
                            </div>
                        </div>

                        <div className="indiv-1">
                            <img src={photo2} alt="" />
                            <div className="nam-occ-1">
                                <h3>Jane Doe</h3>
                                <p>COO overseeing daily operations.</p>
                            </div>
                        </div>

                        <div className="indiv-1">
                            <img src={photo3} alt="" />
                            <div className="nam-occ-1">
                                <h3>Mariam Adeshina</h3>
                                <p>CFO managing financial plann...</p>
                            </div>
                        </div>

                        <div className="indiv-1">
                            <img src={photo4} alt="" />
                            <div className="nam-occ-1">
                                <h3>Richard Frey</h3>
                                <p>CTO driving technological inn...</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

           <FirstCarousel />

           <div className="getting-started">
                <div className="started-header">
                    <h2>Getting Started</h2>
                    
                    <div className="new-hires">
                        <div className="red-dot"></div>
                        <p>New Hires</p>
                    </div>
                </div>

                <div className="office_hour">
                    <div className="office_hour_1">
                        
                        <div className="our_reg_1">
                            <div className="reg1">
                                <div className="reg1-heading">
                                    <h4>Office Hours</h4>
                                </div>

                                <div className="reg1-text">
                                    <p>Our regular office hours are from 9:00 AM to 5:00 PM, Monday through Friday. Please ensure you're available during these hours and ready to engage with your team.</p>
                                </div>
                            </div>


                            <div className="reg2">
                                <div className="reg2-heading">
                                    <h4>Contact Information</h4>
                                </div>

                                <div className="reg2-text-list">
                                    <ul>
                                        <li>HR Manager: Lisa Brown (<span>lisa.brown@company.com</span>, +1 555-123-4567)</li>
                                        <li>IT Support: <span>support@company.com</span>, +1 555-234-5678</li>
                                        <li>Department Heads: Refer to the internal directory for specific contacts</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="our_reg_2">
                            <div className="our_reg_1">
                            <div className="reg1">
                                <div className="reg1-heading">
                                    <h4>Onboarding Schedule</h4>
                                </div>

                                <div className="reg1-text">
                                    <p> Your first week will include a series of virtual orientation sessions and training to familiarize you with our processes and tools. Here's a brief overview, <span>click here.</span></p>
                                </div>
                            </div>

                            <div className="reg2">
                                <div className="reg1-heading">
                                    <h4> Employee Portal</h4>
                                </div>

                                <div className="reg1-text">
                                    <p>Access important resources, company news, and updates through our Employee Portal: <span>Employee Portal Link.</span>This portal will be your go-to for everything you need to stay informed and connected.</p>
                                </div>
                            </div>


                            
                        </div>
                        </div>
                    </div>
                </div>
           </div>

           <div className="important_contacts">
               <div className="important_contacts_1">
                 <div className="important_contact_texts">
                    <h2>Important Contacts</h2>
                </div>

                <div className="important_people">
                    <div className="important_people_1">
                        <div className="important_image">
                            <img src={important_contacts[0].image} alt="img" />
                        </div>

                        <div className="important_details">
                            <h4>{important_contacts[0].name}</h4>
                            <p>{important_contacts[0].role}</p>
                        </div>
                    </div>

                    <div className="important_people_1">
                        <div className="important_image">
                            <img src={important_contacts[1].image} alt="img" />
                        </div>

                        <div className="important_details">
                            <h4>{important_contacts[1].name}</h4>
                            <p>{important_contacts[1].role}</p>
                        </div>
                    </div>

                    <div className="important_people_1">
                        <div className="important_image">
                            <img src={important_contacts[2].image} alt="img" />
                        </div>

                        <div className="important_details">
                            <h4>{important_contacts[2].name}</h4>
                            <p>{important_contacts[2].role}</p>
                        </div>
                    </div>

                    <div className="important_people_1">
                        <div className="important_image">
                            <img src={important_contacts[3].image} alt="img" />
                        </div>

                        <div className="important_details">
                            <h4>{important_contacts[3].name}</h4>
                            <p>{important_contacts[3].role}</p>
                        </div>
                    </div>
                </div>

               </div>
           </div>

           <div className="key_information11">
            <div className="key_information_1">
                <div className="key-info-text">
                    <h2>Key Information</h2>
                </div>

                <div className="key-info-img-cont">
                    <div className="key-info-img">
                        <div className="keycont-1">
                            <div className="keyimg">
                                <img src={key_information[0].image} alt="" />
                            </div>

                            <div className="key_header">
                                <h3>{key_information[0].header}</h3>
                            </div>

                            <div className="key_content-text">
                                <p>{key_information[0].text}</p>
                            </div>
                        </div>

                        <div className="keycont-1">
                            <div className="keyimg">
                                <img src={key_information[1].image} alt="" />
                            </div>

                            <div className="key_header">
                                <h3>{key_information[1].header}</h3>
                            </div>

                            <div className="key_content-text">
                                <p>{key_information[1].text}</p>
                            </div>
                        </div>

                        <div className="keycont-1">
                            <div className="keyimg">
                                <img src={key_information[2].image} alt="" />
                            </div>

                            <div className="key_header">
                                <h3>{key_information[2].header}</h3>
                            </div>

                            <div className="key_content-text">
                                <p>{key_information[2].text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>

           <div className="what_our_client">
             <div className="what_they_say">
                <h2>What Our Clients Are Saying</h2>
                
                <div className="what-text">
                    <p>Our clients are at the heart of everything we do. Here are some testimonials from clients who have experienced our commitment to excellence and innovation firsthand.</p>
                </div>
             </div>

             <div className="quotations">
                <div className="quotation_1">
                    <div className="quote-img">
                        <p> ,,</p>
                    </div>
                    <div className="quote-text">
                        <p>"Working with Axford & co. has transformed our financial operations. Their expertise and dedication have streamlined our processes, saving us both time and money. Truly a game-changer!"</p>
                    </div>
                    <div className="quote_headers">
                        <h4>John Doe</h4>
                        <p>CEO of Tech Innovators</p>
                    </div>
                </div>
             </div>

             <div className="client_img">
                <div className="client_img_1">
                    <div className="client1"></div>
                    <div className="client2"></div>
                    <div className="client3"></div>
                    <div className="client4">
                        <p>10+</p>
                    </div>
                </div>
             </div>
           </div>

           <Footer />
        </div>
    );
}