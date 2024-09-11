import React from 'react'
import PropTypes from 'prop-types';

const Cart = ({ cart, emptyCart }) => {

    if (cart.length === 0)
        return null; // Boş döndürüyoruz

    return (
        <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id} className="mt-2 flex justify-between">
                        <span>{item.name}</span>
                        <span>{item.price} TL</span>
                    </li>
                ))}
            </ul>
            <hr className="my-4" />
            <p className="font-semibold text-xl">
                Toplam: {cart.reduce((total, item) => total + item.price, 0)} $
            </p>
            <button className="bg-red-500 text-white mt-4 px-4 py-2 rounded w-full hover:bg-red-600 transition-all" onClick={emptyCart}>
                Sepeti Boşalt
            </button>
        </div>
    )
}

// Add prop validation for 'cart' and 'emptyCart'
Cart.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
    emptyCart: PropTypes.func.isRequired,
};

export default Cart;
