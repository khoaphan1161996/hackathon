import '../assets/css/SignIn.css'

export function SignIn(props){
    return(
        <div className="container">
            <h1>Sign In</h1>
            <hr/>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" ></input>
            <label for="pass"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="pass" ></input>
            <button class="signupbtn">Login</button>
        </div>
    )
}