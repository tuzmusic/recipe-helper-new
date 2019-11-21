import React from "react";
import { connect } from 'redux-bundler-react'
import StepsCarousel from "./StepsCarousel";

export default connect(
  'selectRecipeSteps',
  'selectCurrentStepIndex',
  'doSetIndex',
  StepsCarousel
);
