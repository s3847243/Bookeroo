import React, {Component} from 'react'

class DashContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: props.currentPage
        };
    }


    render() {
        let table;

        if(this.state.currentPage === "allBooks") {
            table = 
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Book Name</th>
                    <th>ISBN</th>
                    <th>Author</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Harry Potter and the Philosipher's Stone</td>
                    <td>9780747532743</td>
                    <td>J. K. Rowling</td>
                </tr>
                </tbody>
            </table>
                        
        }
        
        return (
            <React.StrictMode>
                {table}
            </React.StrictMode>
        )
    }
}

export default DashContent;