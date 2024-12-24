import Container from "react-bootstrap/Container";
import Loremipsum from "../components/Loremipsum";
import { loremContent } from "../constants";

const Learnmore = () => {
  return (
    <Container className=" d-flex justify-content-evenly py-5 flex-lg-row flex-column justify-content-between align-items-center">
      {loremContent.map((item) => (
        <Loremipsum key={item.title} {...item} />
      ))}
    </Container>
  );
};
export default Learnmore;
