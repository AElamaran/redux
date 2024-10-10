import React from 'react';
import { useSelector } from 'react-redux';
import { deleteCustomer as deleteview } from './Slice/customerSlice';
import { useDispatch } from 'react-redux';
const CustomerView = () => {
  const customers = useSelector((state) => state.customer); // Correct the state access
  const dispatch = useDispatch();

  function deleteCustomer(index){
    dispatch(deleteview(index))

  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Customer List</h2>
      <ul>
        {customers && customers.length > 0 ? (
          customers.map((customer, index) => (  // Wrap this in curly braces
            <li key={index}>  {/* Always provide a unique key */}
              {customer}
              <button 
                onClick={() => deleteCustomer(index)} 
                style={{ marginLeft: '10px', cursor: 'pointer' }}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li>No customers available.</li>
        )}
      </ul>
    </div>
  );
};

export default CustomerView;
