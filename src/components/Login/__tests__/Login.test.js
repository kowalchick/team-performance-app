import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login';

const mockedSetValues = jest.fn

describe("LoginComponent",()=> {

    beforeEach(() => {
        console.log("RUNS BEFORE EACH TEST")
    })


    it('should render input element "Email"', async () => {
        render(
            <Login
                values={[]}
                setValues={mockedSetValues}
            />
        );
        const inputElement = screen.getByLabelText(/Email/i);
        expect(inputElement).toBeInTheDocument();
    });
    it('should render input element "Password"', async () => {
        render(
            <Login
                values={[]}
                setValues={mockedSetValues}
            />
        );
        const inputElement = screen.getByLabelText(/Password/i);
        expect(inputElement).toBeInTheDocument();
    });
    it('should be able to type in "Email" input', async () => {
        render(
            <Login
                values={[]}
                setValues={mockedSetValues}
            />
        );
        const inputElement = screen.getByLabelText(/Email/i);
        fireEvent.change(inputElement,{target:{value: "User email address"}})
        expect(inputElement.value).toBe("User email address");
    });
    it('should be able to type in "Password" input', async () => {
        render(
            <Login
                values={[]}
                setValues={mockedSetValues}
            />
        );
        const inputElement = screen.getByLabelText(/Password/i);
        fireEvent.change(inputElement,{target:{value: "User password"}})
        expect(inputElement.value).toBe("User password");
    });
    it('input should has a border while focused on', async () => {
        render(<Login />);
        const inputElement = screen.getByLabelText(/Email/i);
        fireEvent.mouseOver(inputElement)
        expect(inputElement).toBeVisible(`borderColor: 'rgba(161, 0, 255, 0.5)'`);
    });
})