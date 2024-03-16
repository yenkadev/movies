import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <div className="logo">
            <FaYoutube />
            Movies
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
