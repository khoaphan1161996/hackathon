
export function Tinhtien(props) {
    return (
        <div className="Tinhtienphim">
            <img src="https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/dc33889b0f8b5da88052ef70de32f1cb/v/e/vertical_2.jpg" />
            <div className="Thongtin">
                <h3>TÊN PHIM: Doraemon </h3>
            </div>
            <div className="Tinhtien">
                <p>Số ghế chọn: {`${props.soghe}`}</p>
                <p>Thành tiền: {props.thanhtien === undefined ? 0 : `${props.thanhtien.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`} Đ</p>
            </div>

            <button onClick={props.onClick}>Next</button>
        </div>
    )
}