import React from "react";
import styled from "styled-components";

const GradientButton = () => {
  return (
    <Button className="rounded-2xl py-7 px-12 text-white text-2xl font-500 font-semibold">
      Begin your project
    </Button>
  );
};

export default GradientButton;
const Button = styled.button`
  background: linear-gradient(92.73deg, #3a008c 26.15%, #8543e2 117.44%);
`;
