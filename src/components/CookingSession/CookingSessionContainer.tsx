import React from "react";
import Recipe from "../../models/Recipe";
import { connect } from 'redux-bundler-react'
import Instruction from "../../models/Instruction";
import CookingSession from "./CookingSession";

type Props = { currentRecipe: Recipe, currentStep: Instruction }

const CookingSessionContainer: React.FC<Props> = ({ currentRecipe, currentStep }) =>
  <CookingSession recipe={ currentRecipe } step={ currentStep }/>;

export default connect('selectCurrentStep', 'selectCurrentRecipe', CookingSessionContainer);
