import React from 'react';
import img from "../components/img/Rectangle.svg"
import {Link} from "react-router-dom";



const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <img src={img} alt=""/>
                    <div className="header-title">
                        <Link to="/">Home</Link>
                        <Link to="/recipes">Recipes</Link>
                        <Link to="/meat">Meat</Link>
                        <Link to="/about">About</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/support">Support</Link>
                        <button className="btn"><Link to={"/signin"}>Sign in</Link></button>
                        <button className="btn1">Request demo</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;