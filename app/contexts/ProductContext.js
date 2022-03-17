import React, { useState } from 'react';

const productState = {
    items: [],
}

const ProductContext = React.createContext();

const ProductContextProvider = ({ children }) => {

    return (
        <ProductContext.Provider value={{productState}}>
            {children}
        </ProductContext.Provider>
    )
}


export { ProductContext, ProductContextProvider };