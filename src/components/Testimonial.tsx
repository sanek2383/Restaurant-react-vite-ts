import { Helmet } from "react-helmet-async";
import TestimonialSlider from "../utils/TestimonialSlider";

const Testimonial: React.FC = () => {
  
  return (
    <>
      <Helmet>
        <title>Testimonial Page</title>
      </Helmet>

      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3" data-aos="fade-down">
            Testimonial
          </h1>
        </div>
      </div>

      <div
        className="container-xxl py-5" 
        data-aos="fade-up" 
      >
        <div className="container">
          <div className="text-center">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Testimonial
            </h5>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          <TestimonialSlider />
        </div>
      </div>
    </>
  );
}

export default Testimonial;
