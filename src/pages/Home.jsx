import bgrimage from "../images/picturebgr.png";
import { HeroTitle, HomeContainer, HeroImage } from "./Home.styled";

export const Home = () => {
  return (
    <HomeContainer>
      <HeroTitle>Your tweets here!</HeroTitle>
      <HeroImage src={bgrimage} alt="main image" />
    </HomeContainer>
  );
};
