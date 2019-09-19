import React, {useContext} from 'react';
import {CartContext} from "../contexts/CartContext";

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const cart = useContext(CartContext);
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;


/***STEP 5 - Providing data with CartContext**



 - Now that we're providing our cart data, we can start to refactor our `Navigation` and `ShoppingCart` components.

 - Let's start with our `ShoppingCart` component first. Go ahead and refactor the `ShoppingCart` route to no longer use render props. This will throw us an error, but we'll be able to resolve it quickly.

 - While were at it let's go ahead and remove the props from our navigation as well.
 */