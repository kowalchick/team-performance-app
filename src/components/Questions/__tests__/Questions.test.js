import React from 'react';
import {render, screen} from '@testing-library/react';
import Questions from '../Questions';

describe("QuestionComponent",()=> {

    beforeEach(() => {
        console.log("RUNS BEFORE EACH TEST")
    })

    it('should render same text passed into data question prop', async () => {
        render(<Questions data ="question" />);
        const headingElement = screen.getByText(/question/i);
        expect(headingElement).toBeInTheDocument();
    });
    it('should render same text passed into data question prop', async () => {
        render(<Questions data ="question" />);
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toBeInTheDocument();
    });
})


