import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  position: fixed;
  z-index: 1;
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
    color: #ffc318;
  }
`;

export const TweetsGallery = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TweetsContainer = styled.div`
  position: relative;
  padding: 0 86px;
`;
