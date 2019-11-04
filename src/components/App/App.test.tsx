import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import App from "./App";
import { mockUrl } from "../ImportRecipeForm/ImportRecipeForm";

describe('App', () => {
  let app: any; // todo: type for rendered component?
  beforeEach(() => {
    app = render(<App/>)
  });
  
  describe('main flow', () => {
    beforeEach(() => {
      // Fill in the url
      const input = app.getByLabelText(/Enter a url of a recipe/i);
      fireEvent.change(input, { target: { value: mockUrl } });
      // Click submit
      fireEvent.click(app.getByText(/submit/i))
    });
  });
  
  it('Shows the steps', () => {
    expect(app.getByText(/position a rack/i))
  });
  
  it('Shows the ingredients', () => {
    expect(app.getByText(/2 large eggs/i))
  });
});
