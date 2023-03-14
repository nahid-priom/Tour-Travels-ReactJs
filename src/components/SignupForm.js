import "./SignupStyle.css";

function SignupForm(){
    return(
        <>
        <div className="signup-form">
            <h1>Sign Up Here</h1>
            <form>
                <input placeholder="First Name"></input>
                <input placeholder="Last Name"></input>
                <input placeholder="Email Address"></input>
                <input type="password" placeholder="Enter Password"></input>
                <input type="password" placeholder="Re-enter Password"></input>
                <button>Sign up</button>

            </form>
        </div>
        
        
        </>
    )
}

export default SignupForm;