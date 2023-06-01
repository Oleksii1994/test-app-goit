import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Tweet } from 'components/Card/Tweet';
import { BackLink, TweetsContainer, TweetsGallery } from './Tweets.styled';

export const Tweets = () => {
  const location = useLocation();

  const pathToBack = useRef(location.state?.from ?? '/');

  return (
    <TweetsContainer>
      <BackLink to={pathToBack.current}>
        <FaChevronLeft />
        Back
      </BackLink>
      <TweetsGallery>
        <Tweet></Tweet>
      </TweetsGallery>
    </TweetsContainer>
  );
};
