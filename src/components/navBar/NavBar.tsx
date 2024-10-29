import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <button>
        <Link to="/">LoginPage</Link>
      </button>
      <button>
        <Link to="/firstpage">WorkingPage</Link>
      </button>
    </>
  );
};

export default NavBar;
