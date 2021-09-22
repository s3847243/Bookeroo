import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AllBooks from "./AllBooks";
import ReadUserRow from "./readRow";
import EditBookRow from "./EditBookRow";

Enzyme.configure({adapter: new Adapter()});

describe("<All Users/> component Unit Test", () => {

    it("Should call handler on Click",()=>{
        const mockFn = jest.fn();
        const mockFn2 = jest.fn();
        const props = {contact: {
            "id": 2,
            "fullName": "The Divine Comedy",
            "phoneNum": "0451233645",
            "address": "124 La trobe s",
            "username": "a@a.com",
            "userType": "USER"
           
        },handleEditClick: mockFn,handleDeleteClick:mockFn2};
        const component = mount(
            <ReadUserRow {...props} />
        )
        component.find('.edit-button').simulate('click');
        expect(mockFn.mock.calls.length).toEqual(1);
    });
})