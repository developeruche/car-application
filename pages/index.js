import Head from 'next/head';
import {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Script from "next/script";


export default function Home() {
  const [toggleState, setToggleState] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    let mixerFeatured = mixitup(".featured__content", {
      selectors: {
        target: ".featured__card",
      },
      animation: {
        duration: 300
      }
    })

    const linkFeatured = document.querySelectorAll(".featured__item")

    function activeFeatured() {
      linkFeatured.forEach(i => i.classList.remove('active-featured'));
      this.classList.add("active-featured")
    }

    linkFeatured.forEach(i => i.addEventListener('click', activeFeatured))
    

    function scrollUp() {
      const scrollUp = document.getElementById("scroll-up");
      if(this.scrollY >= 350) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll")
    }

    window.addEventListener("scroll", scrollUp);

    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      // reset: true
    })

    sr.reveal(".home__title, .popular__container, .features__img, .featured__filters")
    sr.reveal(".home__subtitle", {delay: 500})
    sr.reveal(".home__elec", {delay: 600})
    sr.reveal(".home__img", {delay: 800})
    sr.reveal(".home__car-data", {delay: 900, interval: 100, origin: "bottom"})
    sr.reveal(".home__button", {delay: 1000, origin: "bottom"})
    sr.reveal(".about__group, .offer__data", {origin: "left"})
    sr.reveal(".about__data, .offer__img", {origin: "bottom"})
    sr.reveal(".features__map", {delay: 600, origin: "bottom"})
    sr.reveal(".features__card", {interval: 300})
    sr.reveal(".featured__card, .logos__content, .footer__content", {interval: 100})



    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
        linkFeatured.forEach(i => i.removeEventListener('click', activeFeatured));
        window.removeEventListener("scroll", scrollUp);
    }
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Car Store</title>
        <meta name="description" content="this is a car store built on next js" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        

        {/* <!--=============== SWIPER CSS ===============--> */}
        <link rel="stylesheet" href="" />


      </Head>

      <main className="app__body">

        {/* Importing JS Script */}
        <Script src="/js/mixitup.min.js"></Script>
        <Script src="/js/scrollreveal.min.js"></Script>
        <Script src="https://unpkg.com/scrollreveal"></Script>
        
        <header class={scrollPosition >= 50 ? "header scroll-header" : "header"} id="header">
          <nav className="nav container">
            <a href="#" className="nav__logo">
              <i className="ri-steering-line"></i> Zoom
            </a>

            <div className={toggleState ? "nav__menu show-menu" : "nav__menu"} id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item" onClick={() => {setToggleState(false)}}>
                  <a href="#home" className="nav__link active-link">Home</a>
                </li>
                <li className="nav__item" onClick={() => {setToggleState(false)}}>
                  <a href="#about" className="nav__link">About</a>
                </li>
                <li className="nav__item" onClick={() => {setToggleState(false)}}>
                  <a href="#popular" className="nav__link">Popular</a>
                </li>
                <li className="nav__item" onClick={() => {setToggleState(false)}}>
                  <a href="#feature" className="nav__link">Feature</a>
                </li>
              </ul>

              <div className="nav__close" id="nav-close" onClick={() => {setToggleState(false)}}>
                <i className="ri-close-line"></i>
              </div>
            </div>
            <div className="nav__toggle" id="nav-toggle" onClick={() => {setToggleState(true)}}>
              <i className="ri-menu-line"></i>
            </div>
          </nav>
        </header>

        <main className="main">
          <div className="shape shape__big"></div>
          <div className="shape shape__small"></div>

          <section className="home section" id="home">
            <div className="home__container container grid">
              <div className="home__data">
                <h1 className="home__title">Choose The Best Car</h1>
                <h2 className="home__subtitle">Porsche Mission E</h2>
                <h3 className="home__elec">
                  <i className="ri-flashlight-fill"></i> Electric car
                </h3>
              </div>

              <img src="/img/home.png" alt="" className="home__img" />

              <div className="home__car">
                <div className="home__car-data">
                  <div className="home__car-icon">
                    <i className="ri-temp-cold-line"></i>
                  </div>
                  <h2 className="home__car-number">24°</h2>
                  <h3 className="home__car-name">TEMPERATURE</h3>
                </div>

                <div className="home__car-data">
                  <div className="home__car-icon">
                    <i className="ri-dashboard-3-line"></i>
                  </div>
                  <h2 className="home__car-number">873</h2>
                  <h3 className="home__car-name">MILEAGE</h3>
                </div>

                <div className="home__car-data">
                  <div className="home__car-icon">
                    <i className="ri-flashlight-fill"></i>
                  </div>
                  <h2 className="home__car-number">94%</h2>
                  <h3 className="home__car-name">BATTERY</h3>
                </div>
              </div>

              <a href="" className="home__button">START</a>
            </div>
          </section>

          <section className="about section" id="about">
            <div className="about__container container grid">
              <div className="about__group">
                <img src="/img/about.png" alt="" className="about__img"/>

                <div className="about__card">
                  <h3 className="about__card-title">2500+</h3>
                  <p className="about__card-description">
                    Supercharge placed along popular routes
                  </p>
                </div>
              </div>

              <div className="about__data">
                <h2 className="section__title about__title">
                  Machines With <br /> Future Technology
                </h2>

                <p className="about__description">
                  See the future with high-performance electric cars produced by 
                  renowned brands. They feature futuristic builds and designs with 
                  new and innovative platforms that last a long time.
                </p>

                <a href="#" className="button">Know More</a>
              </div>
            </div>
          </section>

          <section className="popular section" id="popular">
            <h2 className="section__title">
              Choose Your Electric Car <br /> Of The Porsche Brand
            </h2>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              loop={true} 
              spaceBetween={24}
              slidesPerView="auto"
              grabCursor={true}
              modules={[Pagination]}
              // breakpoints={{
              //   768: {
              //     slidesPerView: 3,
              //   },
              //   1024: {
              //     spaceBetween: 48,
              //   },
              // }}
              
              className="popular__container container"
            >
              <SwiperSlide>
                <article className="popular__card">
                  <div className="shape shape__smaller"></div>
                  <h1 className="popular__title">Porsche</h1>
                  <h3 className="popular__subtitle">Turbo S</h3>

                  <img src="/img/popular1.png" alt="" className="popular__img"/>

                  <div className="popular__data">
                    <div className="popular__data-group">
                      <i className="re-dashboard-3-line"></i> 3.7 Sec
                    </div>
                    <div className="popular__data-group">
                      <i className="re-funds-box-line"></i> 356 Km/h
                    </div>
                    <div className="popular__data-group">
                      <i className="re-charging-pile-2-line"></i> Electric
                    </div>
                  </div>

                  <h3 className="popular__price">$175, 900</h3>

                  <button className="button popular__button">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                </article>
              </SwiperSlide>
              
              <SwiperSlide>                
                <article className="popular__card">
                  <div className="shape shape__smaller"></div>
                  <h1 className="popular__title">Porsche</h1>
                  <h3 className="popular__subtitle">Turbo S</h3>

                  <img src="/img/popular1.png" alt="" className="popular__img"/>

                  <div className="popular__data">
                    <div className="popular__data-group">
                      <i className="re-dashboard-3-line"></i> 3.7 Sec
                    </div>
                    <div className="popular__data-group">
                      <i className="re-funds-box-line"></i> 356 Km/h
                    </div>
                    <div className="popular__data-group">
                      <i className="re-charging-pile-2-line"></i> Electric
                    </div>
                  </div>

                  <h3 className="popular__price">$175, 900</h3>

                  <button className="button popular__button">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className="popular__card">
                  <div className="shape shape__smaller"></div>
                  <h1 className="popular__title">Porsche</h1>
                  <h3 className="popular__subtitle">Turbo S Cross</h3>

                  <img src="/img/popular3.png" alt="" className="popular__img"/>

                  <div className="popular__data">
                    <div className="popular__data-group">
                      <i className="re-dashboard-3-line"></i> 3.7 Sec
                    </div>
                    <div className="popular__data-group">
                      <i className="re-funds-box-line"></i> 356 Km/h
                    </div>
                    <div className="popular__data-group">
                      <i className="re-charging-pile-2-line"></i> Electric
                    </div>
                  </div>

                  <h3 className="popular__price">$150, 900</h3>

                  <button className="button popular__button">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className="popular__card">
                  <div className="shape shape__smaller"></div>
                  <h1 className="popular__title">Porsche</h1>
                  <h3 className="popular__subtitle">Boxster 718</h3>

                  <img src="/img/popular4.png" alt="" className="popular__img"/>

                  <div className="popular__data">
                    <div className="popular__data-group">
                      <i className="re-dashboard-3-line"></i> 3.7 Sec
                    </div>
                    <div className="popular__data-group">
                      <i className="re-funds-box-line"></i> 356 Km/h
                    </div>
                    <div className="popular__data-group">
                      <i className="re-charging-pile-2-line"></i> Electric
                    </div>
                  </div>

                  <h3 className="popular__price">$125, 900</h3>

                  <button className="button popular__button">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className="popular__card">
                  <div className="shape shape__smaller"></div>
                  <h1 className="popular__title">Porsche</h1>
                  <h3 className="popular__subtitle">Cayman</h3>

                  <img src="/img/popular5.png" alt="" className="popular__img"/>

                  <div className="popular__data">
                    <div className="popular__data-group">
                      <i className="re-dashboard-3-line"></i> 3.7 Sec
                    </div>
                    <div className="popular__data-group">
                      <i className="re-funds-box-line"></i> 356 Km/h
                    </div>
                    <div className="popular__data-group">
                      <i className="re-charging-pile-2-line"></i> Electric
                    </div>
                  </div>

                  <h3 className="popular__price">$128, 900</h3>

                  <button className="button popular__button">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                </article>
              </SwiperSlide>
            </Swiper>
          </section>

          <section className="features section">
            <h2 className="section__title">
              More Features
            </h2>

            <div className="features__container container grid">
              <div className="features__group">
                <img src="/img/features.png" alt="" className="features__img"/>

                <div className="features__card features_card-1">
                  <h3 className="features__card-title">800v</h3>
                  <p className="features__card-description">Turbo <br /> Charging</p>
                </div>

                <div className="features__card features_card-2">
                  <h3 className="features__card-title">350</h3>
                  <p className="features__card-description">Km <br /> Range</p>
                </div>

                <div className="features__card features_card-3">
                  <h3 className="features__card-title">480</h3>
                  <p className="features__card-description">Km <br /> Travel</p>
                </div>

              </div>
            </div>

            <img src="/img/map.svg" alt="" className="features__map"/>
          </section>

          <section className="featured section" id="featured">
            <h2 className="section__title">
              Featured Luxury Cas
            </h2>

            <div className="featured__container container">
              <ul className="featured__filters">
                <li>
                  <button className="featured__item active-featured" data-filter="all">
                    <span>All</span>
                  </button>
                </li>
                <li>
                  <button className="featured__item" data-filter=".tesla">
                    <img src="/img/logo3.png" alt=""/>
                  </button>
                </li>
                <li>
                  <button className="featured__item" data-filter=".audi">
                    <img src="/img/logo2.png" alt=""/>
                  </button>
                </li>
                <li>
                  <button className="featured__item" data-filter=".porsche">
                    <img src="/img/logo1.png" alt=""/>
                  </button>
                </li>
              </ul>

              <div className="featured__content grid">
                <article className="featured__card mix tesla">
                  <div className="shape shape__smaller"></div>

                  <h1 className="featured__title">Tesla</h1>

                  <h3 className="featured__subtitle">Model X</h3>

                  <img src="/img/featured1.png" alt="" className="featured__img"/>

                  <h3 className="featured__price">$98,900</h3>

                  <button className="button featured__button">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                </article>

                <article className="featured__card mix tesla">
                  <div className="shape shape__smaller"></div>

                  <h1 className="featured__title">Tesla</h1>

                  <h3 className="featured__subtitle">Model 3</h3>

                  <img src="/img/featured2.png" alt="" className="featured__img"/>

                  <h3 className="featured__price">$45,900</h3>

                  <button className="button featured__button">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                </article>

                <article className="featured__card mix audi">
                  <div className="shape shape__smaller"></div>

                  <h1 className="featured__title">Audi</h1>

                  <h3 className="featured__subtitle">E-tron</h3>

                  <img src="/img/featured3.png" alt="" className="featured__img"/>

                  <h3 className="featured__price">$175,900</h3>

                  <button className="button featured__button">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                </article>

                <article className="featured__card mix porsche">
                  <div className="shape shape__smaller"></div>

                  <h1 className="featured__title">Porsche</h1>

                  <h3 className="featured__subtitle">Boxster 987</h3>

                  <img src="/img/featured4.png" alt="" className="featured__img"/>

                  <h3 className="featured__price">$126,900</h3>

                  <button className="button featured__button">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                </article>

                <article className="featured__card mix porsche">
                  <div className="shape shape__smaller"></div>

                  <h1 className="featured__title">Porsche</h1>

                  <h3 className="featured__subtitle">Panamera</h3>

                  <img src="/img/featured5.png" alt="" className="featured__img"/>

                  <h3 className="featured__price">$126,900</h3>

                  <button className="button featured__button">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                </article>
              </div>
            </div>
          </section>

          <section className="offer section">
            <div className="offer__container container grid">
              <img src="/img/offer-bg.png" alt="" className="offer__bg"/>

              <div className="offer__data" style={{"z-index": "10"}}>
                <h2 className="section__title offer__title">
                  Do You Want To Receive <br /> Special Offers?
                </h2>

                <p className="offer__description">
                  Be the first to receive all the information about our 
                  products and new cars by email by subscribing to our 
                  mailing list.
                </p>

                <a href="#" className="button">Subscribe Now</a>
              </div>

              <img src="/img/offer.png" alt="" className="offer__img"/>
            </div>
          </section>

          <section className="logos section">
            <div className="logos__container container grid">
              <div className="logos__content">
                <img src="/img/logo1.png" alt="" className="logos__img"/>
              </div>
              <div className="logos__content">
                <img src="/img/logo2.png" alt="" className="logos__img"/>
              </div>
              <div className="logos__content">
                <img src="/img/logo3.png" alt="" className="logos__img"/>
              </div>
              <div className="logos__content">
                <img src="/img/logo4.png" alt="" className="logos__img"/>
              </div>
              <div className="logos__content">
                <img src="/img/logo5.png" alt="" className="logos__img"/>
              </div>
              <div className="logos__content">
                <img src="/img/logo6.png" alt="" className="logos__img"/>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer section">
          <div className="shape shape__big"></div>
          <div className="shape shape__small"></div>

          <div className="footer__container container grid">
            <div className="footer__content">
              <a href="#" className="footer__logo">
                <i className="ri-steering-line"></i> Zoom
              </a>
              <p className="footer__description">
                We offer the best electric cars of <br />
                the most recognized brands in <br />
                the world.
              </p>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">
                Company
              </h3>

              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">About</a>
                </li>
                <li>
                  <a href="#" className="footer__link">Cars</a>
                </li>
                <li>
                  <a href="#" className="footer__link">History</a>
                </li>
                <li>
                  <a href="#" className="footer__link">Shop</a>
                </li>
              </ul>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">
                Information
              </h3>

              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">Request a quote</a>
                </li>
                <li>
                  <a href="#" className="footer__link">Find a dealer</a>
                </li>
                <li>
                  <a href="#" className="footer__link">Contact us</a>
                </li>
                <li>
                  <a href="#" className="footer__link">Services</a>
                </li>
              </ul>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">
                Follow us
              </h3>

              <ul className="footer__social">
                <a href="#" target="_blank" className="footer__social-link"><i className="ri-facebook-fill"></i></a>
                <a href="#" target="_blank" className="footer__social-link"><i className="ri-instagram-line"></i></a>
                <a href="#" target="_blank" className="footer__social-link"><i className="ri-twitter-line"></i></a>
              </ul>
            </div>
          </div>

          <span className="footer__copy">&#169; @developeruche. All Right Reserved</span>
        </footer>

        <a href="#" className="scrollup" id="scroll-up">
          <i className="ri-arrow-up-line"></i>
        </a>
      </main>
    </div>
  )
}
