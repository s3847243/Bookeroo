import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BookReview from "./BookReview";


Enzyme.configure({ adapter: new Adapter() });

describe("<BookReview/> component Unit Test", () => {

    it("Should render reviews, and message when no reviews", () => {
        const component = mount(
            <BookReview />
        );

        expect(component.find(".reviews")).toHaveLength(1);
    });

})
