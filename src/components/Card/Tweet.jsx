import {
  TweetBox,
  ContentBox,
  ImageBox,
  Logo,
  Line,
  AvatarBox,
  Circle,
  Avatar,
  DataList,
  DataItem,
  Name,
  Button,
} from './Tweet.styled';
import logo from '../../images/logo.svg';
import picture from '../../images/picturebgr.png';
// import avatar from '../../images/hansel.png';
import circle from '../../images/ellipse.png';

export const Tweet = ({ name, tweets, followers, avatar }) => {
  return (
    <TweetBox>
      <ContentBox>
        <ImageBox>
          <Logo src={logo} alt="logo" width="76" height="20"></Logo>
          <img src={picture} alt="background" width="308" height="168"></img>
        </ImageBox>
        <Line></Line>
        <AvatarBox>
          <Circle src={circle} alt="circle"></Circle>
          <Avatar src={avatar} alt="avatar" />
        </AvatarBox>
        <DataList>
          <DataItem>
            <Name>{name}</Name>
          </DataItem>
          <DataItem>
            <p>{tweets} Tweets</p>
          </DataItem>
          <DataItem>
            <p>{followers} Followers</p>
          </DataItem>
        </DataList>
        <Button type="button">Follow</Button>
      </ContentBox>
    </TweetBox>
  );
};
