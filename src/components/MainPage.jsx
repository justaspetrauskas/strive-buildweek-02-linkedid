import { Container } from "react-bootstrap";
import ProfileJumbo from "../components/ProfileJumbo";
import Sideprofile from "../components/Sideprofile";

const MainPage = () => {
  return (
    <Container>
      <Sideprofile />
      <ProfileJumbo />
    </Container>
  );
};
export default MainPage;
