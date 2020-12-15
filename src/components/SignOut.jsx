import React from 'react'
import '../assets/css/SignOut.css'

export class SignOut extends React.Component {
    constructor(props){
      super(props)
      this.state = {}
    }
    render(){
      return (
        <div className="Signout">
              <h1><span>User: </span>{this.props.Hello}</h1>
              <button  onClick={this.props.onClickSignOut}>SignOut</button>
        </div>
      );
    }
    
  }