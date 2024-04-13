import PropTypes from "prop-types";
import "./styles/CategoriesCard.css";
import { Link } from "react-router-dom";
export default function CategoriesCard({ img, title, bg }) {
  return (
    <Link to="" className="categories__card">
      <div className={`categories__card__img__container bg__${bg}`}>
        <img src={img} alt="" className="categories__card__img" />
      </div>
      <div className="categories__card__content cent">
        <h3 className="categories__card__title">{title}</h3>
      </div>
    </Link>
  );
}

CategoriesCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
