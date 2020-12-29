import '../assets/css/Finish.css'

export function Finish(props) {
    return (
        <div className="Finish">
            <button onClick={props.onClickfinish}>NEXT</button>
        </div>
    )
}