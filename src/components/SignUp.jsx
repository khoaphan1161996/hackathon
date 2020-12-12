import '../assets/css/SignUp.css'

export function SignUp(props){
    return(
        <div className="container">
            <h1>Đăng nhập</h1>
            <p>Điền đầy đủ thông tin vào bên dưới.</p>
            <hr/>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" ></input>
            <label for="pass"><b>Mật khẩu</b></label>
            <input type="password" placeholder="Enter Password" name="pass" ></input>
        </div>
    )
}