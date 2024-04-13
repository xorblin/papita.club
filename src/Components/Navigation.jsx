import "./styles/Navigation.css";
import Papita from "../assets/papita.svg";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="nav__container row">
      <div className="logo__container">
        <Link to="/">
          <img src={Papita} alt="" />
        </Link>
      </div>
    </nav>
  );
}
