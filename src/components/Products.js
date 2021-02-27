import React , { useState } from 'react';
import Product from './Product';
import products from '../fakeData/fakeData.json';

const Products = (props) => {
    
    return (
        <section className="products col-md-8 border-end">
            <div className="row row-cols-3 gx-5 gy-5">
                {
                    products.map(product => <Product addToCartHandler={props.addToCartHandler} key={product.id} product={product} />)
                }
            </div>
        </section>
    );
};

export default Products;