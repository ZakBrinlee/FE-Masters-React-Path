import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
const NavBar = () => {
  return (
    <header
      css={css`
        background-color: #333;
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 0 0 5px 5px;
        &:hover {
          color: ${colors.darkgrey};
        }
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: 1s ${spin} linear infinite;

          &:hover {
            animation: 1s ${spin} linear infinite reverse;
          }
        `}
        role="img"
        aria-label="logo"
      >
        🐕
      </span>
    </header>
  );
};

export default NavBar;
