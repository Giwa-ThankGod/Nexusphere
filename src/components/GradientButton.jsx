import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GradientButton = () => {
  return (
    <Link to="/contact">
      <Button className="rounded-2xl hover:bg-white lg:py-7 py-3 lg:px-12 px-3 text-white lg:text-2xl text-lg font-500 font-semibold cursor-pointer">
        Begin your project
      </Button>
    </Link>
  );
};

export default GradientButton;
const Button = styled.button`
  background: linear-gradient(92.73deg, #3a008c 26.15%, #8543e2 117.44%);
`;
