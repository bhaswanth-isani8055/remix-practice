import { Link } from "react-router-dom";
import styles from "../../styles/posts.css";

export const links = () => {
	return [{ rel: "stylesheet", href: styles }];
};

const Posts = () => {
	return (
		<div className="post">
			<h1>Posts Page</h1>
			<div>
				<Link to="/" className="primary-btn link">
					Go Back
				</Link>
				<Link to="/" className="outline-btn link">
					Go Back
				</Link>
			</div>
		</div>
	);
};

export default Posts;
