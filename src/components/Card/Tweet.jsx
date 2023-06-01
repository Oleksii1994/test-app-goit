import {
  TweetBox,
  ContentBox,
  Logo,
  Line,
  AvatarBox,
  Circle,
  Avatar,
} from './Tweet.styled';
import logo from '../../images/logo.svg';
import picture from '../../images/picturebgr.png';
import avatar from '../../images/hansel.png';
import circle from '../../images/ellipse.png';

export const Tweet = () => {
  return (
    <TweetBox>
      <ContentBox>
        <div>
          <Logo src={logo} alt="logo" width="76" height="20"></Logo>
          <img src={picture} alt="background" width="308" height="168"></img>
        </div>
        <Line></Line>
        <AvatarBox>
          <Circle src={circle} alt="circle"></Circle>
          <Avatar src={avatar} alt="avatar" />
        </AvatarBox>
        <div>data</div>
      </ContentBox>
    </TweetBox>
  );
};
