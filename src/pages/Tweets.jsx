import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { BackLink } from './Tweets.styled';

export const Tweets = () => {
  const location = useLocation();

  const pathToBack = useRef(location.state?.from ?? '/');

  return (
    <div>
      <BackLink to={pathToBack.current}>
        <FaChevronLeft />
        Back
      </BackLink>
      Cards
    </div>
  );
};
