import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import {ProductContextProvider} from "./contexts/ProductContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
    const [cart, setCart] = useState([]);

    const addItem = item => {
        setCart([...cart, item]);
    };

    return (
        <ProductContextProvider>
            <div className="App">
                <Navigation cart={cart}/>

                {/* Routes */}
                <Route exact path="/" component={Products}/>

                <Route
                    path="/cart"
                    render={() => <ShoppingCart cart={cart}/>}
                />
            </div>
        </ProductContextProvider>
    );
}

export default App;
