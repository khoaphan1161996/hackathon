import React from 'react'
import '../assets/css/SignOut.css'

export class Sign extends React.Component {
    constructor(props){
      super(props)
      this.state = {}
    }
    render(){
      return (
        <div className="Signout">
            <button  onClick={this.props.onClickSignOut}>SignOut</button>
        </div>
      );
    }
    
  }