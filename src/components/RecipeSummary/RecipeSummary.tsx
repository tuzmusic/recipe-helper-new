import React from "react";
import Recipe from "../../models/Recipe";
import { Col, Container, Row } from "react-bootstrap";
import IngredientList from "../IngredientList/IngredientList";
import InstructionsList from "../InstructionsList/InstructionsList";

const RecipeSummary: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (<div className="recipe-summary">
    <h1>{ recipe.title }</h1>
    <Container>
      <Row>
        <Col>
          <IngredientList recipe={ recipe }/>
        </Col>
        <Col>
          <InstructionsList recipe={ recipe }/>
        </Col>
      </Row>
    </Container>
  </div>)
};

export default RecipeSummary
