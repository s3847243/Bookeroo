import React,{useState} from 'react';

function AddBook(){
    const[values,setValues] = useState({
        bookName:"",ISDB:"",Author:"",date:"",yearUsed:"",category:""
    })
    const [pdfFile, setPdfFile]=useState(null);
    const [pdfFileError, setPdfFileError]=useState('');
    const fileType=['application/pdf'];
    const handlePdfFileChange=(e)=>{
        let selectedFile=e.target.files[0];
            if(selectedFile){
            if(selectedFile&&fileType.includes(selectedFile.type)){
                let reader = new FileReader();
                    reader.readAsDataURL(selectedFile);
                    reader.onloadend = (e) =>{
                    setPdfFile(e.target.result);
                    setPdfFileError('');
                    }
            }
            else{
                setPdfFile(null);
                setPdfFileError('Please select valid pdf file');
            }
            }
            else{
            console.log('select your file');
            }
    }

    // form submit
        const handlePdfFileSubmit=(e)=>{
            e.preventDefault();
            if(pdfFile!==null){
            setViewPdf(pdfFile);
            }
            else{
            setViewPdf(null);
            }
        }

        state = {selecedFile: null}
        fileSelectedHandler = event => {
            this.setState({
                selecedFile:event.target.files[0]
            })
        }
        fileUploadHandler = () =>{
            const fd = new FormData();
            fd.append('image',this.state.selecedFile,this.state.selecedFile.name);
            //axios.post('/api/users/addBook',fd)
        }
        onChange=(e)=>{
            const files = e.target.files;
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload=(e)=>{
                cons
            }
            console.log('dataFiles');
        }
    const handleBookNameInputChange = (event)=>{
        setValues({...values,bookName:event.target.value})
    }
    const handleISDBInputChange = (event)=>{
        setValues({...values,ISDB: event.target.value})
    }
    const handleAuthorInputChange = (event)=>{
        setValues({...values,Author: event.target.value})
    }
    const handleDateInputChange = (event)=>{
        setValues({...values,date: event.target.value})
    }
    const handleCategoryInputChange = (event)=>{
        setValues({...values,category: event.target.value})
    }
    const handleYearsUsedInputChange = (event)=>{
        setValues({...values,yearUsed: event.target.value})
    }

    return(
    <div class="form-container">
        <form class="add-form">
            <input
                id="Book-name"
                value={values.bookName}
                class="form-field"
                type="text"
                placeholder="Book Name"
                name="bookName"
                onChange={handleBookNameInputChange}
            />
            <input
                value={values.ISDB}
                onChange={handleISDBInputChange}
                id="ISDB"
                class="form-field"
                type="text"
                placeholder="ISDB"
                name="ISDB"
            />
            <input
                value={values.Author}
                onChange={handleAuthorInputChange}
                id="Author"
                class="form-field"
                type="text"
                placeholder="Author"
                name="Author"
            />
            <input
                value={values.date}
                onChange={handleDateInputChange}
                id="Date"
                class="form-field"
                type="text"
                placeholder="Date"
                name="Date"
            />
            <input
                value={values.category}
                onChange={handleCategoryInputChange}
                id="Category"
                class="form-field"
                type="text"
                placeholder="Category"
                name="Category"
            />
            <input
                value={values.yearUsed}
                onChange={handleYearsUsedInputChange}
                id="years"
                class="form-field"
                type="text"
                placeholder="years it have been used"
                name="usedYears"
            />
            <input
                id="image"
                class="form-field"
                type="file"
                placeholder="uploadImage"
                name="image"
                onChange={this.fileSelectedHandler}
            />
            <input
                type="file" 
                name="pdf"
                onChange={(e)=>this.onChange(e)}
            />
            <form className='form-group' onSubmit={handlePdfFileSubmit}>
                <input type="file" className='form-control'
                required onChange={handlePdfFileChange}
                />
                {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
                <br></br>
                <button type="submit" className='btn btn-success btn-lg'>UPLOAD</button>
            </form>
            <button onClick={this.fileUploadHandler} class="form-field" type="submit">
            Add Book
            </button>
        </form>
    </div>


    )

}

export default AddBook;