import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='navSection'>
                <div>
                    <img src="../../img/client-1.png" alt="" />
                </div>
                <div >
                    <div className='leftDiv'>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Service</a>
                        <a href="">blog</a>
                        <a href="">contact</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;