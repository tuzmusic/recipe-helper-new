import React from "react";
import Recipe from "../../models/Recipe";
import IngredientList from "../IngredientList/IngredientList";
import InstructionsList from "../InstructionsList/InstructionsList";
import './RecipeSummary.css'
import { CardAccordion } from "../CardAccordion.tsx/CardAccordion";

const RecipeSummary: React.FC<{ recipe: Recipe }> = ({ recipe }) =>
  (<div className="recipe-summary">
    <h1>{ recipe.title }</h1>
    <CardAccordion title='Ingredients'>
      <IngredientList hideTitle recipe={ recipe }/>
    </CardAccordion>
    <CardAccordion title='Instructions'>
      <InstructionsList hideTitle recipe={ recipe }/>
    </CardAccordion>
  </div>);

export default RecipeSummary
