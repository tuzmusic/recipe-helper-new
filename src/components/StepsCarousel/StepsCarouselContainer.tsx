import React from "react";
import { connect } from 'redux-bundler-react'
import StepsCarousel from "./StepsCarousel";
import Instruction from "../../models/Instruction";

const StepsCarouselContainer: React.FC<{ recipeSteps: Instruction[] }> = ({ recipeSteps }) => (
  <StepsCarousel steps={ recipeSteps }/>
);

export default connect('selectRecipeSteps', StepsCarouselContainer);
