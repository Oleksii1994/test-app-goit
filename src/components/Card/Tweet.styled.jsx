import styled from '@emotion/styled';

export const TweetBox = styled.li`
  position: relative;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const ContentBox = styled.div`
  padding: 36px 28px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20;
  left: 20;
  transform: translateY(-50%);
`;
