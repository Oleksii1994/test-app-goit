/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Tweet } from 'components/Card/Tweet';
import { Filter } from 'components/Card/select/Select';
import {
  BackLink,
  TweetsContainer,
  TweetsGallery,
  LoadMoreBtn,
  TitleIfNoFollowings,
} from './Tweets.styled';
import { fetchUsers } from 'api/api';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [updatedUsers, setUpdatedUsers] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [threeElementsToRender, setThreeElementsToRender] = useState(3);
  const [filter, setFilter] = useState('all');
  const [showText, setShowText] = useState(false);
  const [dataFromApi, setDataFromApi] = useState([]);

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
        setDataFromApi(data);
        // setUpdatedUsers(data);
        const firstThreeElements = data.slice(0, threeElementsToRender);
        const filteredData = dataNormalizer(firstThreeElements);

        if (!filteredData.length) {
          Notify.error("Oops, There's no tweets");
          return;
        }

        setUsers(filteredData);

        if (threeElementsToRender !== data.length) {
          setShowButton(true);
        } else if (users.length === data.length) {
          setShowButton(false);
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
  }, [threeElementsToRender]);

  useEffect(() => {
    if (filter === 'all') {
      setShowText(false);
      setShowButton(true);
      setUpdatedUsers(users);

      if (users.length < dataFromApi.length - 1) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    } else if (filter === 'followings') {
      const usersIdsFollowings = JSON.parse(
        localStorage.getItem('followingUsers')
      );
      const filteredUsersArray = users.filter(user =>
        usersIdsFollowings.includes(user.id)
      );

      if (filteredUsersArray.length <= 3) {
        setShowText(false);
        setShowButton(false);
      }
      if (filteredUsersArray.length > 3) {
        setShowText(false);
        setShowButton(false);
      }

      if (filteredUsersArray.length === dataFromApi.length) {
        setShowButton(false);
      }

      if (!filteredUsersArray.length) {
        setShowText(true);
      }
      setUpdatedUsers(filteredUsersArray);
    } else if (filter === 'follow') {
      const usersIdsFollow = JSON.parse(localStorage.getItem('followingUsers'));
      const filteredFollowUsersArray = users.filter(
        user => !usersIdsFollow.includes(user.id)
      );
      if (filteredFollowUsersArray.length >= 3) {
        setShowText(false);
        setShowButton(true);
      }
      if (filteredFollowUsersArray.length < dataFromApi.length - 3) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      setUpdatedUsers(filteredFollowUsersArray);
    }
  }, [filter, users, showButton]);

  const dataNormalizer = arr => {
    return arr.map(({ id, user, tweets, followers, avatar }) => ({
      id,
      user,
      tweets,
      followers,
      avatar,
    }));
  };

  const onFilter = e => {
    setFilter(e.value);
  };

  const counterForData = () => {
    setThreeElementsToRender(prevState => prevState + 3);
  };

  return (
    <TweetsContainer>
      <BackLink to={pathToBack.current}>
        <FaChevronLeft />
        Back
      </BackLink>
      <Filter onChange={onFilter}></Filter>
      <TweetsGallery>
        {updatedUsers.map(({ id, user, tweets, followers, avatar }) => (
          <Tweet
            key={id}
            name={user}
            followers={followers}
            tweets={tweets}
            avatar={avatar}
            userId={id}
          ></Tweet>
        ))}
      </TweetsGallery>

      {showButton && (
        <LoadMoreBtn type="button" onClick={counterForData}>
          Load more
        </LoadMoreBtn>
      )}
      {showText && (
        <TitleIfNoFollowings>
          Oops, it seems you still follow nobody. Hurry up! So many interesting
          people around the world to follow.
        </TitleIfNoFollowings>
      )}
    </TweetsContainer>
  );
};

export default Tweets;
