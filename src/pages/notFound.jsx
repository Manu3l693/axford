import React from 'react'
import './notFound.css'
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className='page_not'>
       <div className="page_not_found">
        <div className="texts_for_page11">
            <h1>404</h1>
            <h2>page not found</h2>
            <p>Take me back to <Link to="/">Home</Link> to login again.</p>
        </div>
       </div>
    </div>
  )
}

export default NotFound
