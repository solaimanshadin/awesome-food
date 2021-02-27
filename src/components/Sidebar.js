import React from 'react';

const Sidebar = ({cart}) => {
    const total = cart.reduce((acc, curr) => acc + curr.price, 0)
    
    return (
        <aside className="sidebar col-md-4 ps-5">
            <p className="lead">Item Cart in cart ({cart.length})</p>
            <ul className="list-group my-4">
                {
                    cart.map((product)=><li key={product.id} className="list-group-item">{product.name} - {product.price}$</li>)
                }

            
            </ul>
            <div className="d-grid">
                <button className="btn btn-outline-success">Checkout - {total}$</button>
            </div>
        </aside>
    );
};

export default Sidebar;