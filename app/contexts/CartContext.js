import React, { useState } from 'react';
import { Alert } from "react-native";

const initCartState = {
    items: [],
    totalCost: 0,
    checkout: false
};

const CartContext = React.createContext({});

const CartContextProvider = ({ children }) => {

    const [cartState, setCartState] = useState(initCartState);

    const addCartItem = (product,alert) => {
        console.log("addCartItem", product.id)
        const item = cartState.items.find((item) => item.product.id === product.id)

        if (item){
            const objIndex  = cartState.items.findIndex((obj => obj.product.id == product.id));
            //console.log(product)
            cartState.items[objIndex].count++
            cartState.items[objIndex].cost = cartState.items[objIndex].count * product.price
            setCartState({...cartState, totalCost: calculateTotalCost()});
            if (alert) Alert.alert('Product is updated in cart with total qty ' + cartState.items[objIndex].count );
        }else{
            setCartState({...cartState, 
                items: [...cartState.items, {"product": product, "count": 1, "cost": product.price} ], 
                totalCost : calculateTotalCost()
            }) ;
            if (alert) Alert.alert('Product is added in cart with total qty 1');
        }

        //console.log(cartState)
    
    }

    const removeCartItem = (product) => {
        console.log('removeCartItem', product.id)

        const item = cartState.items.find((item) => item.product.id === product.id)

        if (item){
            const objIndex  = cartState.items.findIndex((obj => obj.product.id == product.id));
            const count = cartState.items[objIndex].count--           
            count <= 0 ? cartState.items[objIndex].count=0 : cartState.items[objIndex].count
            cartState.items[objIndex].cost = cartState.items[objIndex].count * product.price
            setCartState({...cartState, totalCost: calculateTotalCost()});
        }
        //console.log(cartState)
    }

    const removeAllCartItem = (product) => {
        console.log('removeAllCartItem', product.id)

        const items = cartState.items.filter(obj => obj.product.id !== product.id );
        //console.log(items)
        setCartState({...cartState,items: items, totalCost: calculateTotalCost()});
        //console.log(cartState)     
    
    }

    const calculateTotalCost = () => {
        let totalCost = 0
        cartState.items.map(obj => {
            console.log(obj.cost)
            totalCost += obj.cost;
          });
        
        return totalCost
    }

    return (
        <CartContext.Provider value={{
            cartState,
            addCartItem,
            removeCartItem,
            removeAllCartItem,
            calculateTotalCost
            }}>
            {children}
        </CartContext.Provider>
    )
}


export { CartContext, CartContextProvider };