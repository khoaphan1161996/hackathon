import '../assets/css/Show.css'

export function Show(props) {
    return (
        <div className="Show">
            <img className="avatar" src="https://galaxycine.vn/media/2020/12/10/1350x900_1607592886042.jpg" />
            <div className="bottom">
                <p className="name">Name</p>
                <button className="btnbuy">Mua vé</button>
            </div>
        </div>
    )
}