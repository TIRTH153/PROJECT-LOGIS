import Container from "react-bootstrap/Container";
import Oursersemi from "../components/Oursersemi";
import { Ourservicescontent } from "../constants";

const Ourservices = () => {
  return (
    <Container className="py-5 d-flex justify-content-center flex-lg-row flex-column justify-content-between align-items-center">
      <article>
        <div>
          <article>
            <article className="position-relative">
              <p className="os-p1 text-opacity-25 fw-bold fs-1 text-center">
                OUR SERVICES
              </p>
              <p className="os-p position-absolute start-50 translate-middle text-primary fw-bold  text-center">
                OUR SERVICES
              </p>
            </article>
            <p className="text-center">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </article>
        </div>
        <div className="row">
          {Ourservicescontent.map((item, index) => (
            <div key={item.title} className="col-md-4">
              <Oursersemi {...item} />
            </div>
          ))}
        </div>
      </article>
    </Container>
  );
};
export default Ourservices;
