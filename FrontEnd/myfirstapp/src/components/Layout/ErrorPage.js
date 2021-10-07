import React from "react";

function ErrorPage(){
    return(
        <div style={{margin: "auto", marginTop:"200px" , width: "30%", textAlign: "center"}}>
            <a href="/login" style={{
             padding: "20px 20px", borderRadius: "10px", backgroundColor: "#007bff", 
             color: "white", fontStyle: "bold", fontSize: "large"
             }}>Continue to Dashboard</a>
        </div>

    )
}
export default ErrorPage;