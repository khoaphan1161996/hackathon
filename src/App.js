import './App.css';
import React from 'react'
import { Header } from './components/Header'
import { Sign } from './components/Sign'
import {Show} from './components/Show'
import {SignUp} from './components/SignUp'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onClickSignUp = this.onClickSignUp.bind(this)
  }

  onClickSignUp(){
    this.setState({SignUp:true})
  }

  onClickSignIn(){

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Sign onClickSignUp={this.onClickSignUp}/>
        {this.state.SignUp && <SignUp/>}
        <Show />
      </div>
    );
  }

}

export default App;
