import React from "react";
import Recipe from "../../models/Recipe";
import IngredientList from "../IngredientList/IngredientList";
import InstructionsList from "../InstructionsList/InstructionsList";
import { CardAccordion } from "../CardAccordion/CardAccordion";
import styled from "@emotion/styled";

const Container = styled.div();
const Header = styled.h1();

const RecipeSummary: React.FC<{ recipe: Recipe }> = ({ recipe }) =>
  (<Container>
    <Header>{ recipe.title }</Header>
    <CardAccordion title='Ingredients'>
      <IngredientList hideTitle recipe={ recipe }/>
    </CardAccordion>
    <CardAccordion title='Instructions'>
      <InstructionsList hideTitle recipe={ recipe }/>
    </CardAccordion>
  </Container>);

export default RecipeSummary
