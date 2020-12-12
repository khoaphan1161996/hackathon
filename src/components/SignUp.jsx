import '../assets/css/SignUp.css'

export function SignUp(props) {
    return (
        <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account</p>
            <hr />
            <label for="name"><b>UserName</b></label>
            <input type="text" placeholder="Enter User" name="name" ></input>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" ></input>
            <label for="pass"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="pass" ></input>
            <button class="signupbtn">Sign Up</button>
        </div>
    )
}