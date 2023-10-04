import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <div>
            <div>
                <br />
                <h1>
                    <Link to="/Signup">Signup</Link>
                </h1>
                <br />
                <h1>
                    <Link to="/login">Login</Link>
                </h1>
                <br />
                <br />
                <br />
            </div>
            <br />
            <br />
            <br />
            <h2>{props.name ? `Welcome - ${props.name}` : 'Login please'}</h2>
        </div>
    )
}

export default Home
