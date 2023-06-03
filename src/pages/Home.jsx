import { useEffect } from 'react';
import bgrimage from '../images/picturebgr.png';
import { HeroTitle, HomeContainer, HeroImage } from './Home.styled';

const Home = () => {
  useEffect(() => {
    localStorage.setItem('followingUsers', JSON.stringify([]));
    // console.log(followingUsers);
  }, []);

  return (
    <HomeContainer>
      <HeroTitle>Your tweets here!</HeroTitle>
      <HeroImage src={bgrimage} alt="main image" />
    </HomeContainer>
  );
};

export default Home;
