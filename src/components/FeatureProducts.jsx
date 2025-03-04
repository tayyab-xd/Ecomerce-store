import React, { useContext } from 'react';
import { AppContext } from '../context/productContext';
import Product from './Product';

const FeatureProducts = () => {
    const context = useContext(AppContext);
    const Products = context.featureProducts;
    const loadingg = context.loading;

    // console.log(Products);   

    return loadingg ? (
        <h1 className="loading-text">Loading...</h1>
    ) : (
        <div className="section">
            <div className="container">
                {/* <div className="common-heading">Our Feature Services</div> */}
                <div className="grid grid-three-column">
                    {Products.map((item) => (
                        <Product key={item.id} props={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureProducts;
