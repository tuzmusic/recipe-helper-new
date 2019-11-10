import React from "react";
import { connect } from 'redux-bundler-react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeSummary from "../RecipeSummary/RecipeSummary";
import CookingSession from "./CookingSession";
import Recipe from "../../models/Recipe";

type Props = { currentRecipe: Recipe }

const CookingSessionContainer: React.FC<Props> = ({ currentRecipe }) => {
  return (<Container>
    <Row>
      <Col>
        <RecipeSummary recipe={ currentRecipe }/>
      </Col>
      <Col>
        <CookingSession recipe={ currentRecipe }/>
      </Col>
    </Row>
  </Container>)
};

export default connect('selectCurrentRecipe', 'selectCurrentStep', CookingSessionContainer);

