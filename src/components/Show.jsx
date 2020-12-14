import '../assets/css/Show.css'

export function Show(props) {
    return (
        <div className="Show">
            <img className="avatar" src={props.ava} alt="show"/>
            <p className="name">{props.name}</p>
            <p className="time">{props.time} - {props.point} IMDb</p>
            <a onClick={props.onClickBook} className="btnbuy">MORE INFO</a>
        </div>
    )
}