export function Phimadmin(props) {
    return (
        <div className="Movieadmin">
            <img src={props.src} />
            <h3>Tên phim: {props.moviename}</h3>
        </div>
    )
}