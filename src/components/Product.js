import React , {useState} from 'react';

const Product = (props) => {
    const { name, price , image } = props.product;
    const [ isClicked, setIsClicked ] =  useState(false);

    return (
        <div className="single-product col text-center">
            <div className="card border-0">
                <img src={image} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    <button disabled={isClicked} onClick={() =>  {
                        props.addToCartHandler(props.product)
                        setIsClicked(true) 
                     }} className="btn btn-success">
                        {isClicked ? "✓ Already added to cart" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;