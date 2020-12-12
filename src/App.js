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
      film:[{
        img:"https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg",
        name:"Name",
        buy:"Mua vé"
      },
      {
        img:"https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg",
        name:"Name",
        buy:"Mua vé"
      },
      {
        img:"https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg",
        name:"Name",
        buy:"Mua vé"
      },
      {
        img:"https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg",
        name:"Name",
        buy:"Mua vé"
      },
      {
        img:"https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg",
        name:"Name",
        buy:"Mua vé"
      },
      {
        img:"https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg",
        name:"Name",
        buy:"Mua vé"
      },
      {
        img:"https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg",
        name:"Name",
        buy:"Mua vé"
      },],
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
        <div className="Shows">
          {this.state.film.map((film,ind)=><Show {...film} key={ind} />)}
        </div>
      </div>
    );
  }

}

export default App;
