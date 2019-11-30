import React from "react";
import Recipe from "../../models/Recipe";
import IngredientViewContainer from "../IngredientView/IngredientViewContainer";
import styled from "@emotion/styled";

const Header = styled.h2();
const List = styled.ul();
const Container = styled.div();
const Ingredient = styled(IngredientViewContainer)();
type Props = { recipe: Recipe, hideTitle?: boolean }

const IngredientList: React.FC<Props> = ({ recipe, hideTitle = false }) => {
  return (
    <Container>
      { !hideTitle && <Header>Ingredients</Header> }
      <List>
        { recipe.ingredients.map((ing, i) => <Ingredient key={ i } ingredient={ ing }/>) }
      </List>
    </Container>
  )
};

export default IngredientList;
