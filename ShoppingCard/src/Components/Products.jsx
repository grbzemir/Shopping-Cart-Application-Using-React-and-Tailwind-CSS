import React from 'react';
import ProductItem from './ProductItem';
import ProductData from './ProductData';
import PropTypes from 'prop-types';

const Products = (props) => {

    console.log(props);

    return (
        <div className="grid grid-cols-3 gap-10 mb-8">
            {ProductData.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    cart={props.cart}
                    setCart={props.setCart}
                />
            ))}
        </div>
    );
}

// Prop validation
Products.propTypes = {
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired,
};

export default Products;
