import './App.css';
import React from 'react'
import { Header } from './Components/Header'
import { Sign } from './Components/Sign'
import { Show } from './Components/Show'
import { SignUp } from './Components/SignUp'
import { SignIn } from './Components/SignIn'
import { Signupfunc, Signinfunc,Updatedatafake,Readphim } from './Controller/ControllerKhoa'
import { Booking } from './Components/Booking/Booking'
import { films } from '../src/Res/datagia'
console.log(films)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      film: films,
      display: {
        SignUp: false,
        SignIn: false,
        Home: false,
      }
    }
    this.handleonChange = this.handleonChange.bind(this)
    this.onClickSignUp = this.onClickSignUp.bind(this)
    this.onClickSignIn = this.onClickSignIn.bind(this)
    this.onClickSignUp2 = this.onClickSignUp2.bind(this)
    this.onClickSignIn2 = this.onClickSignIn2.bind(this)
    this.onClickBook = this.onClickBook.bind(this)
  }
  componentDidMount() {
    let films=[]
    // Updatedatafake()
    Readphim(films,()=>{this.setState({film:films})})
  }
  handleonChange(e, state) {
    this.setState({ [`${state}`]: e.target.value })
    // console.log(this.state)
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
      .then((a) => a === undefined ? this.setState({ display: { SignIn: true } }):12)

  }
  onClickSignIn2() {
    const email = this.state.Email
    const password = this.state.Pass
    Signinfunc(email, password).then((data) => this.setState({ display: { Home: true }, userdata: data }))
  }
  onClickBook(index) {

    this.setState({ display: { Booking: true },indexphim: index })
    console.log(index)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Sign onClickSignUp={this.onClickSignUp} onClickSignIn={this.onClickSignIn} />
        {this.state.display.SignUp && <SignUp onChangeUsername={(e) => this.handleonChange(e, "Username")} onChangeEmail={(e) => this.handleonChange(e, "Email")} onChangePass={(e) => this.handleonChange(e, "Pass")} onClickSign={this.onClickSignUp2} />}
        {this.state.display.SignIn && <SignIn onChangeEmail={(e) => this.handleonChange(e, "Email")} onChangePass={(e) => this.handleonChange(e, "Pass")} onClick={this.onClickSignIn2} />}
        {this.state.display.Home && <div className="Shows">
          {this.state.film.map((film, ind) => <Show {...film} key={ind} onClickBook={()=>this.onClickBook(ind)} />)}

        </div>}
        {this.state.display.Booking && <Booking dataphim={this.state.film[this.state.indexphim]} />}
      </div>
    );
  }

}

export default App;
