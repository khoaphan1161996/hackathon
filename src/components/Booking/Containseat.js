import React from 'react'
import '../../Asset/CSS/Containseat.css'
import { Seatline } from './Seatline'
// import { data2 } from './datafake'
import { Readseats } from '../../Controller/ControllerKhoa'


export class Containseat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seats: props.phimseats
        }
    }
    componentDidUpdate(prevState) {
        //   if(this.state.seats!==prevState.seats){
        Readseats((data) => { this.setState({ seats: data.seats }); console.log(this.state.seats) })
        //   }
    }
    render() {

        return (
            <div className="Ghe">
                {Object.keys(this.state.seats).map((x, index) => {
                    return (
                        <Seatline key={index} line={index} seats={this.state.seats[x]} />
                    )
                })}
            </div>
        )
    }
}
