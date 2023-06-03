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
} from './Tweets.styled';
import { fetchUsers } from 'api/api';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [updatedUsers, setUpdatedUsers] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [threeElementsToRender, setThreeElementsToRender] = useState(3);
  const [filter, setFilter] = useState('all');

  const location = useLocation();

  const pathToBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    console.log(filter);
  }, []);

  useEffect(() => {
    try {
      const getUsers = async () => {
        const { data } = await fetchUsers();
        if (!data.length) {
          Notify.error('Oops, something went wrong.');
          return;
        }
        const firstThreeElements = data.slice(0, threeElementsToRender);
        const filteredData = dataNormalizer(firstThreeElements);
        //   firstThreeElements.map(
        //   ({ id, user, tweets, followers, avatar }) => ({
        //     id,
        //     user,
        //     tweets,
        //     followers,
        //     avatar,
        //   })
        // );

        if (!filteredData.length) {
          Notify.error("Oops, There's no tweets");
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
  }, [threeElementsToRender]);

  useEffect(() => {
    if (filter === 'all') {
      setUpdatedUsers(users);
    } else if (filter === 'followings') {
      const usersIdsFollowings = JSON.parse(
        localStorage.getItem('followingUsers')
      );
      const filteredUsersArray = users.filter(user =>
        usersIdsFollowings.includes(user.id)
      );
      setUpdatedUsers(filteredUsersArray);
    } else if (filter === 'follow') {
      const usersIdsFollow = JSON.parse(localStorage.getItem('followingUsers'));
      const filteredFollowUsersArray = users.filter(
        user => !usersIdsFollow.includes(user.id)
      );
      setUpdatedUsers(filteredFollowUsersArray);
    }
  }, [filter, users]);

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
    console.log(e.value);
  };

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
    </TweetsContainer>
  );
};

export default Tweets;
