import '../Asset/CSS/Seat.css'

export function Seat(props) {
    return (
        <button className={`${props.status} buttonseat`} onClick={props.onClick}>{props.seatname}</button>
    )
}