import './App.css';
import React from 'react'
import { Header } from './components/Header'
import { Sign } from './components/Sign'
import { Show } from './components/Show'
import { SignUp } from './components/SignUp'
import { SignIn } from './components/SignIn'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: {
        SignUp: false,
        SignIn: false
      }
    }
    this.onClickSignUp = this.onClickSignUp.bind(this)
    this.onClickSignIn = this.onClickSignIn.bind(this)
  }

  onClickSignUp() {
    this.setState({ display: { SignUp: true } })
  }

  onClickSignIn() {
    this.setState({ display: { SignIn: true } })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Sign onClickSignUp={this.onClickSignUp} onClickSignIn={this.onClickSignIn} />
        {this.state.display.SignUp && <SignUp />}
        {this.state.display.SignIn && <SignIn />}
        <div className="Show">
          <Show />
        </div>
      </div>
    );
  }

}

export default App;
