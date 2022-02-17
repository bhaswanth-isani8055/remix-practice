import { Link } from "react-router-dom";
import styles from "../../../styles/posts.css";

export const links = () => {
	return [{ rel: "stylesheet", href: styles }];
};

const Posts = () => {
	return (
		<div className="post">
			<div>
				<h1>Posts Page</h1>
				<Link to="/" className="primary-btn link">
          Go Back
				</Link>
			</div>
		</div>
	);
};

export default Posts;
