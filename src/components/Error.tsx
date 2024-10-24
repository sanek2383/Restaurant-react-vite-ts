import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

const Error: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Error Page</title>
      </Helmet>

      <div className="not-found-container">
        <h1>404</h1>
        <p>The page was not found</p>
        <Link
          to="/"
          className="home-link"
        >
          Go back to the main page
        </Link>
      </div>
    </>
  )
}

export default Error
