import React from 'react'
import '../../Asset/CSS/Booking.css'
import { Containseat } from './Containseat'
import { Tinhtien } from './Tinhtien'
import { user } from './datafake'

export class Booking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: user
        }
    }
    render() {
        return (
            <div className="Booking">
                <div className="Screen">Màn hình</div>
                <Containseat />
                <Tinhtien soghe={this.state.user.choosing.seat.length} thanhtien={`${this.state.user.choosing.seat.length * 120000}`}
                    onClick={this.props.onClicknext} />
            </div>
        )
    }
}