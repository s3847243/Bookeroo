import React, { useState,useEffect } from "react";
import data from "./mock-data-App.json";
import { getId } from "../../actions/securityActions";
import { getAllBooks } from "../../actions/bookActions";

function SellOldBook() {
  const [contacts, setContacts] = useState([]);
    useEffect(() => {
      getAllBooks().then((res)=>{
        setContacts(res.data)
      });
    },[])
  const [amount, setAmount] = useState("");
  const [values, setValues] = useState({
    condition: "",
    bookName: "",
    amount: "",
    sellerId:"",
    isbn:"",
    
  });

  handleSellFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...values };
    newFormData[fieldName] = fieldValue;
    setValues(newFormData);
  };
  handleSellFormSubmit = (event) => {
    event.preventDefault();
    var string = values.bookName;
    const words = string.split("|");
    const sellBook = {
      bookTitle: words[0],
      isbn:words[1],
      value:values.amount,
      sellerId:getId(),
      condition: values.condition,


    };
    console.log(sellBook);
  };
  return (
    <form className="sell-form" onSubmit={handleSellFormSubmit}>
      <div>
        <div className="radio-buttons">
          OLD
          <input
            id="old"
            value="Old"
            name="condition"
            type="radio"
            required
            onChange={handleSellFormChange}
          />
        </div>
        <select
          className="custom-select"
          name="bookName"
          onChange={handleSellFormChange}
        >
          {contacts.map((names) => (
            <option key={names.isbn}>
              {names.title} {"|"} {names.isbn} 
            </option>
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
        <button className="sell-submit" type="submit">
          DONE
        </button>
      </div>
    </form>
  );
}
export default SellOldBook;
