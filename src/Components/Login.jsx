import React, { useState } from 'react'
import styles from './login.module.css' // Import the CSS module
import InputControl from './InputControl'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GoogleIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple'

function Login() {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errorMsg, setErrorMsg] = useState('')
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)

    const handleSubmission = () => {
        if (!values.email || !values.password) {
            setErrorMsg('Fill in all the fields.')
            return
        }
        setErrorMsg('')
        setSubmitButtonDisabled(true)
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {
                setSubmitButtonDisabled(false)
                navigate('/')
            })
            .catch((err) => {
                setSubmitButtonDisabled(false)
                setErrorMsg(err.message)
            })
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.logo}>Logo</div>
                <div className={styles.board}>
                    <p>Board. </p>
                </div>
                <div className={styles.socialIcons}>
                    <GitHubIcon className={styles.GitHubIcon} />
                    <TwitterIcon className={styles.TwitterIcon} />
                    <LinkedInIcon className={styles.LinkedInIcon} />
                </div>
            </div>
            <div className={styles.rightContainer}>
                <h1 className={styles.heading}>Sign In</h1>
                <p className={styles.text}>Sign in to your account</p>
                <div className={styles.miButtons}>
                    <button className={styles.googleButton}>
                        <GoogleIcon /> Sign in with Google
                    </button>
                    <button className={styles.appleButton}>
                        <AppleIcon /> Sign in with Apple
                    </button>
                </div>
                <div className={styles.innerBox}>
                    <InputControl
                        label="Email Address"
                        onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                        placeholder="Johndeo@gmail.com"
                    />
                    <InputControl
                        label="Password"
                        onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))}
                        placeholder="Enter Password"
                    />
                    <p className={styles.forget}>forget Password?</p>
                    <div className={styles.footer}>
                        <b className={styles.error}>{errorMsg}</b>
                        <button className="Login" disabled={submitButtonDisabled} onClick={handleSubmission}>
                            Sign In
                        </button>
                        <p>
                            Don't have an account?{' '}
                            <span className="Register">
                                <Link to="/Signup">Register Here</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
