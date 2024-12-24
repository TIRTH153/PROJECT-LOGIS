import Container from "react-bootstrap/Container";

const Featuressemi = ({ image, heading, paragraph, list, index }) => {
  return (
    <Container
      className={`mt-5 d-flex justify-content-between align-items-center ${
        index % 2 === 0 ? "flex-lg-row-reverse" : "flex-lg-row"
      } flex-column justify-content-between`}
    >
      <img
        src={image}
        height="310px"
        width="660px"
        className="mt-5"
        alt={heading}
      />
      <article className="mt-5 align-items-center">
        <h3 className="ms-5 fw-bold text-primary">{heading}</h3>
        <p className="ms-5 ">{paragraph}</p>
        {typeof list === "string" ? (
          <article className="d-flex gap-2 ms-5 ">
            <p>{list}</p>
          </article>
        ) : (
          list.map((item) => (
            <article className="d-flex gap-2 ms-5 " key={item}>
              <img
                src="features/check-solid.svg"
                height="15px"
                width="15px"
                alt=""
                className="mt-1"
              />
              <p>{item}</p>
            </article>
          ))
        )}
      </article>
    </Container>
  );
};
export default Featuressemi;
