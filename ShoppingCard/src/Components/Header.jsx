import React from 'react';
import CartIcon from './CartIcon';
import PropTypes from 'prop-types';

const Header = ({ cart }) => {
    return (
        <div>
            <header className="flex justify-between items-center mb-6 p-4 ">
                <h1 className="text-3xl font-semibold">React + Vite + TailwindCss
                </h1>
                <CartIcon cart={cart} />
            </header>
        </div>
    );
};

Header.propTypes = {
    cart: PropTypes.array.isRequired
};

export default Header;
