import styles from "../../styles/index.css"

export function links() {
  return [{rel: "stylesheet", href: styles}]
}

export default function Index() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <h2>Home Page</h2>
    </div>
  );
}
