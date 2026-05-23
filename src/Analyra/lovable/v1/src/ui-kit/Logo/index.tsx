import React from "react";
import { LogoStyled, LogoMarkStyled, LogoWordStyled } from "./styles";
import type { LogoProps } from "./types";

/**
 * Analyra logo — neural node forming an "A" mark.
 * Central node with three connections to satellite nodes,
 * suggesting an AI agent traversing a product graph.
 */
export const Logo: React.FC<LogoProps> = ({ size = 24, showWordmark = true, className }) => {
  return (
    <LogoStyled className={className}>
      <LogoMarkStyled>
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* connections */}
          <path
            d="M16 16 L6 26 M16 16 L26 26 M16 16 L16 5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.55"
          />
          {/* satellite nodes */}
          <circle cx="6" cy="26" r="2.2" fill="currentColor" opacity="0.85" />
          <circle cx="26" cy="26" r="2.2" fill="currentColor" opacity="0.85" />
          <circle cx="16" cy="5" r="2.2" fill="currentColor" opacity="0.85" />
          {/* central node */}
          <circle cx="16" cy="16" r="4.2" fill="currentColor" />
          <circle cx="16" cy="16" r="1.6" fill="#FFFFFF" />
        </svg>
      </LogoMarkStyled>
      {showWordmark && <LogoWordStyled>analyra</LogoWordStyled>}
    </LogoStyled>
  );
};
