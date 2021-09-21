import React,{useState} from 'react';
import { addBook } from '../../actions/addBookActions';

function AddBook(){
    const[values,setValues] = useState({
        title:"",isbn:"",author:"",published:"",genre:""
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
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        
        const fieldValue = event.target.value;
        // if(fieldName === "image"){
        //     fieldValue = event.target.files[0];
        // }
        // if(fieldName === "pdf"){
        //     if(fileType.includes((event.target.files[0].type))){
        //         fieldValue = event.target.files[0];
        //     }else{
        //         setPdfFile(null);
        //         setPdfFileError('Please select valid pdf file');
        //     }
        // }
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
            genre:values.genre,    // genre


        }
        addBook(newBook);
        console.log(newBook);
        e.target.reset();
    }

    return(
    <div class="form-container">
        <form class="add-form" onSubmit={handleAddFormSubmit}>
            <input
                id="Book-name"
                className="form-field"
                type="text"
                placeholder="Book Name"
                name="title"
                onChange={handleAddFormChange}
            />
            <input
                onChange={handleAddFormChange}
                id="ISBN"
                className="form-field"
                type="text"
                placeholder="ISBN"
                name="ISBN"
            />
            <input
                onChange={handleAddFormChange}
                id="author"
                className="form-field"
                type="text"
                placeholder="author"
                name="author"
            />
            <input
                onChange={handleAddFormChange}
                id="published"
                className="form-field"
                type="text"
                placeholder="published"
                name="published"
            />
            <input
                onChange={handleAddFormChange}
                id="genre"
                className="form-field"
                type="text"
                placeholder="genre"
                name="genre"
            />
            {/* <input
                id="image"
                class="form-field"
                type="file"
                placeholder="uploadImage"
                name="image"
                onChange={handleAddFormChange}
            />
            <div className="form-group col-md-6">
                <label className="text-white">Select File :</label>
                <input type="file" className="form-control" name="pdf" required onChange={handleAddFormChange} />
            </div>
            {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
            <br></br> */}
            <button className="form-field" type="submit">
            Add Book
            </button>
        </form>
    </div>


    )

}

export default AddBook;