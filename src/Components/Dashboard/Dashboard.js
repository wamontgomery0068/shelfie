import React, { Component } from 'react';
import Product from '../Product/Product';
// import axios from 'axios';

import './Dashboard.css';

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            // Insert State Here
        };
    }

    // Uncomment below when ready

    // componentDidMount(){
    //     axios.get().then( response => {
    //         console.log(response)
    //         this.setState( {} )
    //     });
    // };

    render(){
        return(
            <div className = "Dashboard">
                <h1> Dashboard Component </h1>
                < Product />
            </div>
        )
    };

};

export default Dashboard;