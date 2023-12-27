import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <div className="wrapper">
                <span>Andrew Aramouni</span>
                <div className="social">
                    <a href="#">
                        {/* can use your socialplatforms */}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;