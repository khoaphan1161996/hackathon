import React from 'react'
import './App.css';
import { Header } from './components/Header'
import { Show } from './components/Show'
import { Finish } from './components/Finish'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz: [],
      point:0,
    }
    this.onClickfinish = this.onClickfinish.bind(this)
  }

  componentDidMount() {
    const url = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
    fetch(url)
      .then((res) => res.json())
      .then(data => {
        let datas = data.results
        // console.log(datas)
        let quiz = []
        for (let i = 0; i < datas.length; i++) {
          quiz.push({
            question: datas[i].question,
            answer1: datas[i].incorrect_answers[0] ,
            answer2: datas[i].incorrect_answers[1] ,
            answer3: datas[i].incorrect_answers[2] ,
            answer4: datas[i].correct_answer
          })
        }
        this.setState({
          quiz: quiz
        })
      })
  }

  onClickfinish() {
    alert("Chúc mừng bạn đạt được số điểm: "+this.state.point+" . Chúng ta chơi lại nhé.")
    const url = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
    fetch(url)
      .then((res) => res.json())
      .then(data => {
        let datas = data.results
        console.log(datas)
        let quiz = []
        for (let i = 0; i < datas.length; i++) {
          quiz.push({
            question: datas[i].question,
            answer1: datas[i].incorrect_answers[0] ,
            answer2: datas[i].incorrect_answers[1] ,
            answer3: datas[i].incorrect_answers[2] ,
            answer4: datas[i].correct_answer
          })
        }
        this.setState({
          quiz: quiz
        })
      })
  }

  onClickan(e,ind){
    let point=this.state.point
    console.log(e.target.innerText)
    if(this.state.quiz[ind].answer4==e.target.innerText){
      alert("Câu trả lời chính xác, bạn được thêm 10 điểm")
      this.setState({point:point+10})
    }
    else{
      alert("Bạn trả lời sai rồi, không được tính điểm")
    }
    console.log(this.state.point)
  }

  render() {
    return (
      <div className="Quiz">
        <Header  />
        {this.state.quiz.map((quiz, ind) => <Show key={ind} {...quiz} onClickan={(e)=>this.onClickan(e,ind)} />)}
        <Finish onClickfinish={this.onClickfinish} />
      </div>
    );
  }

}

export default App;