import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Cart() {
  let data = useCart(); // Getting the cart data from the global state using the 'useCart' hook
  let dispatch = useDispatchCart(); // Getting the dispatch function from the global state using the 'useDispatchCart' hook

  if (data.length === 0) {
    // If the cart is empty, display a message
    return (
      <div>
        <div className="m-5 text-center fs-3">
          Cart is Empty!
        </div>
      </div>
    );
  }

  // Calculating the total price of all items in the cart
  let totalprice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div data-bs-spy="scroll" data-bs-target="#cartbody">
      <div className="container m-auto mt-3 table-responsive" id="cartbody">
        {/* Displaying the cart items in a table */}
        <table className="table table-hover">
          <thead className="text-success">
            <tr className="table-primary">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-info">
            {/* Mapping through the cart items and displaying them in the table rows */}
            {data.map((food, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  {/* Button to remove an item from the cart */}
                  <button
                    type="button"
                    className="btn p-0"
                    onClick={() => {
                      dispatch({ type: "REMOVE", index: index }); // Dispatching the 'REMOVE' action with the index of the item to be removed
                    }}
                  >
                  Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-1"> Total Price: {totalprice}</h1> {/* Displaying the total price of all items in the cart */}
        </div>
      </div>
    </div>
  );
}
