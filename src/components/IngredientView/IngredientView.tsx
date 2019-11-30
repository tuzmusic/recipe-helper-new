import React from "react";
import Ingredient from "../../models/Ingredient";
import styled from "@emotion/styled";

type Props = {
  ingredient: Ingredient,
  toggleChecked: Function,
}

const Container = styled.div<{ checked: boolean }>(({ checked }) => ({
  display: 'block',
  textDecoration: checked ? 'line-through' : 'none'
}));

const Checkbox = styled.input<{ checked: boolean }>(({ checked }) => ({
  display: 'inline',
  checked
}));

const Item = styled.li({
  display: 'inline'
});

const IngredientView: React.FC<Props> = ({ ingredient, toggleChecked }) => (
  <Container onClick={ () => toggleChecked() } checked={ ingredient.completed }>
    <Checkbox type='checkbox' checked={ ingredient.completed } readOnly/>
    <Item>{ ingredient.stringDescription }</Item>
  </Container>
);

export default IngredientView;
