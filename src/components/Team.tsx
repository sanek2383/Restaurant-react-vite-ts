import { Helmet } from 'react-helmet-async';

const Team: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Team Page</title>
      </Helmet>

      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3" data-aos="fade-down">
            Our Team
          </h1>
        </div>
      </div>

      {/* <!-- Team Start --> */}
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Team Members
            </h5>
            <h1 className="mb-5">Our Master Chefs</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src="/img/team-1.jpg"
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src="/img/team-2.jpg"
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src="/img/team-3.jpg"
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src="/img/team-4.jpg"
                    alt=""
                  />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-primary mx-1"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
    </>
  );
}

export default Team;
