import { Helmet } from "react-helmet-async";
import ContactForm from "../utils/ContactForm";

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
      </Helmet>

      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3" data-aos="slide-down">
            Our Team
          </h1>
        </div>
      </div>

      {/* <!-- Contact Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Contact Us
            </h5>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div className="col-md-4">
                  <h5 className="section-title ff-secondary fw-normal text-start text-primary">
                    Booking
                  </h5>
                  <p>
                    <i className="fa fa-envelope-open text-primary me-2"></i>
                    book@example.com
                  </p>
                </div>
                <div className="col-md-4">
                  <h5 className="section-title ff-secondary fw-normal text-start text-primary">
                    General
                  </h5>
                  <p>
                    <i className="fa fa-envelope-open text-primary me-2"></i>
                    info@example.com
                  </p>
                </div>
                <div className="col-md-4">
                  <h5 className="section-title ff-secondary fw-normal text-start text-primary">
                    Technical
                  </h5>
                  <p>
                    <i className="fa fa-envelope-open text-primary me-2"></i>
                    tech@example.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-in" data-aos-delay="100">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                style={{ minHeight: "350px", border: "0" }}
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </>
  );
};

export default Contact;
