import '../../Asset/CSS/Tinhtien.css'

export function Tinhtien(props) {
    return (
        <div className="Tinhtienphim">
            <img src={props.ava} />
            <div className="Thongtin">
                <h3>MOVIE'S NAME: {props.name} </h3>
            </div>
            <div className="Tinhtien">
                <p>Number of seats selected: {`${props.soghe}`}</p>
                <p>Total amount: {props.thanhtien === undefined ? 0 : `${props.thanhtien.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`} Đ</p>
                {props.status && <p>Đã đặt thành công</p>}
            </div>

            <button onClick={props.onClick}>Book tickets</button>
        </div>
    )
}