import React from 'react'
import '../../Asset/CSS/Containseat.css'
import { Seatline } from './Seatline'
// import { data2 } from './datafake'
import { Readseats, Changestatus, ChangestatusUser } from '../../Controller/ControllerKhoa'
import { Tinhtien } from './Tinhtien'
import { Seat } from './Seat'
import { user } from './datafake'


export class Containseat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataphim:props.dataphim,
            seats: props.phimseats,
            hehe: 123,
            idphim: props.idphim,
            user: props.user,
        }
        this.showSeat = this.showSeat.bind(this)
        this.handleonClick = this.handleonClick.bind(this)
    }
    showSeat() {
        let res = []
        for (let i = 1; i < 4; i++) {
            res.push(this.state.seats[`line${i}`])
        }
        console.log(res)
        return res.map((x, index) => {
            return (
                // <Seatline key={index} line={index} seats={x} />
                <div className={index}>
                    {x.map((y, ind) => {
                        if (y.status === "choosed") {
                            return (<Seat key={ind} status={y.status} seatname={"X"}   onClick={() => {this.handleonClick(ind, index)}} />)
                        }
                        else if (y.status === "choosing" && this.state.user.choosing[`${this.state.idphim}`] !== undefined) {
                            if (this.state.user.choosing[`${this.state.idphim}`].indexOf(y.seat) > -1) { return (<Seat key={ind} status={`choosing-u`} seatname={y.seat} onClick={() => this.handleonClick(ind, index)} />) }
                            else return (<Seat key={ind} status={`choosing`} seatname={y.seat}   onClick={() => this.handleonClick(ind, index)} />)
                        }
                        else return (<Seat key={ind} status={y.status} seatname={y.seat} onClick={() => this.handleonClick(ind, index)} />)
                    })}
                </div>
            )
        })
    }
    handleonClick(index, index2) {
      
        let btnstatus = this.state.seats[`line${index2 + 1}`][index].status

        let seatchoose = this.state.seats[`line${index2 + 1}`][index].seat
        let userdata = this.state.user
        console.log(userdata)
        let data = this.state.seats
        let data2 = new Object(this.state.seats)
        if (btnstatus === "choosing") {
            data[`line${index2 + 1}`][index].status = "none"
            Changestatus(this.state.idphim, data)
            let userseat = this.state.user.choosing
            if (userseat[`${this.state.idphim}`] !== undefined) {
                userseat[`${this.state.idphim}`].splice(userseat.[`${this.state.idphim}`].indexOf(seatchoose, 1))
            }
            else {
                userseat = {}
                userseat[`${this.state.idphim}`] = []
            }
            ChangestatusUser(this.state.user.uid, userseat)
            this.setState({ seats: data })
        }
        else {
            let userseat = this.state.user.choosing
            // userseat.push(this.state.seats[`line${index2 + 1}`][index].seat)
            if (userseat[`${this.state.idphim}`] === undefined) {
                userseat = {}
                userseat[`${this.state.idphim}`] = []
            }
            userseat[`${this.state.idphim}`].push(seatchoose)
            console.log(userseat)
            data[`line${index2 + 1}`][index].status = "choosing-u"
            data2[`line${index2 + 1}`][index].status = "choosing"
            Changestatus(this.state.idphim, data)
            ChangestatusUser(this.state.user.uid, userseat)
            this.setState({ seats: data })
        }

    }
    componentDidUpdate() {
        Readseats(this.state.idphim,(data) => {
            // console.log(data.seats)
            ; if (JSON.stringify(data.seats) !== JSON.stringify(this.state.seats)) this.setState({ seats: data.seats })
        })
    }
    render() {

        return (
            <div className="Ghe">
                { this.showSeat()}
                <Tinhtien ava={this.state.dataphim.ava} name={this.state.dataphim.name} soghe={this.state.user.choosing[this.state.idphim]=== undefined ? 0 : this.state.user.choosing[this.state.idphim].length } thanhtien={`${this.state.user.choosing[this.state.idphim] === undefined ? 0 : this.state.user.choosing[this.state.idphim].length * 120000}`}
                    onClick={this.props.onClicknext} />
            </div>
        )
    }
}
