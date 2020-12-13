import React from 'react'
import { Seat } from './Seat'


export class Seatline extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seats: props.seats
        }
        this.handleonClick = this.handleonClick.bind(this)
    }
    handleonClick(index) {
        let btnstatus = this.state.seats[index].status
        let data = this.state.seats
        if (btnstatus === "choosing-u") {
            data[index].status = "none"
            this.setState({ seats: data })
        }
        else if (btnstatus === "choosing") {
        }
        else {
            data[index].status = "choosing-u"
            this.setState({ seats: data })
        }

    }
    render() {
        return (
            <div className={`${this.props.line}`}>
                {this.state.seats.map((x, index) => {
                    if (x.status === "choosed") {
                        return (<Seat key={index} status={x.status} seatname={"X"} onClick={() => this.handleonClick(index)} />)
                    }
                    else return (<Seat key={index} status={x.status} seatname={x.seat} onClick={() => this.handleonClick(index)} />)
                })}
            </div>
        )
    }
}
