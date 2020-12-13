import './App.css';
import React from 'react'
import { Header } from './Components/Header'
import { Sign } from './Components/Sign'
import { Show } from './Components/Show'
import { SignUp } from './Components/SignUp'
import { SignIn } from './Components/SignIn'
import { Signupfunc, Signinfunc } from './Controller/ControllerKhoa'
import {films} from '../src/Res/datagia'
console.log(films)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      film: films,
      display: {
        SignUp: false,
        SignIn: false,
        Home: true
      }
    }
    this.handleonChange = this.handleonChange.bind(this)
    this.onClickSignUp = this.onClickSignUp.bind(this)
    this.onClickSignIn = this.onClickSignIn.bind(this)
    this.onClickSignUp2 = this.onClickSignUp2.bind(this)
    this.onClickSignIn2 = this.onClickSignIn2.bind(this)
  }
  handleonChange(e, state) {
    this.setState({ [`${state}`]: e.target.value })
    console.log(this.state)
  }
  onClickSignUp() {
    this.setState({ display: { SignUp: true } })
  }

  onClickSignIn() {
    this.setState({ display: { SignIn: true } })
  }
  onClickSignUp2() {
    const email = this.state.Email
    const password = this.state.Pass
    const uname = this.state.Username
    Signupfunc(email, password, uname)
    .then((a) => a === undefined ? this.setState({ display: { SignIn: true } }) : console.log(a))

  }
  onClickSignIn2() {
    const email = this.state.Email
    const password = this.state.Pass
    Signinfunc(email, password).then(() => 
    this.setState({ display: { Home: true }},))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Sign onClickSignUp={this.onClickSignUp} onClickSignIn={this.onClickSignIn} />
        {this.state.display.SignUp && <SignUp onChangeUsername={(e) => this.handleonChange(e, "Username")} onChangeEmail={(e) => this.handleonChange(e, "Email")} onChangePass={(e) => this.handleonChange(e, "Pass")} onClickSign={this.onClickSignUp2} />}
        {this.state.display.SignIn && <SignIn onChangeEmail={(e) => this.handleonChange(e, "Email")} onChangePass={(e) => this.handleonChange(e, "Pass")} onClick={this.onClickSignIn2} />}
        {this.state.display.Home && <div className="Shows">
          {this.state.film.map((film, ind) => <Show {...film} key={ind} />)}
        </div>}
      </div>
    );
  }

}

export default App;
