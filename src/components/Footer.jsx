import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer ">
        <div className='footer-content bg-green-100 text-l text-green-600 font-bold'>
            <div>
                <p className='text-3xl text-green-600 font-bold font-serif italic'>Phone-Hub</p>
                <p>Address: Nairobi CBD, Kenya.</p>
                <p>Email: hello@phone-hub.com</p>
                <p>Tel: +254 (0) 768 140150</p>

            </div>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Products">Products</Link></li>
                        <li><Link to="/Cart">Cart</Link></li>
                        <li><Link to="/Register">Register</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><Link to="">X (Twiter)</Link></li>
                        <li><Link to="">Instagram</Link></li>
                        <li><Link to="">YouTube</Link></li>
                        <li><Link to="">Facebook</Link></li>
                        <li><Link to="">Tiktok</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <p className='text-center p-3 bg-green-200 text-l text-green-700 font-bold'>Copyright &copy; Phone-Hub 2026. All Rights Reserved. </p>
    </div>

  )
}

export default Footer