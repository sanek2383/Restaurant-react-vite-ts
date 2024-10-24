import { Helmet } from "react-helmet-async";
import ReservationForm from "../utils/ReservationForm";

const Booking: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Booking Page</title>
      </Helmet>

      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 data-aos="fade-down" className="display-3 text-white mb-3">
            Booking
          </h1>
        </div>
      </div>

      {/* <!-- Reservation Start --> */}
      <div
        className="container-xxl py-5 px-0"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row g-0">
          <div className="col-md-6">
            <div className="video">
              <button
                type="button"
                className="btn-play"
                data-bs-toggle="modal"
                data-src=""
                data-bs-target="#videoModal"
              >
                <span></span>
              </button>
            </div>
          </div>
          <ReservationForm />
        </div>
      </div>

      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalLabel"
              >
                Youtube Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowFullScreen
                  allow="autoplay"
                  title="Video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Reservation End --> */}
    </>
  );
};

export default Booking;
