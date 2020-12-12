import '../assets/css/Show.css'

export function Show(props) {
    return (
        <div className="Show">
            <img className="avatar" src={props.img} />
            <p className="name">{props.name}</p>
            <button className="btnbuy">{props.buy}</button>
        </div>
    )
}