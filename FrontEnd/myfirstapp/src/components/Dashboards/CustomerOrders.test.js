import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CustomerOrders from "./CustomerOrders";
import ReadTransRow from "./ReadTransRow";

Enzyme.configure({adapter: new Adapter()});

describe("<CustomerOrders/> component Unit Test", () => {

   
    const container = shallow(<CustomerOrders />);
    const table = container.find('table');
    const row = table.find('tr');
    const thead = table.find('thead');
    const headers = thead.find('th');
   

    it('Should give the number of rows', () => {
    
        expect(table).toHaveLength(1);
        expect(row).toHaveLength(1);
        expect(thead).toHaveLength(1);
        expect(headers).toHaveLength(6);
    });
    it("Should render table form", ()=>{
        const component = mount(
            <CustomerOrders/>
        );
        expect(component.find('.tableForm')).toHaveLength(1);    
    });
})