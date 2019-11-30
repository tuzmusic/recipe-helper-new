import React from "react";
import Recipe from "../../models/Recipe";
import styled from "@emotion/styled";

const Header = styled.h2();
const List = styled.ul();
const Container = styled.div();

type Props = { recipe: Recipe, hideTitle?: boolean };

const InstructionsList: React.FC<Props> = ({ recipe, hideTitle = false }) => {
  return (
    <Container>
      { !hideTitle && <Header>Instructions</Header> }
      <List>
        { recipe.instructions.map((inst, i) =>
          <li key={ i }>{ inst.text }</li>)
        }
      </List>
    </Container>
  )
};

export default InstructionsList;
