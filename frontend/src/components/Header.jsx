import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="width h-20 flex justify-between items-center ">
      <Link to="/">
        <h1>ELITE FLEET.</h1>
      </Link>
      <div className="flex gap-8 text-sm">
        <Link to="/">
          <h2 className="link">HOME</h2>
        </Link>
        <Link to="/rent">
          <h2 className="link">RENT</h2>
        </Link>
        <Link to="/login">
          <h2 className="link">LOGIN</h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
