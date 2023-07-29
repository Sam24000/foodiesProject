// Importing necessary modules and custom hooks from 'ContextReducer'
import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

// Defining the 'Card' component
export default function Card(props) {
    // Accessing the dispatch function and cart data from the context reducer
    let dispatch = useDispatchCart();
    let data = useCart();

    // Using a ref to store the price input element
    let priceRef = useRef();

    // Extracting options and food item data from the props
    const object = props.options && props.options.length > 0 ? props.options[0] : null;
    const keyoption = object ? Object.keys(object).slice(1) : [];

    const fooditemdata = props.allfooditem;

    // State variables to track quantity and selected size
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    // Function to add the selected food item to the cart
    const addtocart = async () => {
        let food = [];
        for (const item of data) {
            if (item.id === fooditemdata._id) {
                food = item;
                break;
            }
        }
        if (food !== []) {
            // If the food item is already in the cart, update its details
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: fooditemdata._id, price: finalPrice, qty: qty });
                return;
            }
            // If the food item is in the cart but with a different size, add a new entry
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: fooditemdata._id, name: fooditemdata.name, qty: qty, size: size, price: finalPrice });
                return;
            }
            return;
        } else {
            // If the food item is not in the cart, add it as a new entry
            await dispatch({ type: "ADD", id: fooditemdata._id, name: fooditemdata.name, qty: qty, size: size, price: finalPrice });
        }
    }

    // Function to get the price of the selected size
    let finalPrice = qty * parseInt(object ? object[size] || 0 : 0);

    // useEffect hook to set the selected size when the component mounts
    useEffect(() => {
        if (priceRef.current) {
            setSize(priceRef.current.value);
        }
    }, []);

    // Conditionally render the card content based on props.options
    if (!object) {
        return null;
    }

    return (
        <>
            <div className='h-100 m-2'>
                <div className="card bg-transparent mt-3" style={{ width: "18rem" }}>
                    <div>
                        <img className="card-img-top" src={fooditemdata.img} alt="" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{fooditemdata.name}</h5>
                    </div>
                    <div className='container'>
                        {/* Dropdown for selecting quantity */}
                        <select className='m-2 h-100 bg-success' onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        {/* Dropdown for selecting size */}
                        <select className='m-2 h-100 bg-success' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {keyoption.map((data) => (
                                <option key={data} value={data}>{data}</option>
                            ))}
                        </select>
                        {/* Display the final price */}
                        <div className='d-inline m-2 fs-5'> {finalPrice}/-</div>
                        <hr />
                        {/* Button to add the item to the cart */}
                        <button className="btn bg-dark text-alert m-2 mb-3" onClick={addtocart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
