import React from "react";

function ErrorPage(){
    return(
        <div>

            <h1 style={{textAlign:"center"}}>You are not allowed to access this page</h1>
            <h2 style={{textAlign:"center"}}>Please Login to confirm its you</h2> 
            <a href="/login" style={{textAlign:"center"}}>Login</a>
        </div>

    )
}
export default ErrorPage;