import React, { useState } from 'react'
import data from './mock-data-App.json'

function SellOldBook() {
   const[radio,setRadio] = useState("");
   const[amount,setAmount] = useState("");
   const [bookState, setbookState] = useState("");
  
    
    return (
       <div>

            <div className="radio-buttons">
            OLD
            <input
                id="old"
                value="OLD"
                name="new"
                type="radio"
                onChange={(e)=>{setRadio(e.target.value)}}
            />
            </div>
            <select
                className="custom-select"
                value={bookState}
                onChange={(e) => {
                const selectedFood = e.target.value;
                setbookState(selectedFood);
                }}
            >
                {data.map((names) => {
                    <option key={names.id} value={names.ABN}>
                        {names.id}
                    </option>
                })}
            </select>

            <label>Amount</label>
            <input
                id="amount"
                value={amount}
                name="amount"
                type="text"
                onChange={(e)=>{setAmount(e.target.value)}}
            />
            <button>DONE</button>
        </div>

    );
    
}