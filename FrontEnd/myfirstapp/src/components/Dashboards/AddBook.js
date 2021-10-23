import React,{useState} from 'react';
import { addBook } from '../../actions/addBookActions';

function AddBook(){
    const[values,setValues] = useState({
        title:"",isbn:"",author:"",published:"",genre:"",tableOfContents:""
    })
    const [pdfFile, setPdfFile]=useState(null);
    const [pdfFileError, setPdfFileError]=useState('');
    const fileType=['application/pdf'];
    // const handlePdfFileChange=(e)=>{
    //     let selectedFile=e.target.files[0];
    //         if(selectedFile){
    //             if(selectedFile&&fileType.includes(selectedFile.type)){
    //                 let reader = new FileReader();
    //                     reader.readAsDataURL(selectedFile);
    //                     reader.onloadend = (e) =>{
    //                     setPdfFile(e.target.result);
    //                     setPdfFileError('');
    //                     }
    //             }
    //             else{
    //                 setPdfFile(null);
    //                 setPdfFileError('Please select valid pdf file');
    //             }
    //         }
    //         else{
    //         console.log('select your file');
    //         }
    // }

    // form submit
        // const handlePdfFileSubmit=(e)=>{
        //     e.preventDefault();
        //     if(pdfFile!==null){
        //     setViewPdf(pdfFile);
        //     }
        //     else{
        //     setViewPdf(null);
        //     }
        // }

        // state = {selecedFile: null}
        // fileSelectedHandler = event => {
        //     this.setState({
        //         selecedFile:event.target.files[0]
        //     })
        // }
        // fileUploadHandler = () =>{
        //     const fd = new FormData();
        //     fd.append('image',this.state.selecedFile,this.state.selecedFile.name);
        //     //axios.post('/api/users/addBook',fd)
        // }
        // onChange=(e)=>{
        //     const files = e.target.files;
        //     const reader = new FileReader();
        //     reader.readAsDataURL(files[0]);
        //     reader.onload=(e)=>{
        //         cons
        //     }
        //     console.log('dataFiles');
        // }
    const handleAddFormChange = (event) =>{
        if(values.tableOfContents.length > 200){
            alert('Table of Contents need to be less than 200 characters');
        }
        
        const fieldName = event.target.getAttribute("name");
        
        const fieldValue = event.target.value;
        const newFormData = { ...values};
        newFormData[fieldName] = fieldValue;
        setValues(newFormData);
    }
    const handleAddFormSubmit = (e) =>{
        e.preventDefault();
        const newBook = {
            
            title: values.title, // title
            isbn:values.isbn,          // isbn
            author:values.author,      // author
            published:values.published,           // published
            genre:values.genre, 
            tableOfContents:values.tableOfContents   // genre


        }
        addBook(newBook);
        console.log(newBook);
        e.target.reset();
    }

    return(
    <div style={{marginTop: "50px",
    width:'50%',
    backgroundPosition: "center"
    }} className="form-container">
        <form style={{margin:"25px 85px 75px 100px"}} className="add-form" onSubmit={handleAddFormSubmit}>
            <input
                id="Book-name"
                className="form-control"
                type="text"
                placeholder="Book Name"
                name="title"
                onChange={handleAddFormChange}
            />
            <br></br>
            <h6 htmlFor="isbn">Isbn must be 13 numerical characters</h6>
            <input
                onChange={handleAddFormChange}
                id="ISBN"
                className="form-control"
                type="text"
                placeholder="ISBN"
                name="isbn"
            />
            <br></br>
            <input
                onChange={handleAddFormChange}
                id="author"
                className="form-control"
                type="text"
                placeholder="author"
                name="author"
            />
            <br></br>
            <input
                onChange={handleAddFormChange}
                id="published"
                className="form-control"
                type="text"
                placeholder="published"
                name="published"
            />
            <br></br>
            <input
                onChange={handleAddFormChange}
                id="genre"
                className="form-control"
                type="text"
                placeholder="genre"
                name="genre"
            />
            <br></br>
            <h6 htmlFor="isbn">Enter Table of Contents under 200 characters</h6>
            <textarea
                onChange={handleAddFormChange}
                id="tableOfContents"
                className="form-control"
                type="text"
                placeholder="tableOfContents"
                name="tableOfContents"
            />
            
            <button className="form-control  btn btn-primary" style={{marginTop:'30px'}} type="submit">
            Add Book
            </button>
        </form>
    </div>


    )

}

export default AddBook;