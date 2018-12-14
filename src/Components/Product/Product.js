import React from 'react';
import './Product.css';

export default function Product(p){
    return(
        <div className = "Product_Container">
            <div className = "Image_Product"></div>
            <div className = "Content_Product">
                <div className = "Name_Product">
                    <p> Product Name </p>
                </div>
                <div className = "Price_Product">
                    <p> Product Price </p>
                </div>
                <div className = "Button_Product"></div>
            </div>
        </div>
    )
};