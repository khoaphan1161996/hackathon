import '../assets/css/Header.css'

export function Header() {
    return (
        <div className="navbar">
            <img className="cgvlogo" src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png" href="#home"/>
            <a href="#home">Home</a>
            <div className="dropdown">
                <button className="dropbtn">News<i className="fa fa-caret-down"></i></button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Film<i className="fa fa-caret-down"></i></button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <a href="#">Book</a>
            <a href="#">Support</a>
        </div>
    )
}