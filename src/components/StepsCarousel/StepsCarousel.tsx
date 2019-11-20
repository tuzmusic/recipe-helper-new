import React from "react";
import Instruction from "../../models/Instruction";
import Carousel from "react-bootstrap/Carousel";

const StepsCarousel: React.FC<{ steps: Instruction[] }> = ({ steps }) => (
  <Carousel>
    { steps.map(step =>
      <Carousel.Item>
        { step.text }
      </Carousel.Item>
    ) }
  </Carousel>
);

export default StepsCarousel;
