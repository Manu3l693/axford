import {Link} from 'react-router-dom';
import './Department.css'
import {React, useState} from 'react';

function Department(){

    const [click, setClick] = useState(false);
    const [width, setWidth] = useState('0px');
    const [fontSize, setFontSize] = useState('0px');
    function handleClick(){
        setClick(!click)
        setWidth(w => w === '0px' ? '300px' : '0px')
        setFontSize(f => f === '0px'? '15px' : '0px')
    }

    const pages = [
        {name: 'Explore', path:"/Explore"},
        {name: 'Departments', path:"/Department", color: '2px solid red'},
        {name: 'Dashboard', path:"/"},
        {name: 'Log out', path:"/logout"},
    ]

    return(
        <div>
            <nav className="navbar">
                <div className="logo">
                    <div className='dot-logo'></div>
                    <Link className='logo-name' to={"/"}>Axford & Co.</Link>
                    <button className='navbutton hidden' onClick={handleClick}><i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i></button>
                </div>

                <ul className='nav-links'>
                    {pages.map((page, index)=> <li key={index} style={{borderBottom: page.color}}><Link className='page-link' to={page.path}>{page.name}</Link></li>)}
                </ul>
            </nav>

            <div className="page-links-desktop " id='Page-links' style={{width: width}}>
              <button className='closebtn' onClick={handleClick} id='btn-hidden'><i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i></button>
                <div className="page-small-link" style={{width: width}}>
                   <ul className='ul-links' style={{width: width}}>
                      {pages.map((page, index) => <li key={index}><Link to={page.path} className='page-link' style={{fontSize: fontSize}}>{page.name}</Link></li>)}              
                   </ul>             
                </div>                      
            </div>


        </div>
    );
}

export default Department;