import '../assets/css/Header.css'

export function Header(props) {
    return (
        <div className="navbar">
            <img className="cgvlogo" src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png" href="#home" alt="logo"/>
            <p onClick={props.onClickhome}>Home</p>
            <a href="https://www.cgv.vn/default/newsoffer">News</a>
            <div className="dropdown">
                <button className="dropbtn">Films<i className="fa fa-caret-down"></i></button>
                <div className="dropdown-content">
                    <a href="https://www.cgv.vn/default/movies/now-showing.html">Now-Showing</a>
                    <a href="https://www.cgv.vn/default/movies/coming-soon-1.html">Coming-Soon</a>
                </div>
            </div>
            <a href="#">Support</a>
        </div>
    )
}