import '../assets/css/SignUp.css'
// import {Button} from  '@material-ui/core'
export function SignUp(props) {
    return (
        <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account</p>
            <hr />
            <label htmlFor="name"><b>UserName</b></label>
            <input type="text" placeholder="Enter User" name="name" onChange={props.onChangeUsername}></input>
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" onChange={props.onChangeEmail} ></input>
            <label htmlFor="pass"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="pass" onChange={props.onChangePass} ></input>
            <button className="signupbtn" onClick={props.onClickSign}>SignUp</button>
            {/* <Button class="signupbtn" variant="contained" color="primary">
            Primary
            </Button> */}
        </div>
    )
}
