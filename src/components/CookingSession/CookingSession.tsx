import React from "react";
import Container from "react-bootstrap/Container";
import Recipe from "../../models/Recipe";
import { connect } from 'redux-bundler-react'
import Row from "react-bootstrap/Row";

type Props = { recipe: Recipe }

const CookingSession: React.FC<any> = ({ currentRecipe, currentStep }) => {
  console.log(currentRecipe);
  console.log(currentStep);
  return (<Container>
    <Row></Row>
    <Row><p>currentStep</p>
    </Row>
    <Row></Row>
  </Container>)
};

export default connect('selectCurrentStep', 'selectCurrentRecipe', CookingSession);
