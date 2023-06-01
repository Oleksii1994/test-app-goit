import { TweetBox, ContentBox, Logo } from './Tweet.styled';
import logo from '../../images/logo.svg';
import picture from '../../images/picturebgr.png';

export const Tweet = () => {
  return (
    <TweetBox>
      <ContentBox>
        <div>
          <Logo src={logo} alt="logo" width="76" height="20"></Logo>
          <img src={picture} alt="background" width="308" height="168"></img>
        </div>
        <div>Line</div>
        <div>data</div>
      </ContentBox>
    </TweetBox>
  );
};
