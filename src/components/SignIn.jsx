import '../assets/css/SignIn.css'

export function SignIn(props) {
    return (
        <div className="container">
            <h1>Sign In</h1>
            <hr />
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" onChange={props.onChangeEmail} ></input>
            <label htmlFor="pass"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="pass" onChange={props.onChangePass} ></input>
            <button className="signupbtn" onClick={props.onClick}>Login</button>
        </div>
    )
}