import { Button } from "../../components/Button ";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { NavBar } from "../../components/NavBar";
import { useTranslation } from "react-i18next";
import { FaLanguage } from "react-icons/fa";
import Image from "next/image";
import { TypeTrip } from "./TypeTrip";
import { staticData } from "../../public/data";
import { Serve } from "./serve";
import { GeneralSlider } from "../../components/generalSlider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PackageItem } from "./packageItem";
import { PlaceItem } from "./placeItem";
import { useContext } from "react";
import { FaUser } from "react-icons/fa";

const Home = () => {
  // const isAuthenticated = useContext(AuthContext);
  const { t } = useTranslation();
  const CustomPrevArrow = (props) => (
    <button {...props} className="slick-arrow slick-prev" aria-label="Previous">
      <FaChevronLeft />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="slick-arrow slick-next" aria-label="Next">
      <FaChevronRight />
    </button>
  );
  const CustomPrevArrow1 = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={`slick-arrow slick-prev1 ${
        currentSlide === 0 ? "disabled" : ""
      }`}
      aria-label="Previous"
      disabled={currentSlide === 0}
    >
      <FaChevronLeft />
    </button>
  );

  const CustomNextArrow1 = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={`slick-arrow slick-next1 ${
        currentSlide === slideCount - 1 ? "disabled" : ""
      }`}
      aria-label="Next"
      disabled={currentSlide === slideCount - 1}
    >
      <FaChevronRight />
    </button>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    className: "custom-slider",
  };
  const DataPackageSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow1 />,
    nextArrow: <CustomNextArrow1 />,
    // className: "custom-slider",
  };

  const customSliderStyle = {
    width: "100%",
  };
  const handleLoginClick = () => {
    // Handle login navigation
    // You can use your preferred method for navigating to the login page
  };

  const handleRegisterClick = () => {
    // Handle register navigation
    // You can use your preferred method for navigating to the register page
  };

  return (
    <>
      {/* {isAuthenticated ? ( */}
      <div className="home-container">
        <div className="top-home-section">
          <div className="--flex-between-start">
            <NavBar className1="text-color-white" />
            <div className="--align-center text-color-white">
              <LanguageSwitcher />
              <nav className="navbar navbar-home">
                <div className="navbar-links">
                  <a className="navbar-link" onClick={handleLoginClick}>
                  <FaUser className="navbar-icon" />
                    Sign In
                  </a>
                  <span> / </span>
                  <a className="navbar-link" onClick={handleRegisterClick}>
                    Register
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div className="title-home">
            <h6>{t("JUST SECONDS AWAY FROM")}</h6>
            <h1>{t("A WORLD OF LUXURY")}</h1>
            <p>
              Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk.
              Egonat. Diren den eftersom sojaren, men poligam.
            </p>
            <Button text={t("Lets Start Now")} icon={<FaLanguage />} />
          </div>
        </div>
        <div className="--flex-around --sharing-padding">
          <Image
            src="/assets/img/image27.svg"
            alt="image27"
            width={162}
            height={32}
          />
          <Image
            src="/assets/img/image28.svg"
            alt="image28"
            width={162}
            height={32}
          />
          <Image
            src="/assets/img/image28.svg"
            alt="image28"
            width={162}
            height={32}
          />
          <Image
            src="/assets/img/image29.svg"
            alt="image29"
            width={162}
            height={32}
          />
          <Image
            src="/assets/img/image31.svg"
            alt="image31"
            width={162}
            height={32}
          />
        </div>
        <div className="--type-trip-container --padding">
          <div style={{ flexBasis: "50%" }}>
            <Image
              src="/assets/img/experience.svg"
              alt="experience"
              width={470}
              height={270}
            />
            <h1 className="text-color-dark --font-weight-bold --title-line-height">
              {t("Get Experience In We are Expert")}
            </h1>
            <p className="text-color-dark --desc-line-height">
              Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk.
              Egonat. Diren den eftersom sojaren, men poligam.
            </p>
          </div>
          <div style={{ flexBasis: "50%" }}>
            {staticData.FlightTypes.map((item) => (
              <TypeTrip
                key={item.id}
                title={item.title}
                description={item.description}
                img={item.img}
              />
            ))}
          </div>
        </div>
        <div className="--padding serve-section --flex-between">
          <div style={{ flexBasis: "50%" }}>
            <Image
              src="/assets/img/Traveller.svg"
              alt="image27"
              width={382}
              height={435}
            />
          </div>
          <div style={{ flexBasis: "50%" }}>
            <h1 className="text-color-dark --font-weight-bold --title-line-height">
              {t("With Our Experience We will Serve You")}
            </h1>
            <p className="text-color-dark --desc-line-height">
              Lörem ipsum telaliga rera på platögon. Fasegeling ånde sagunar
              nyponas. Dobel kaning poke. Spenel ösat. Dm:a vikude.
            </p>
            <div className="--align-center">
              {staticData.ServeNumber.map((item) => (
                <Serve key={item.id} text={item.text} number={item.number} />
              ))}
            </div>
          </div>
        </div>
        <div className="--padding --align-center">
          <GeneralSlider
            settings={settings}
            places={staticData.Places}
            sliderClassName="slider-class"
            arrowClassName="arrow-class"
            childComponent={<PlaceItem />}
          />
          <div>
            <h1 className="text-color-dark --font-weight-bold --title-line-height">
              {t("Best Places For You")}
            </h1>
            <p className="text-color-dark --desc-line-height">
              Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk.
              Egonat. Diren den eftersom sojaren, men poligam.
            </p>
            <Button text={t("View More")} icon={<FaLanguage />} />
          </div>
        </div>
        <div className="--padding ">
          <div className="--align-center">
            <h1 className="text-color-dark --font-weight-bold --title-line-height">
              Best Packages For You
            </h1>
            <p>
              {" "}
              Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk.
              Egonat. Diren den eftersom sojaren, men poligam.
            </p>
          </div>
          <div className="--align-center">
            <GeneralSlider
              settings={DataPackageSettings}
              places={staticData.DataPackages}
              // sliderClassName="slider-class"
              // arrowClassName="arrow-class"
              sliderStyle={customSliderStyle}
              childComponent={<PackageItem />}
            />
          </div>
        </div>
      </div>
      {/* ) : (
        <p>Please log in to access the home page.</p>
      )} */}
    </>
  );
};

export default Home;
