import '../../Asset/CSS/Tinhtien.css'

export function Tinhtien(props) {
    return (
        <div className="Tinhtienphim">
            <img src={props.ava} />
            <div className="Thongtin">
                <h3>TÊN PHIM: {props.name} </h3>
            </div>
            <div className="Tinhtien">
                <p>Số ghế chọn: {`${props.soghe}`}</p>
                <p>Thành tiền: {props.thanhtien === undefined ? 0 : `${props.thanhtien.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`} Đ</p>
            </div>

            <button onClick={props.onClick}>Next</button>
        </div>
    )
}