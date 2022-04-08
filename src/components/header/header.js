import React from 'react';
import { Link } from "react-router-dom";
import WalletConnect from '../../utils/connectwallet';


const Logo = 'images/logo.png';
const world = 'images/world.svg';


const Header = () => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link to="/"><img src={Logo} alt="logo" style={{ width: "150px" }} className="img-fluid" /></Link>
                    <button className="navbar-toggler navbar-toggler-main" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="stick"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <button className="navbar-toggler navbar-toggler-main" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="stick"></span>
                        </button>
                        <ul className="navbar-nav ms-auto">
                            <li className=""><Link to="/explore">Explore</Link></li>
                            <li className=""><Link to="/collection">Collection</Link></li>
                            <li className=""><Link to="/reward">Reward</Link></li>
                            <li className=""><a className='headerspecial'><img src = {world} className='language' /> EN</a></li>
                            <li className=""><a style={{float:'left'}} className='headerspecial'><WalletConnect /></a></li>
                        </ul>
                    </div>
                    <button className="navbar-toggler" id="navoverlay" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    </button>
                </nav>
            </div>
        </>
    )
}

export default Header