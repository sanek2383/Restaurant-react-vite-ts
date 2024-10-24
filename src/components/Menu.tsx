import { Helmet } from "react-helmet-async"
import MenuAPI from "../utils/MenuAPI"


const Menu: React.FC = () => {
  

  return (
    <>
      <Helmet>
        <title>Menu Page</title>
      </Helmet>

      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 data-aos="fade-down" className="display-3 text-white mb-3">
            Food Menu
          </h1>
        </div>
      </div>
      <MenuAPI />
    </>
  )
}

export default Menu
