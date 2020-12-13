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
            <button className="SignUp" onClick={this.props.onClickSignUp}>SignUp</button>
            <button className="SignIn" onClick={this.props.onClickSignIn}>SignIn</button>
        </div>
      );
    }
    
  }