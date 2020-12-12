import React from 'react'
import '../Asset/CSS/Containseat.css'
import { Seatline } from './Seatline'
import { data } from './datafake'


export class Containseat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seats: data
        }
    }
    componentDidMount() {
        console.log(this.state.seats)
    }
    render() {
        return (
            <div className="Ghe">
                {this.state.seats.map((x, index) => {
                    return (
                        <Seatline key={index} line={index} seats={x} />
                    )
                })}
            </div>
        )
    }
}
