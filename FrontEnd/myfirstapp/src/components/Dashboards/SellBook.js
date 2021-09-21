import React, { useState } from 'react'
import data from './mock-data-App.json'

function SellBook() {
    const [radio, setRadio] = useState('');
    const [amount, setAmount] = useState('');
    const [bookState, setbookState] = useState('');
    const [values, setValues] = useState({
        type:"",bookName:"",amount:""
      });
      handleSellFormChange = event =>{
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...values};
        newFormData[fieldName] = fieldValue;
        setValues(newFormData);
      }
      handleSellFormSubmit = event =>{
        event.preventDefault();
        const sellBook = {
          type:values.type,
          bookName:values.bookName,
          amount:values.amount
    
        }
      }
    return (
    <form className = "sell-form" onSubmit={handleSellFormSubmit}>
        <div>
            <div className="radio-buttons">
            NEW
            <input
                id="new"
                value="NEW"
                name="type"
                type="radio"
                required
                onChange={handleSellFormChange}
            />
            OLD
            <input
                id="old"
                value="OLD"
                name="type"
                type="radio"
                onChange={handleSellFormChange}
            />
            </div>
            <select className="custom-select" name="bookName" onChange={handleSellFormChange}>
            {data.map((names) => (
                <option key={names.ABN}>{names.ABN}</option>
            ))}
            </select>
    
            <label>Amount</label>
            <input
                id="amount"
                value={amount}
                name="amount"
                type="text"
                onChange={handleSellFormChange}
            />
            <button className = "sell-submit" type = "submit">DONE</button>
        </div>
    </form>
    );
  }