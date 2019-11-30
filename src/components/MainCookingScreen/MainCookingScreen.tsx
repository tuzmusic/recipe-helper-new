import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CookingSession from "../CookingSession/CookingSessionContainer";
import RecipeSummaryContainer from "../RecipeSummary/RecipeSummaryContainer";

const MainCookingScreen: React.FC<{}> = () =>
  (<Container>
    <Row>
      <Col>
        <RecipeSummaryContainer/>
      </Col>
      <Col>
        <CookingSession/>
      </Col>
    </Row>
  </Container>);

export default MainCookingScreen;


