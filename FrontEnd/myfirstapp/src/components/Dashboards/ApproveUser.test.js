import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApproveUsers from "./ApproveUsers"

Enzyme.configure({adapter: new Adapter()});

describe("<ApproveUser /> component Unit Test",() =>{
    const cols = [
        { header: 'ID', name: 'id' },
        { header: 'Name', name: 'name' },
        { header: 'Phone', name: 'phoneNum' },
        { header: 'ABN', name: 'abn' },
        { header: 'Address', name: 'address' },
        { header: 'Email', name: 'email' },
        { header: 'Approve', name: 'approve' },
        { header: 'Action', name: 'action' },
        

    ];
    const data = [
        { id: 5, name: 'John', phoneNum:"123456789",abn:"123456789",address:"carlton", email: 'john@example.com' },
        
     ];
    const container = shallow(<ApproveUsers data={data} cols={cols} />);
    const table = container.find('table');
    const row = table.find('tr');
    const thead = table.find('thead');
    const headers = thead.find('th');
   

    it('Should give the number of rows', () => {
        expect(table).toHaveLength(1);
        expect(row).toHaveLength(1);
        expect(thead).toHaveLength(1);
        expect(headers).toHaveLength(cols.length);
    });
    it("Should render table form", ()=>{
        const component = mount(
            <ApproveUsers/>
        );
        expect(component.find('.tableForm')).toHaveLength(1);    
    });

       
    
    
})