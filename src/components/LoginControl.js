import React, { useState } from 'react'

// LoginButton component that calls the login function passed in as a prop
const LoginButton = (props) => {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

// LogoutButton component that calls the logout function passed in as a prop
const LogoutButton = (props) => {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

// Greet component that says "HELLO" if isLoggedIn is true and "GOODBYE" if isLoggedIn is false
const Greet = (props) => {

    // props.isLoggedIn is the isLoggedIn state passed in as a prop
    const isLoggedIn = props.isLoggedIn;

    return (
        <div>
            You are
            <b>
                {isLoggedIn ? " " : "not "}
            </b>
            {" "}logged in!
        </div>
    )
}

export default function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    // handle login
    function handleLoginClick() {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setIsLoggedIn(true)
        }, 2000)
    }

    // handle logout
    function handleLogoutClick() {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setIsLoggedIn(false)
        }, 2000)
    }

    // conditionally render the appropriate button based on the isLoggedIn state
    let button;

    // if isLoggedIn is true, render the LogoutButton component
    if (isLoading) {
        button = <button disabled>Loading...</button>
    } else if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />
    } else {
        button = <LoginButton onClick={handleLoginClick} />
    }

    return (
        <div>
            <Greet isLoggedIn={isLoggedIn} />
            {button}
        </div>
    )
}
