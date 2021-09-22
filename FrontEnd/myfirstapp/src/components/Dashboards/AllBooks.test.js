import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AllBooks from "./AllBooks";
import ReadBookRow from "./ReadBookRow";
import EditBookRow from "./EditBookRow";

Enzyme.configure({adapter: new Adapter()});

describe("<AllBooks/> component Unit Test", () => {

    it("Should call handler on Click",()=>{
        const mockFn = jest.fn();
        const mockFn2 = jest.fn();
        const props = {contact: {
            "id": 2,
            "title": "The Divine Comedy",
            "author": "Dante Alighieri",
            "isbn": "9780679433132",
            "genre": "Classics",
            "published": "1320",
           
        },handleEditClick: mockFn,handleDeleteClick:mockFn2};
        const component = mount(
            <ReadBookRow {...props} />
        )
        component.find('.edit-button').simulate('click');
        expect(mockFn.mock.calls.length).toEqual(1);
    });
    const container = shallow(<AllBooks />);
    const table = container.find('table');
    const row = table.find('tr');
    const thead = table.find('thead');
    const headers = thead.find('th');
   

    it('Should give the number of rows', () => {
    
        expect(table).toHaveLength(1);
        expect(row).toHaveLength(1);
        expect(thead).toHaveLength(1);
        expect(headers).toHaveLength(7);
    });
    it("Should render table form", ()=>{
        const component = mount(
            <AllBooks/>
        );
        expect(component.find('.tableForm')).toHaveLength(1);    
    });
})