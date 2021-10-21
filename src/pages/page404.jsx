import { Link } from "react-router-dom"

export const PageNotFound = () => {
  return (
    <header className="text-center">
      <h1>404 Page Not Found</h1>
      <p></p>
      <Link to="/">Go Back!</Link>
    </header>
  );
};