import React, { useState ,useEffect} from 'react'
import data from './mock-data-App.json'
import { getId, getName } from '../../actions/securityActions';
import { getAllBooks } from '../../actions/bookActions';
import { addListing } from '../../actions/listingActions';

function SellBook() {

  const [contacts, setContacts] = useState([]);
    useEffect(() => {
      getAllBooks().then((res)=>{
        setContacts(res.data)
      });
    },[])
  const [amount, setAmount] = useState("");
  const [values, setValues] = useState({
    condition: "",
    amount: "",
    bookName:"The Lord of the Rings | 9780007136582",
  });

 const handleSellFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...values };
    newFormData[fieldName] = fieldValue;
    setValues(newFormData);
    console.log(values);
  };

  const handleSellFormSubmit = (event) => {
    event.preventDefault();
    var string = values.bookName;
    const words = string.split("|");
    const sellBook = {
      isbn:words[1].trim(),
      val:values.amount,
      sellerId:getId(),
      sellerName:getName(),
      cond: values.condition,
    };
    addListing(sellBook);
  };
  return (
    <form className="sell-form" onSubmit={handleSellFormSubmit}>
      <div>
        <div className="radio-buttons">
          NEW
          <input
            id="new"
            value="NEW"
            name="condition"
            type="radio"
            required
            onChange={handleSellFormChange}
          />
          OLD
          <input
            id="old"
            value="OLD"
            name="condition"
            type="radio"
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
export default SellBook;