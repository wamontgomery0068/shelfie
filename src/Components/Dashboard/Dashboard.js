import React, { Component } from 'react';
import Product from '../Product/Product';
import Form from '../Form/Form';
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
            <div className = "Dashboard_Container">
                <Product />
                <Form />
            </div>
        )
    };

};

export default Dashboard;