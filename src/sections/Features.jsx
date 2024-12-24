import Container from "react-bootstrap/Container";
import Featuressemi from "../components/Featuressemi";
import { featuresContent } from "../constants";

const Features = () => {
  return (
    <Container className="py-5">
      <article className="position-relative">
        <h1 className="fea-1 text-opacity-25 fw-bold fs-1 text-center">
          FEATURES
        </h1>
        <h3 className="fea-2 position-absolute start-50 translate-middle text-primary fw-bold  text-center">
          FEATURES
        </h3>
      </article>
      <p className="text-center">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <article>
        <div>
          {featuresContent.map((item) => (
            <Featuressemi key={item.heading} {...item} />
          ))}
        </div>
      </article>
    </Container>
  );
};
export default Features;
