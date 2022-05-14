import wtw from "../static/wtw.svg";

function Navbar() {
    return (
        <div className="Navbar">
            <header>

                <img src={wtw} className='logo' />

            </header>
        </div>
    );
};

export default Navbar;