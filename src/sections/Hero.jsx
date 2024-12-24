import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { StatContent } from "../constants";
import StatCard from "../components/StatCard";
const Hero = () => {
  return (
    <Container className="d-flex justify-content-center flex-lg-row flex-column my-5 ">
      <article className=" flex-sm-row flex-column justify-content-between align-items-center">
        <h1 className="fs1 fw-bolder text-white ">
          Your Lightning Fast Delivery 
        </h1>
        <h1 className="fs-1 fw-semibold text-white">Partner</h1>
        <p className="mt-4 fw-semibold text-white">
          Facere distinctio molestiae nisi fugit tenetur repellat non
          praesentium nesciunt optio quis sit odio nemo quisquam. eius quos
          reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam
          occaecati odio est possimus vel reprehenderit
        </p>
        <div>
          <Form className="mt-5 d-flex gap-2" action="#">
            <Form.Control
              type="search"
              placeholder="Search"
              className="rounded w-50 p-3"
            />
            <Button variant="primary" size="lg" type="send">
              Search
            </Button>
          </Form>
        </div>
        <div className=" mt-5">
          <div className="gap-5 text-white fw-bold d-flex">
            {StatContent.map((item) => (
              <StatCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </article>
      <figure>
        <img
          src="/hero/hero-img.svg"
          height="500"
          width="500"
          className="img-fluid"
          alt="hero"
        />
      </figure>
    </Container>
  );
};
export default Hero;
