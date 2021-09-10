import React from 'react';
import {CSVLink} from 'react-csv';
import data from './mock-data-books.json'
import dataTrans from './mock-data-trans.json'
import "../usersTable.css"

const TransactionHeader = [
  {label:'Id',key:'id'},
  {label:'Book Name',key:'bookName'},
  {label:'customer name',key:'customerName'},
  {label:'date',key:'date'},
  {label:'seller',key:'seller'},
  {label:'amount',key:'amount'},
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
const csvReport = {
  filename:'Report.csv',
  headers:Booksheaders,
  data:data
}
const csvTransReport = {
  filename:'ReportTransactions.csv',
  headers:TransactionHeader,
  data:dataTrans
}
 
function Reports(){
  return(
    <div className='report'>
      <CSVLink {...csvReport}> Export to books CSV</CSVLink>
      <CSVLink {...csvTransReport}> Export to Transaction CSV</CSVLink>
    </div>
  )
}

export default Reports;