import React, { Component } from 'react';
// import axios from 'axios';

import './Form.css';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            imageInput: "",
            productNameInput: "",
            priceInput: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.clearInputFields = this.clearInputFields.bind(this);
    }

    handleChange( key, value ) {
        // console.log(key, value);
        this.setState( { [key]: value } );
    };

    clearInputFields() {
        // console.log( "Cancel Clicked");
        this.setState( {
            imageInput: "",
            productNameInput: "",
            priceInput: ""
        });
    };

    render(){
        return(
            <div className = "Form_Container">
                <form>
                    <div className = "Image_Form">
                        <img className="Preview_Image"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfP09bFyczM0dO8wMPk6ezY3eDh5unJzdDR1tlr0sxZAAACVUlEQVR4nO3b23KDIBRA0QgmsaLx//+2KmPi/YJMPafZ6619sOzARJjq7QYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuJyN4+qMZcUri+BV3WQ22iIxSRTGFBITbRGpr218Ckx0EQPrxMfVPRP25QvNaT4xFTeJ1g/sJ4K8/aTuVxdNNJ99/Q0RQWlELtN7xGH9+8KYH1ZEX1hY770C9186Cm2R1TeONGj/paHQury7OwbsvzQUlp/9jakOJ2ooPLf/kl9on4Mtan50EhUUDvfgh8cqv/AxKlw+Cc3vPeUXjg+Kr4VCm+Vbl5LkeKHNTDKbKL9w3yr1B8q5RPmFu75puhPzTKKCwh13i2aJJguJ8gt33PG7GZxN1FC4tWvrB04TNRRu7Lw/S3Q2UUPh+ulpOIPTRB2FKyfgaeAoUUvhkvESnSYqL5ybwVGi7sKlwH6i6sL5JTpKVFZYlr0flmewTbyvX+piC8NyiXHvH9YD37OoqtA1v+wS15ZofxY1FTo/cJ+4NYNJd9BSVOi6kTeJOwLVFbrPyJ3dXqL6Cl1/7G7HDGordMOx7+hTVui2arQXBgVqKgwLVFQYGKinMDRQTWFwoJrC8AfcKLwUhRRSeL3vKkyDVaNLSdIf1snXEBQUyrlUTBQeIbPQD6uK8Zx3+yyHKbf/5N+y/gn78K/Rj/ZmY64Omhg9gHFaJu59i+EDGKf1/tshRxlxEoW+2uXS868EeflDYmDNltUzgkpqXyPGzULyK6QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8DV+AUrRI7QWHsWNAAAAAElFTkSuQmCC"
                            alt="default"
                        />
                    </div>

                    <br />

                    <div className = "Input_Form">

                        Image_URL: 
                        
                        <input
                            type = "text"
                            placeholder = "Add Image Here"
                            onChange = { e => this.handleChange("imageInput", e.target.value) }
                        />

                        <br />

                        Product Name: 
                        
                        <input
                            type = "text"
                            placeholder = "Add Name Here"
                            onChange = { e => this.handleChange("productNameInput", e.target.value) }
                        />

                        <br />

                        Price: 
                        
                        <input
                            type = "text"
                            placeholder = "Add Price Here"
                            onChange = { e => this.handleChange("priceInput", e.target.value) }
                        />

                    </div>

                    <br />

                    <div className = "Button_Form">

                        <button className = "Cancel_Button"
                            type = "reset"
                            onClick = { () => {
                                this.clearInputFields();
                            }}
                        >

                        Cancel 
                        
                        </button>

                        <button className = "Add_Button"
                            onClick = { () => 
                                this.props.addProduct(
                                    this.state.productNameInput,
                                    this.state.priceInput,
                                    this.imageInput
                                )    
                            }
                        > 
                        
                        Add to Inventory 
                        
                        </button>

                    </div>
                
                </form>
            </div>
        )
    }

};

export default Form;