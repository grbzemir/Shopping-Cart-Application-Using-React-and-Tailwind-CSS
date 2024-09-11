import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ product, cart, setCart }) => {

    const findProduct = cart.find((item) => item.id === product.id);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    }

    return (
        <div className="border p-4 m-2 rounded-lg shadow-lg">
            <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={product.image}
                alt={product.name}
            />
            <div>
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-500 mb-2">${product.price}</p>
                <button
                    className={`bg-blue-500 text-white px-4 py-2 rounded ${findProduct ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                    onClick={() => addToCart(product)}
                    disabled={findProduct}  // Eğer ürün zaten sepetteyse butonu devre dışı bırak
                >
                    Sepete Ekle
                </button>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired,
};

export default ProductItem;
