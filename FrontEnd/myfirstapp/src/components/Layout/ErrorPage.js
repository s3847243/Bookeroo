import React from "react";

function ErrorPage(){
    return(
        <div>

            <h1 style={{textAlign:"center"}}>You are not allowed to access this page</h1>
            <h2>Please Login to confirm its you</h2> 
            <a href="/login" style={{textAlign:"center"}}>Login</a>
            <h2>Please Sign up if you are registered</h2>
            <a href="/register" style={{textAlign:"center"}}>Sign Up</a>
        </div>

    )
}
export default ErrorPage;