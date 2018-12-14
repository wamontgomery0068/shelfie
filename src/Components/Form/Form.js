import React, { Component } from 'react';
// import axios from 'axios';

import './Form.css';

class Form extends Component {
    render(){
        return(
            <div className = "Form_Container">
                <form>

                    <img className="Preview"></img>

                    <br />

                    Image_URL: <input
                        type = "text"
                        placeholder = "Add Image Here"
                        // onChange = {}
                    />

                    <br />

                    Product Name: <input
                        type = "text"
                        placeholder = "Add Name Here"
                        // onChange = {}
                    />

                    <br />

                    Price: <input
                        type = "text"
                        placeholder = "Add Price Here"
                        // onChange = {}
                    />

                    <br />

                    <button className = "Cancel_Button"> Cancel </button>

                    <button className = "Add_Button"> Add to Inventory </button>
                    
                </form>
            </div>
        )
    }

};

export default Form;