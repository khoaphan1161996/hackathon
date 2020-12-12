import React from 'react'
import '../assets/css/Sign.css'

export class Sign extends React.Component {
    constructor(props){
      super(props)
      this.state = {}
    }
    render(){
      return (
        <div className="Sign">
            <button className="SignUp" onClick={this.props.onClickSignUp}>Đăng kí</button>
            <button className="SignIn" onClick={this.props.onClickSignIn}>Đăng nhập</button>
        </div>
      );
    }
    
  }