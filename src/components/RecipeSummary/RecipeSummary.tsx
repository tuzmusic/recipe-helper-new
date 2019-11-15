import React from "react";
import Recipe from "../../models/Recipe";
import IngredientList from "../IngredientList/IngredientList";
import InstructionsList from "../InstructionsList/InstructionsList";
import Accordion from "react-bootstrap/Accordion";
import './RecipeSummary.css'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const IngredientsAccordion = ({ recipe }: { recipe: Recipe }) =>
  <>
    <Card.Header className={ 'card-header' }>
      <Accordion.Toggle as={ Button } variant="link" eventKey="0">
        Ingredients
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body className={ 'card-body' }>
        <IngredientList hideTitle recipe={ recipe }/>
      </Card.Body>
    </Accordion.Collapse>
  </>;

const InstructionsAccordion = ({ recipe }: { recipe: Recipe }) =>
  <>
    <Card.Header className={ 'card-header' }>
      <Accordion.Toggle as={ Button } variant="link" eventKey="1">
        Instructions
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body className={ 'card-body' }>
        <InstructionsList hideTitle recipe={ recipe }/>
      </Card.Body>
    </Accordion.Collapse>
  </>;

const RecipeSummary: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (<div className="recipe-summary">
    <h1>{ recipe.title }</h1>
    <Accordion id={ 'recipe-summary-accordion' }>
      <Card>
        <IngredientsAccordion recipe={ recipe }/>
        <InstructionsAccordion recipe={ recipe }/>
      </Card>
    </Accordion>
  </div>)
};

export default RecipeSummary
