import React from 'react';
import {render, screen} from '@testing-library/react';
import Questions from '../Questions';

describe("QuestionComponent", () => {

    beforeEach(() => {
      console.log("RUNS BEFORE EACH TEST")
    })
  
    it('should render same text passed into question prop of data object', async () => {
      const questionData = { question: "This is a question" };
      render(<Questions data={questionData} />);
      const headingElement = screen.getByText(/this is a question/i);
      expect(headingElement).toBeInTheDocument();
    });
  
    it('should render the heading element with text from question prop of data object', async () => {
      const questionData = { question: "This is another question" };
      render(<Questions data={questionData} />);
      const headingElement = screen.getByRole("heading", { name: /this is another question/i });
      expect(headingElement).toBeInTheDocument();
    });
  });
  


