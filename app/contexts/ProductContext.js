import React, { useState } from 'react';

const initProductState = {
    items: [],
    search_text: ""
}

const ProductContext = React.createContext();

const ProductContextProvider = ({ children }) => {

    const [productState, setProductState] = useState(initProductState);

    return (
        <ProductContext.Provider value={{
            productState,
            setProductState            }}>
            {children}
        </ProductContext.Provider>
    )
}


export { ProductContext, ProductContextProvider };