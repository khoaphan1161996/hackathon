import React from 'react'
import '../../Asset/CSS/Booking.css'
import { Containseat } from './Containseat'
import { Tinhtien } from './Tinhtien'
import { user } from './datafake'

 
export class Booking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: user,
            dataphim:props.dataphim,
        }
    }
    componentDidMount(){
     
    }
    render() {
        // console.log(this.state.dataphim)
        return (
            
            <div className="Booking">
                <div className="Screen">Screen</div>
                <Containseat phimseats={this.state.dataphim.seats}/>
                <Tinhtien ava={this.state.dataphim.ava} name={this.state.dataphim.name} soghe={this.state.user.choosing.seat.length} thanhtien={`${this.state.user.choosing.seat.length * 120000}`}
                    onClick={this.props.onClicknext} />
            </div>
        )
    }
}