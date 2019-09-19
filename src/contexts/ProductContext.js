import {createContext, useState} from 'react';

export const ProductContext = createContext();

export const ProductContextProvider = props => {
    const [products, setProducts] = useState();

    return (
        <ProductContext.Provider>
            {props.children}
        </ProductContext.Provider>
    )
}


