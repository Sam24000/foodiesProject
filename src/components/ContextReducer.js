// Importing necessary modules and hooks from React
import React, { createContext, useContext, useReducer } from "react";

// Creating two contexts: one for cart state and another for cart dispatch
const cartState = createContext();
const cartDispath = createContext();

// Defining the reducer function to handle cart state updates
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            // Adding a new item to the cart
            return [...state, { id: action.id, name: action.name, price: action.price, qty: action.qty, size: action.size, img: action.img }];

        case "REMOVE":
            // Removing an item from the cart based on its index in the state array
            let updatedcart = [...state];
            updatedcart.splice(action.index, 1);
            return updatedcart;

        case "UPDATE":
            // Updating an existing item in the cart based on its ID
            let updatearr = [...state];
            updatearr.find((food, index) => {
                if (food.id === action.id) {
                    updatearr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price };
                }
                return updatearr;
            });
            return updatearr;

        default:
            console.log("error in reducer");
            return state; // Make sure to always return the state in the default case
    }
}

// Exporting a custom component 'Cartdata' that provides cart state and dispatch to its children
export const Cartdata = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []); // Initializing cart state using the reducer

    return (
        <cartDispath.Provider value={dispatch}> {/* Providing cart dispatch to the children */}
            <cartState.Provider value={state}> {/* Providing cart state to the children */}
                {children}
            </cartState.Provider>
        </cartDispath.Provider>
    )
}

// Custom hooks to easily access cart state and dispatch from any component within the Cartdata context
export const useCart = () => useContext(cartState); // Returns the cart state
export const useDispatchCart = () => useContext(cartDispath); // Returns the cart dispatch function
