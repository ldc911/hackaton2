import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="width h-20 flex justify-between items-center ">
      <h1>ELITE FLEET.</h1>
      <div className="flex gap-8 text-sm">
        <Link to="/login">
          <h2 className="link">LOGIN</h2>
        </Link>
        <Link to="/">
          <h2 className="link">HOME</h2>
        </Link>
        <Link to="/rent">
          <h2 className="link">RENT</h2>
        </Link>
        <Link to="/contact">
          <h2 className="link">CONTACT US</h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
