import React from "react";
import styled from "styled-components";

const GradientButton = () => {
  return (
    <Button className="rounded-2xl lg:py-7 py-3 lg:px-12 px-3 text-white lg:text-2xl text-lg font-500 font-semibold">
      Begin your project
    </Button>
  );
};

export default GradientButton;
const Button = styled.button`
  background: linear-gradient(92.73deg, #3a008c 26.15%, #8543e2 117.44%);
`;
