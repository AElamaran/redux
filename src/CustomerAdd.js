import React, { useState } from 'react';

import CustomerView from './CustomerView';
import { addCustomer as addCustomerAction } from './Slice/customerSlice';
import { useDispatch } from 'react-redux';

const CustomerAdd = () => {
  const [input, setInput] = useState("");
  // const [customers, setCustomers] = useState([]); no need because we use redux store
  const dispatch=useDispatch();

  // Function to add a new customer
  const addCustomer = () => {
    if (input) {
      // setCustomers((previousState) => [...previousState, input]);no ned to use because we use redux 
      dispatch(addCustomerAction(input))
      setInput(""); // Reset the input field
    }
  };

  // Function to delete a customer by its index
  const deleteCustomer = (indexToDelete) => {
    // setCustomers(customers.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <div>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)} // Update input field value
        />
        <br></br>
        <br></br>
        <button onClick={addCustomer}>Add Customer</button>
      </div>
      {/* Pass customers and deleteCustomer function as props to CustomerView */}
      {/* <CustomerView customers={customers} deleteCustomer={deleteCustomer} /> */}
    </div>
  );
};

export default CustomerAdd;
