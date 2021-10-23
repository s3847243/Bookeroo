import React,{ useState, Fragment, useEffect } from 'react';
import {CSVLink} from 'react-csv';
import { getAllTransactionsAdmin } from '../../actions/dashboardActions';
import { getAllBooks } from '../../actions/bookActions';
import "../usersTable.css"

const TransactionHeader = [
  {label:'Id',key:'id'},
  {label:'BookID',key:'bookId'},
  {label:'customerId',key:'customerId'},
  {label:'sellerId',key:'sellerId'},
  {label:'amount',key:'value'},
  {label:'status',key:'status'}
]
const Booksheaders = [
  {label:'Id',key:'id'},
  {label:'Book Name',key:'bookName'},
  {label:'Author',key:'Author'},
  {label:'ISDB',key:'ISDB'},
  {label:'seller',key:'seller'},
  {label:'category',key:'category'},
  {label:'status',key:'status'},
  {label:'type',key:'bookName'},
]
function Reports(){
  const [contacts, setContacts] = useState([]);
    useEffect(() => {
      getAllBooks().then((res)=>{
        if(res === undefined) {return}
        setContacts(res.data)
      });
    },[])
    const [value, setValues] = useState([]);
    useEffect(() => {
      getAllTransactionsAdmin().then((res)=>{
        if(res === undefined) {return}
        setValues(res.data)
      });
    },[])
  const csvReport = {
    filename:'Report.csv',
    headers:Booksheaders,
    data:contacts
  }
  const csvTransReport = {
    filename:'ReportTransactions.csv',
    headers:TransactionHeader,
    data:value
  }
  return(
    <div style={{marginTop: "50px",
    
    }} className='report'>
      <h1 style={{margin:"25px 85px 75px 100px", textAlign:"center"}}>Exporting Reports of Books in CSV format</h1>
      <CSVLink {...csvReport}> Export to books CSV</CSVLink>
      <br></br>
      <h1 style={{margin:"25px 85px 75px 100px", alignContent:"center"}}>Exporting Reports of Transaction in CSV format</h1>
      <CSVLink {...csvTransReport}> Export to Transaction CSV</CSVLink>
    </div>
  )
}

export default Reports;