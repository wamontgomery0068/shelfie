import React, { Component } from 'react';
import Product from '../Product/Product';
import Form from '../Form/Form';
import axios from 'axios';

import './Dashboard.css';

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            inventory: [],
        };

        this.addProduct = this.addProduct.bind(this);
    }

    componentDidMount(){
        axios.get("http://localhost:3056/api/inventory").then( response => {
            console.log(response)
            this.setState( { inventory: response.data} )
        });
    };

    addProduct(name, price, img) {
        axios.post(`http://localhost:3056/api/product`, {name, price, img }).then(response => {
            this.setState({inventory: response.data});
        }).catch(err => console.log(err));
    };

    render(){
        return(
            <div className = "Dashboard_Container">
                <Product/>
                <Form />
            </div>
        )
    };

};

export default Dashboard;