import { useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Tweet } from 'components/Card/Tweet';
import { BackLink, TweetsContainer, TweetsGallery } from './Tweets.styled';
import { fetchUsers } from 'api/api';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation();

  const pathToBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    try {
      const getUsers = async () => {
        const { data } = await fetchUsers();
        console.log(data);
        const filteredData = data.map(
          ({ id, user, tweets, followers, avatar }) => ({
            id,
            user,
            tweets,
            followers,
            avatar,
          })
        );
        setUsers(filteredData);
      };
      getUsers();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

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
    </TweetsContainer>
  );
};

export default Tweets;
