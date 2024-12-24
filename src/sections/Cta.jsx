import Container from "react-bootstrap/Container";
import Ctasemi from "../components/Ctasemi";

const Cta = () => {
  return (
    <section
      id="call-to-action"
      className="call-to-action section dark-background py-5"
    >
      ::before
      <img src="./cta/cta-bg.jpg" alt="cta" />
      <Container>
        <div
          className="row justify-content-center aos-init aos-animate mt-5"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="col-xl-10">
            <div className="text-center">
              <h3>Call To Action</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <form className="d-flex justify-content-center" role="search">
                <button
                  className="cta-1 btn btn-outline-primary text-white"
                  type="sumbit"
                >
                  call to action
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Cta;
