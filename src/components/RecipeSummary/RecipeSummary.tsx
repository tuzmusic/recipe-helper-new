import React from "react";
import Recipe from "../../models/Recipe";
import Container from "react-bootstrap/Container";
import IngredientList from "../IngredientList/IngredientList";
import InstructionsList from "../InstructionsList/InstructionsList";

const RecipeSummary: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (<div className="recipe-summary">
    <h1>{ recipe.title }</h1>
    <Container>
      <IngredientList recipe={ recipe }/>
      <InstructionsList recipe={ recipe }/>
    </Container>
  </div>)
};

export default RecipeSummary
