import React from 'react'
import '../../Asset/CSS/Booking.css'
import { Containseat } from './Containseat'
import { Tinhtien } from './Tinhtien'
import { user } from './datafake'


export class Booking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: props.user,
            dataphim: props.dataphim,
            idphim: props.idphim
        }
    }
    componentDidUpdate(){
        console.log("OK")
    }
    onClick(){
        this.setState({a:"a"})
    }
    render() {
        // console.log(this.state.dataphim)
        return (

            <div className="Booking">
                <div className="Screen">Screen</div>
                <Containseat dataphim={this.state.dataphim}onClick={this.onClick}phimseats={this.state.dataphim.seats} idphim={this.state.idphim} user={this.state.user} />
               
            </div>
        )
    }
}