import React, { useState } from "react";
import "./ImportRecipeForm.css";
import { DEV_MODE } from "../App/App";
import styled from "@emotion/styled";

export const mockUrl = 'https://www.melskitchencafe.com/the-best-fudgy-brownies/';

interface ImportFormProps {
  onSubmit: (url: string) => void;
}

const Container = styled.div({ textAlign: 'center' });

const Label = styled.label({ display: 'block' });

const ImportRecipeForm: React.FC<ImportFormProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState(DEV_MODE ? mockUrl : '');
  
  return (
    <Container>
      <Label htmlFor="recipe-url">Enter a url of a recipe:</Label>
      <input id="recipe-url-input"
             value={ url }
             type="text"
             onChange={ e => setUrl(e.target.value) }
      />
      <br/>
      <button onClick={ () => onSubmit(url) }>Submit</button>
    </Container>
  );
};

export default ImportRecipeForm;
