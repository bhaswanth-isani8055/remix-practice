import { Link } from "react-router-dom"
import styles from "../styles/index.css"

export const links = () => {
  return [{rel: "stylesheet", href: styles}]
}

const Index = () => {
  return (
    <div className="container">
      <Link to="/movies" className="primary-btn">Go to Movies</Link>
    </div>
  );
}

export default Index;
