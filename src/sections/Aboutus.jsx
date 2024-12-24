import Container from "react-bootstrap/Container";
import Aboutsemi from "../components/Aboutsemi";
import { aboutusContent } from "../constants";
const Aboutus = () => {
  return (
    <Container className="py-5">
      <h1 className="text-primary text-start fw-bold text-center">About us</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maxime
        sapiente dolore animi ab, facere ex impedit repellendus ea dolores sed
        maiores vero laborum unde quasiet reiciendis. Exercitationem,
        voluptatem?
      </p>
      <div className="d-flex justify-content-between align-items-center flex-md-row flex-column">
        <div>
        {aboutusContent.map((item) => (
          <Aboutsemi key={item.title} {...item} />
        ))}
        </div>
        <img
          src="/public/aboutus/about.webp"
          height="500"
          width="500"
          className="object-fit-contain img-fluid"
          alt="about"
          loading="eager"
        />
      </div>
    </Container>
  );
};
export default Aboutus;
