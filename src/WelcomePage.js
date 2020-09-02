import React from 'react'
import {Link} from 'react-router-dom';

function WelcomePage() {
    return (
        <div>
            <Link to="/Login">
            <button>Login</button>
            </Link>
            <Link to="/SignUp">
            <button>Sign Up</button>
            </Link>
        </div>
    )
}

export default WelcomePage
