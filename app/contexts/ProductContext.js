import React, { useState } from 'react';

const initProductState = {
    items: [],
    search_text: ""
}

const ProductContext = React.createContext();

const ProductContextProvider = ({ children }) => {

    const [productState, setProductState] = useState(initProductState);

    const searchProduct = (text) => {
/*
        console.log("searchProduct", text)
        const results = productState.items.filter((item) => item.title.include(text))
        setProductState({...productState, items: results, search_text: text});
        console.log(results)
*/        
    }

    return (
        <ProductContext.Provider value={{
            productState,
            setProductState,
            searchProduct
            }}>
            {children}
        </ProductContext.Provider>
    )
}


export { ProductContext, ProductContextProvider };