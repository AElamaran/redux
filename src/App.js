// src/App.js
import React from 'react';
import './App.css';
import CustomerAdd from './CustomerAdd';
import { Provider }  from 'react-redux'
import { Store} from './Store'
import CustomerView from './CustomerView';

function App() {
  return (
    <Provider store={Store} >
      <div className="App">
      <h1>Name List Manager</h1>
      <CustomerAdd />
      <CustomerView/>
    </div>
    </Provider>
    
  );
} 

export default App;
