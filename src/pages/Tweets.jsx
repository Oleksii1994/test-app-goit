import { useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Tweet } from 'components/Card/Tweet';
import {
  BackLink,
  TweetsContainer,
  TweetsGallery,
  LoadMoreBtn,
} from './Tweets.styled';
import { fetchUsers } from 'api/api';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [threeElementsToRender, setThreeElementsToRender] = useState(3);
  const location = useLocation();

  const pathToBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    try {
      const getUsers = async () => {
        const { data } = await fetchUsers();
        if (!data.length) {
          Notify.error('Oops, something went wrong.');
          return;
        }
        const firstThreeElements = data.slice(0, threeElementsToRender);
        const filteredData = firstThreeElements.map(
          ({ id, user, tweets, followers, avatar }) => ({
            id,
            user,
            tweets,
            followers,
            avatar,
          })
        );
        if (!filteredData.length) {
          Notify.error("Oops, something went wrong. There's no tweets");
          return;
        }

        setUsers(filteredData);

        if (threeElementsToRender !== data.length) {
          setShowButton(true);
        } else {
          setShowButton(false);
          Notify.info("Oops! there's no more tweets");
        }
      };
      getUsers();
    } catch (e) {
      Notify.error('Oops, something went wrong.');
      console.log(e.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threeElementsToRender]);

  const counterForData = () => {
    setThreeElementsToRender(prevState => prevState + 3);
    console.log(threeElementsToRender);
  };

  return (
    <TweetsContainer>
      <BackLink to={pathToBack.current}>
        <FaChevronLeft />
        Back
      </BackLink>
      <TweetsGallery>
        {users.map(({ id, user, tweets, followers, avatar }) => (
          <Tweet
            key={id}
            name={user}
            followers={followers}
            tweets={tweets}
            avatar={avatar}
          ></Tweet>
        ))}
      </TweetsGallery>

      {showButton && (
        <LoadMoreBtn type="button" onClick={counterForData}>
          Load more
        </LoadMoreBtn>
      )}
    </TweetsContainer>
  );
};

export default Tweets;
