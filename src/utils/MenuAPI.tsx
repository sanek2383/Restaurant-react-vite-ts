import React, { useState } from "react";
import menuDB from "../../menuDB.json";

interface Dish {
  id: string;
  image_url: string;
  dish: string;
  price: string;
  description: string;
}

interface MenuAPI {
  menu: Dish[];
}

const MenuAPI: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Breakfast");
  const filteredDishes = menuDB.menu.filter((dish) => dish.id === selectedTab);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Food Menu
          </h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>

        <div className="tab-class text-center" data-aos="fade-up" data-aos-delay="100">
          <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            <li className="nav-item">
              <a
                className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${selectedTab === "Breakfast" ? "active-tab" : ""}`}
                data-bs-toggle="pill"
                href="#tab-1"
                onClick={() => setSelectedTab("Breakfast")}
              >
                <i className="fa fa-coffee fa-2x text-primary"></i>
                <div className="ps-3">
                  <small className="text-body">Popular</small>
                  <h6 className="mt-n1 mb-0 text-primary">Breakfast</h6>
                </div>
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`d-flex align-items-center text-start mx-3 pb-3 ${selectedTab === "Lunch" ? "active-tab" : ""}`}
                data-bs-toggle="pill"
                href="#tab-2"
                onClick={() => setSelectedTab("Lunch")}
              >
                <i className="fa fa-hamburger fa-2x text-primary"></i>
                <div className="ps-3">
                  <small className="text-body">Special</small>
                  <h6 className="mt-n1 mb-0 text-primary">Lunch</h6>
                </div>
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`d-flex align-items-center text-start mx-3 me-0 pb-3 ${selectedTab === "Dinner" ? "active-tab" : ""}`}
                data-bs-toggle="pill"
                href="#tab-3"
                onClick={() => setSelectedTab("Dinner")}
              >
                <i className="fa fa-utensils fa-2x text-primary"></i>
                <div className="ps-3">
                  <small className="text-body">Lovely</small>
                  <h6 className="mt-n1 mb-0 text-primary">Dinner</h6>
                </div>
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {filteredDishes.map((dish) => (
                  <div className="col-lg-6" key={dish.dish}>
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={dish.image_url}
                        alt={dish.dish}
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{dish.dish}</span>
                          <span className="text-primary">${dish.price}</span>
                        </h5>
                        <small className="fst-italic">
                          {dish.description}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuAPI;

