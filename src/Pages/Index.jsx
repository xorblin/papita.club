import "./styles/Index.css";
import Strip from "../assets/strip.png";
import { Link } from "react-router-dom";
import CatStrip from "../assets/cat__strip.png";
import CategoriesImg from "../assets/categories.png";
import categories from "../import/categories";
import PapitaProImg from "../assets/papita__pro.png";
import CategoriesCard from "../Components/CategoriesCard";
export default function Index() {
  return (
    <div>
      <div className="banner__container">
        <div className="banner__videos"></div>
        <div className="rotated__strip__container">
          <img className="rotated__strip" src={Strip} alt="" />
        </div>
      </div>
      {/* Cloth Categories */}
      <div className="categories__container">
        <div className="categories__banner cent">
          <img className="categories__banner__img" src={CategoriesImg} alt="" />
        </div>
        <div className="categories__card__container cent">
          <div className="categories__card__items row">
            {categories.map((category, index) => (
              <CategoriesCard
                key={index}
                img={category.img}
                title={category.title}
                bg={category.bg}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="categories__strip__cont">
        <img className="categories__strip" src={CatStrip} alt="" />
      </div>
      {/*  */}
      <div className="papita__pro__container row">
        <div className="papita__items papita__pro__content">
          <div>
            <div>
              <p className="papita__pro__intro">INTRODUCING</p>
              <h1 className="papita__pro__header">THE PAPITA PRO</h1>
            </div>
            <div>
              <Link to="">
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div className="papita__items">
          <img className="papita__pro__tshirt__img" src={PapitaProImg} alt="" />
        </div>
      </div>
    </div>
  );
}
