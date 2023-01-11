/* eslint-disable import/no-unresolved */
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="width h-20 flex justify-between items-center">
      <p className="text-sm font-light">
        © 2023 - Made by Elite Fleet. All rights reserved.
      </p>
      <Link to="/contact">
        <h2 className="link text-sm font-medium">CONTACT US</h2>
      </Link>
    </div>
  );
}

export default Footer;
