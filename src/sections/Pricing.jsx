import PricingCard from "../components/PricingCard";
import { PricingContent } from "../constants";
const Pricing = () => {
  return (
    <section className="my-5">
      <div className=" flex-lg-row flex-column justify-content-between align-items-center">
        <article className="position-relative">
          <h1 className=" lsb1 text-opacity-25 fw-bold fs-1 text-center">
            PRICING
          </h1>
          <h3 className="lsb2 position-absolute start-50 translate-middle text-primary fw-bold  text-center">
            PRICING
          </h3>
        </article>
        <p className="text-center">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <article className="d-flex justify-content-evenly bg-light bg-dark.bg-gradient text-decoration-none border-0  flex-lg-row flex-column justify-content-between align-items-center">
        {PricingContent.map((item,index) => (
          <PricingCard key={index} {...item} />
        ))}
      </article>
    </section>
  );
};

export default Pricing;
