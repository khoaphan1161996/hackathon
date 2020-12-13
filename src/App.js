import './App.css';
import React from 'react'
import { Header } from './components/Header'
import { Sign } from './components/Sign'
import { Show } from './components/Show'
import { SignUp } from './components/SignUp'
import { SignIn } from './components/SignIn'
import { Signupfunc, Signinfunc } from './Controller/ControllerKhoa'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      film: [{
        img: "https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg",
        name: "Name",
        buy: "Mua vé"
      },
      {
        img: "https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg",
        name: "Name",
        buy: "Mua vé"
      },
      {
        img: "https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg",
        name: "Name",
        buy: "Mua vé"
      },
      {
        img: "https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg",
        name: "Name",
        buy: "Mua vé"
      },
      {
        img: "https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg",
        name: "Name",
        buy: "Mua vé"
      },
      {
        img: "https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg",
        name: "Name",
        buy: "Mua vé"
      },
      {
        img: "https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg",
        name: "Name",
        buy: "Mua vé"
      },],
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
    Signupfunc(email, password, uname).then((a) => a === undefined ? this.setState({ display: { SignIn: true } }) : console.log(a))

  }
  onClickSignIn2() {
    const email = this.state.Email
    const password = this.state.Pass
    Signinfunc(email, password).then(() => this.setState({ display: { Home: true } }))
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
