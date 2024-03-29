import React from 'react'

const LoginSlide = () => {
    return (
        <div className="login-slide container-fluid">
            <div className="login-slide-text-content">
                Join the <strong>Competitive Coding Community</strong> <br />
                Practice coding, prepare for contests, and win challenges.
            </div>
            <div className="login-buttons">
                <button className="login-button" onClick={() => window.location.href = 'https://www.google.com'}>Login</button>
                <button className="login-button" onClick={() => window.location.href = 'https://www.google.com'}>Sign Up</button>
            </div>
        </div>
    );
}

export default LoginSlide;