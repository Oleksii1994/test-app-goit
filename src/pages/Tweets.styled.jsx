import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;

  width: 80px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  color: #ffffff;
  padding: 6px 8px;
  border-radius: 4px;

  &:hover {
    color: #e893d1;
  }
`;
