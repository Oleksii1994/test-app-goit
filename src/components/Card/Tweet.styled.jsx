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

export const Line = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 226px;

  overflow: visible;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarBox = styled.div`
  position: absolute;
  top: 198px;
  left: 158px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgb(87 54 163);
`;

export const Circle = styled.img`
  position: absolute;
  top: -6px;
  left: -9px;
  width: 80px;
  height: 80px;
  // border: 8px solid #ebd8ff;
  border-radius: 50%;
  // background: rgb(87 54 163);
  // box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
  //   inset 0px -2.19582px 4.39163px #ae7be3,
  //   inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Avatar = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  transform: translateY(-4px);
  object-fit: cover;
`;
