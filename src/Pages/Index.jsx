import "./styles/Index.css";
import Strip from "../assets/strip.png";
import { Link } from "react-router-dom";
import CatStrip from "../assets/cat__strip.png";

import NaturalStripe from "../assets/natural__strip.png";
import CategoriesImg from "../assets/categories.png";
import categories from "../import/categories";
import PapitaProImg from "../assets/papita__pro.png";
import SPNatural from "../assets/natural.png";
import Slay1 from "../assets/slay1.jpeg";
import Slay2 from "../assets/slay2.jpeg";
import NaturalTshirt from "../assets/natural__tshirt.png";
import CategoriesCard from "../Components/CategoriesCard";

import PinkArrow from "../assets/arrow__pink.png";
import GreenArrow from "../assets/arrow__green.png";
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
            <div className="papita__pro__inner__content">
              <p className="papita__pro__intro">INTRODUCING</p>
              <h1 className="papita__pro__header">THE PAPITA PRO</h1>
            </div>
            <div>
              <Link className="shop__btn pink__btn" to="">
                <p className="shop__txt">Shop Now</p>
                <div className="shop__img">
                  <img src={PinkArrow} alt="" />
                </div>
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
      <div className="natural__container row">
        <div className="natural__items natural__tshirt__container row">
          <img src={NaturalTshirt} alt="" />
        </div>
        <div className="natural__items">
          <div className="natural__tshirt__header">
            <img
              className="natural__tshirt__header__img"
              src={SPNatural}
              alt=""
            />
          </div>
          <div className="cent">
            <div className="natural__tshirt__inner__content">
              <p className="natural__collection">Collection</p>
              <Link className="shop__btn green__btn" to="">
                <p className="shop__txt">Shop Now</p>
                <div className="shop__img">
                  <img src={GreenArrow} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="natural__strip__container">
        <img className="natural__strip" src={NaturalStripe} alt="" />
      </div>
      <div className="white__space__container"></div>
      <div className="slay__container row">
        <div className="slay__items">
          <img className="slay__img" src={Slay1} alt="" />
        </div>
        <div className="slay__contents__container cent">
          <div className="slay__contents">
            Revolutionising style <br /> by empowering <br /> individuals to{" "}
            <br /> embrace their unique <br /> flair and confidently <br />{" "}
            “Slay the Streets.”
          </div>
        </div>
        <div className="slay__items">
          <img className="slay__img" src={Slay2} alt="" />
        </div>
      </div>
    </div>
  );
}
