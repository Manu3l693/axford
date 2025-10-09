import {Link} from 'react-router-dom';
import {React, useState} from 'react';
import './Department.css'
import img1 from '../img/e918c8a8508c2fee4428204a2fa3e73d6578e08e.jpg';
import img2 from '../img/9c9e3d52d7c29af369a36dc0624ce11258188dfb.jpg';
import img3 from '../img/3b07ffbbb91ed199495cb96d497d94e5355f3966.jpg';
import img4 from '../img/59b87147774abf25594dec4d42ed77de7b5929cd.jpg';
import img5 from '../img/b94ec3c5a1483aa6cacb2aa2244edd5dc85e1704.jpg';
import img6 from '../img/e9c2f8cb58a579c94de5af730f510251af8e6bf1.jpg';
import img7 from '../img/15c1211cdc097ee291d0ba812ae70ccbb72eb378.jpg';
import TheyDo from './theyDo';
import ReverseTheyDo from './reverseTheyDo';
import Footer from './footer.jsx'

function Department(){

        const [mobileWidth, setMobileWidth] = useState('0px')
        const [trans, setTrans] = useState('0')
        const [click, setClick] =useState(false)
        const [fontSize, setFontSize] = useState('0px')
        const [cancel, setCancel] = useState('40px')
        const [cancelSize, setCancelSize] = useState('0px')
    
        const changeThing = () => {
            setMobileWidth(m => m === '0px' ? '300px' : '0px')
            setTrans('all 0.6s')
            setClick(!click)
            setFontSize(f => f === '0px' ? '12px' : '0px' )
            setCancel(c => c ==='40px' ? '0' : '40px')
            setCancelSize(cz => cz === '0px' ? '15px' : '0px')
        }

        const links = [
        {name: 'Explore', path: '/Explore', color: 'transparent'}, 
        {name: 'Departments', path: '/Department', color: '2px solid #FF3D00'}, 
        {name: 'Dashboard', path: '/Dashboard', color: 'transparent'}, 
        {name: 'Log out', path: '/logout', color: 'transparent'}
        ]

    const images = [img1, img2, img3, img4, img5, img6, img7];
    const whatTheyDo = [
        {header: 'Audit and Assurance', member: '25 Members', theydo: 'What They Do', audit: 'The Audit and Assurance department is responsible for examining financial records and processes to ensure accuracy and compliance with regulatory standards. They conduct internal and external audits, assess risk management frameworks, and provide recommendations to improve financial governance. Their work helps clients maintain transparency, identify potential issues before they escalate, and enhance the reliability of their financial reporting.', keyy: 'Key Achievement', conducted: 'Conducted over 500 comprehensive audits in the past year, identifying critical areas for improvement and ensuring regulatory compliance.', headOf: 'Head of Department', lee: 'David Lee, Director of Audit and Assurance'},
        {header: 'Advisory and Consulting', member: '15 Members', theydo: 'What They Do', audit: 'The Advisory and Consulting department provides strategic advice to help businesses improve their performance and achieve their goals. They offer services in areas such as business strategy, risk management, mergers and acquisitions, and operational improvement. By leveraging industry insights and analytical tools, they help clients enhance efficiency, manage risks, and capitalize on growth opportunities.', keyy: 'Key Achievement', conducted: 'Advised on 20 successful mergers and acquisitions in the past year, contributing to significant business growth for clients.', headOf: 'Head of Department', lee: ' Michael Thompson, Director of Advisory Services'},
        {header: 'Tax Services', member: '20 Members', theydo: 'What They Do', audit: 'The Tax Services department specializes in tax planning, compliance, and advisory services for both individuals and businesses. They prepare and file tax returns, develop tax strategies to minimize liabilities, and ensure compliance with local, national, and international tax regulations. Their expertise helps clients navigate complex tax laws and make informed decisions that optimize their financial outcomes.', keyy: 'Key Achievement', conducted: "Successfully reduced clients' tax liabilities by an average of 15% through effective tax planning and compliance strategies.", headOf: 'Head of Department', lee: 'Jane Anderson, Head of Tax Services'},
        {header: 'Financial Planning and Analysis', member: '12 Members', theydo: 'What They Do', audit: 'The Financial Planning and Analysis department focuses on budgeting, forecasting, and analyzing financial performance. They create financial models to project future financial outcomes, assess investment opportunities, and develop strategies to optimize financial performance. Their insights support decision-making processes and help clients achieve their financial objectives.', keyy: 'Key Achievement', conducted: "Developed financial models that improved clients' budgeting accuracy by 20% and supported long-term strategic planning.", headOf: 'Head of Department', lee: 'Rachel Adams, Chief Financial Officer (CFO)'},
        {header: 'Forensic Accounting', member: '10 Members', theydo: 'What They Do', audit: 'The Forensic Accounting department investigates financial discrepancies, fraud, and embezzlement. They conduct forensic audits, gather evidence for legal proceedings, and provide expert witness testimony. Their meticulous analysis helps uncover financial misconduct, supports litigation, and assists in the recovery of misappropriated assets.', keyy: 'Key Achievement', conducted: 'Conducted high-profile forensic investigations that led to the recovery of $5 million in misappropriated funds.', headOf: 'Head of Department', lee: 'Laura Mitchell, Head of Forensic Accounting'},
        {header: 'Bookkeeping and Payroll', member: '18 Members', theydo: 'What They Do', audit: 'The Bookkeeping and Payroll department manages the day-to-day financial transactions of clients, including recording income and expenses, maintaining ledgers, and processing payroll. They ensure that financial records are accurate and up-to-date, which is essential for financial reporting and compliance. Additionally, they handle payroll processing, ensuring that employees are paid accurately and on time.', keyy: 'Key Achievement', conducted: 'Implemented a new payroll system that improved processing time by 40% and reduced errors.', headOf: 'Head of Department', lee: 'Robert Green, Head of Bookkeeping and Payroll'},
        {header: 'Client Services', member: '8 Members', theydo: 'What They Do', audit: 'The Client Services department is dedicated to managing and nurturing client relationships. They serve as the main point of contact for clients, addressing their needs and ensuring satisfaction. They coordinate with other departments to deliver seamless and effective services, handle client inquiries, and manage feedback to continuously improve client experiences.', keyy: 'Key Achievement', conducted: 'Achieved a 95% client satisfaction rate through exceptional service and effective communication.', headOf: 'Head of Department', lee: 'Emily Davis, Client Services Manager'}
    ]

    return(
        <div>

            <div className="navbar111">
                            <div className="navbar___11">
                                <div className="axford_logo__1">
                                    <div className="axfordd_logo_dots">
                                        <div className="axford_dotss_1"></div>
                                        <Link to='/' className='black_logo'>Axford & Co.</Link>
                                    </div>
            
                                    <div className="axford_button_1">
                                        <div className="axford_butons_1"  onClick={changeThing}>
                                            <i class={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                                        </div>
                                    </div>
                                </div>
            
                                <div className="axford_logo__linkss">
                                    <ul>
                                       {links.map((link, index) => <li style={{borderBottom: link.color}} key={index}><Link to={link.path} className='black_links'>{link.name}</Link></li>)} 
                                    </ul>
                                </div>
                            </div>
            </div>
            
            <div className="mobile_view_nav"  id='mobileNav' style={{width: mobileWidth, transition: trans}}>
                            <div className="mobile_cancel">
                                <div className="mobile_cancel_1" onClick={changeThing} style={{width: cancel}}>
                                    <i style={{fontSize: cancelSize, transition: trans}} class={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                                </div>
                            </div>
            
                            <div className="mobile_links">
                                <div className="mobile_links_1">
                                    <ul>
                                        {links.map((link, index)=> <li style={{borderBottom: link.color}} key={index}><Link to={link.path} style={{fontSize: fontSize, transition: trans}}>{link.name}</Link></li>)}
                                    </ul>
                                </div>
                            </div>
            </div>
            

            <TheyDo image={images[0]} header={whatTheyDo[0].header} member={whatTheyDo[0].member} theyDo={whatTheyDo[0].theydo} audit={whatTheyDo[0].audit} keyy={whatTheyDo[0].keyy} conducted={whatTheyDo[0].conducted} headOf={whatTheyDo[0].headOf} lee={whatTheyDo[0].lee}/>
            <ReverseTheyDo image={images[1]} header={whatTheyDo[1].header} member={whatTheyDo[1].member} theyDo={whatTheyDo[1].theydo} audit={whatTheyDo[1].audit} keyy={whatTheyDo[1].keyy} conducted={whatTheyDo[1].conducted} headOf={whatTheyDo[1].headOf} lee={whatTheyDo[1].lee}/>
            <TheyDo image={images[3]} header={whatTheyDo[2].header} member={whatTheyDo[2].member} theyDo={whatTheyDo[2].theydo} audit={whatTheyDo[2].audit} keyy={whatTheyDo[2].keyy} conducted={whatTheyDo[2].conducted} headOf={whatTheyDo[2].headOf} lee={whatTheyDo[2].lee}/>
            <ReverseTheyDo image={images[4]} header={whatTheyDo[3].header} member={whatTheyDo[3].member} theyDo={whatTheyDo[3].theydo} audit={whatTheyDo[3].audit} keyy={whatTheyDo[3].keyy} conducted={whatTheyDo[3].conducted} headOf={whatTheyDo[3].headOf} lee={whatTheyDo[3].lee}/>
            <TheyDo image={images[5]} header={whatTheyDo[4].header} member={whatTheyDo[4].member} theyDo={whatTheyDo[4].theydo} audit={whatTheyDo[4].audit} keyy={whatTheyDo[4].keyy} conducted={whatTheyDo[4].conducted} headOf={whatTheyDo[4].headOf} lee={whatTheyDo[4].lee}/>
            <ReverseTheyDo image={images[6]} header={whatTheyDo[5].header} member={whatTheyDo[5].member} theyDo={whatTheyDo[5].theydo} audit={whatTheyDo[5].audit} keyy={whatTheyDo[5].keyy} conducted={whatTheyDo[5].conducted} headOf={whatTheyDo[5].headOf} lee={whatTheyDo[5].lee}/>
            <TheyDo image={images[2]} header={whatTheyDo[6].header} member={whatTheyDo[6].member} theyDo={whatTheyDo[6].theydo} audit={whatTheyDo[5].audit} keyy={whatTheyDo[6].keyy} conducted={whatTheyDo[6].conducted} headOf={whatTheyDo[6].headOf} lee={whatTheyDo[6].lee}/>

            <div className="blank_space"></div>

            <Footer />

        </div>
    );
}

export default Department;