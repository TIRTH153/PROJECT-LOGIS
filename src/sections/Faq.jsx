import Accordion from 'react-bootstrap/Accordion';
import AccordionCollapse from 'react-bootstrap/AccordionCollapse'
const Faq = () => {
    
    return (
        
        <><section>
            <div>
                    <article className="position-relative mt-5 ">
                        <h1 className="faq-1 text-opacity-25 fw-bold fs-1 text-center" >FREQUENTLY ASKED QUESTIONS</h1>
                        <h3 className="faq-2 position-absolute start-50 translate-middle text-primary fw-bold  text-center" >FREQUENTLY ASKED QUESTIONS</h3>
                    </article>
                    <p className="text-center mt-5 ">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
        </section><div className="container accordion        " id="accordionExample">
                <div className="accordion-item mt-5">
                    <h2 className="accordion-header">

                        <button className="accordion-button bg-primary text-white fs-5 fw-bold gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <img src="./public/Faq/question-solid (1).svg" height="20px" width="20px" alt=""/>
                                Non consectetur a erat nam at lectus urna duis?

                        </button>

                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show bg-primary" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p className="text-white">Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed text-primary fs-5 fw-bold gap-2 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <img src="./public/Faq/question-solid.svg" height="20px" width="20px" alt=""/>
                                Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                            </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed text-primary fs-5 fw-bold gap-2 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <img src="./public/Faq/question-solid.svg" height="20px" width="20px" alt=""/>
                                Dolor sit amet consectetur adipiscing elit pellentesque?
                        </button>
                    </h2>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed text-primary fs-5 fw-bold gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <img src="./public/Faq/question-solid.svg" height="20px" width="20px" alt=""/>
                                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                        </button>
                    </h2>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header body-bg-tertiary">
                        <button className="accordion-button collapsed text-primary fs-5 fw-bold gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <img src="./public/Faq/question-solid.svg" height="20px" width="20px" alt=""/>
                                Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                            </button>
                    </h2>
                </div>
                
            </div>
            
            </>
            
    );
    
};

export default Faq;
