import React, { Component } from 'react';
import Title from './Title';
import './Header.css';
import { Link } from "react-router-dom";

class Header extends Component {
    render(){
        const title = "SHELFIE"
        return(
            <div className = "Header_Container">
                <div className = "Logo_Header">
                    <img className = "Logo_Image"
                        src = "https://github.com/DevMountain/simulation-1/blob/master/assets/shelfie_icon.png?raw=true"
                        alt = "logo"
                    />
                </div>

                <div className = "Title_Header">
                    <Title title={title}/>
                </div>

                <div className = "Dashboard_Link">
                    <Link to="/">DashBoard</Link>
                </div>

                <div className = "AddInventory_Link">
                    <Link to="/addinventory"> Add Product </Link>
                </div>

            </div>
        )
    }
}

export default Header;
