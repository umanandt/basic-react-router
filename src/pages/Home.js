import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  function naviagteHandler() {
    navigate("/products");
  }
  return (
    <>
      <p>Home page</p>
      <p>
        Go to <Link to="products">the list of products</Link>
      </p>
      <button onClick={naviagteHandler}>Navigate</button>
    </>
  );
};

export default HomePage;
