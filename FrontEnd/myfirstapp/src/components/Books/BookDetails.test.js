import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BookDetails from "./BookDetails";
import BookListing from "./BookListing";
import BookReview from "./BookReview";
import CreateBookReview from "./CreateBookReview";

Enzyme.configure({ adapter: new Adapter() });

describe("<BookDetails/> component Unit Test", () => {
    const match = { params: { isbn: '9780007136582' } };

    it("Should render correct number of listings, with reviews and add reviews", () => {
        const component = mount(
            <BookDetails match={match} />
        );
        component.setState({
            listings: [
                {
                    seller: "example seller",
                    price: "30",
                    condition: "new",
                    qtyRem: "1"
                },
                {
                    seller: "example seller 2",
                    price: "20",
                    condition: "old",
                    qtyRem: "1"
                }
            ],
            book: {
                isbn: "9780007136582",
                title: "Example",
                author: "example",
                genre: "example",
                published: "example",
            }
        });

        expect(component.find(".listings")).toHaveLength(1);
        expect(component.find(BookListing)).toHaveLength(2);
        expect(component.find(".reviews")).toHaveLength(1);
        expect(component.find(".add-review")).toHaveLength(1);
    });

})
