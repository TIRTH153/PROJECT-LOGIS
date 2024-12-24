import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PricingCard = ({ title, price }) => {
  const features = [
    "Quam adipiscing vitae proin",
    "Nec feugiat nisl pretium",
    "Nulla at volutpat diam uteera",
    "Nulla at volutpat diam uteera",
    "Nulla at volutpat diam uteera",
  ];

  return (
    <Card className="border-0 pricing-card-width">
      <Card.Body>
        <h5 className="text-dark fw-bold ms-4 mt-5">{title} Plan</h5>
        <article className="d-flex ">
          <h6 className="t mb-2 text-primary fw-semibold fs-1 ms-4 mt-3">
            <sup>$</sup>
            {price}
          </h6>
          <p className="fs-3 opacity-25 mt-3">
            <sub> / month</sub>
          </p>
        </article>
        {features.map((flip, index) => (
          <figure  key={index} className="d-flex ms-4 mt-2 gap-2">
            <img
              src={
                title === "Free" && (index === 3 || index === 4)
                  ? "/pricing/xmark-solid.svg"
                  : "/pricing/check-solid (1).svg"
              }
              height="15px"
              width="15px"
              className="mt-2"
              alt=""
            />
            <p>{flip}</p>
          </figure>
        ))}
        <Button
          variant={title === "Business" ? "primary" : "outline-primary"}
          size="lg"
          className="rounded-pill"
        >
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
};
export default PricingCard;
