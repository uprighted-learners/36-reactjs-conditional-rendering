import { redirect } from 'next/dist/server/api-utils'
import React, { useState } from 'react'

export default function LoginStatus() {
    // state to track if you're logged in or not
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    console.log("Logged in?: ", isLoggedIn)

    // function to toggle the login status
    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    return (
        <div>
            <h1>Welcome to our page!</h1>
            {isLoggedIn ? (
                <h2>You are logged in!</h2>
            ) : (
                <h2>You are not logged in!</h2>
            )}
            <button onClick={toggleLogin}>
                {isLoggedIn ? "Log out" : "Log in"}
            </button>
        </div>
    )
}
