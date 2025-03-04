
import ticket1 from "~/assets/images/ticket/ticket-tab01.png"
import ticket2 from "~/assets/images/ticket/ticket-tab02.png"
import ticket3 from "~/assets/images/ticket/ticket-tab03.png"
import city from "~/assets/images/ticket/city.png"
import date from "~/assets/images/ticket/date.png"
import cinema from "~/assets/images/ticket/cinema.png"
import banner from "~/assets/images/banner/banner01.jpg"
import bg1 from "~/assets/images/ticket/ticket-bg01.jpg"
import side1 from "~/assets/images/sidebar/icons/sidebar01.png"
import side2 from "~/assets/images/sidebar/icons/sidebar02.png"
import side3 from "~/assets/images/sidebar/icons/sidebar03.png"
import sidebanner1 from "~/assets/images/sidebar/banner/banner01.jpg"
import sidebanner2 from "~/assets/images/sidebar/banner/banner02.jpg"
import tomato from "~/assets/images/movie/tomato.png"
import cake from "~/assets/images/movie/cake.png"
import event1 from "~/assets/images/event/event01.jpg"
import event2 from "~/assets/images/event/event02.jpg"
import event3 from "~/assets/images/event/event03.jpg"
import sport1 from "~/assets/images/sports/sports01.jpg"
import sport2 from "~/assets/images/sports/sports02.jpg"
import sport3 from "~/assets/images/sports/sports03.jpg"







function Home() {
    

    return (
        <>
  {/* ==========Banner-Section========== */}
  <section className="banner-section">
    <div
      className="banner-bg bg_img bg-fixed"
      style={{ backgroundImage: `url(${banner})` }}
    />
    <div className="container">
      <div className="banner-content">
        <h1 className="title  cd-headline clip">
          <span className="d-block">book your</span> tickets for
          <span className="color-theme cd-words-wrapper p-0 m-0">
            <b className="is-visible">Movie</b>
            <b>Event</b>
            <b>Sport</b>
          </span>
        </h1>
        <p>
          Safe, secure, reliable ticketing.Your ticket to live entertainment!
        </p>
      </div>
    </div>
  </section>
  {/* ==========Banner-Section========== */}
  {/* ==========Ticket-Search========== */}
  <section className="search-ticket-section padding-top pt-lg-0">
    <div className="container">
      <div
        className="search-tab bg_img"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="row align-items-center mb--20">
          <div className="col-lg-6 mb-20">
            <div className="search-ticket-header">
              <h6 className="category">welcome to Boleto </h6>
              <h3 className="title">what are you looking for</h3>
            </div>
          </div>
          <div className="col-lg-6 mb-20">
            <ul className="tab-menu ticket-tab-menu">
              <li className="active">
                <div className="tab-thumb">
                  <img
                    src={ticket1}
                    alt="ticket"
                  />
                </div>
                <span>movie</span>
              </li>
              <li>
                <div className="tab-thumb">
                  <img
                    src={ticket2}
                    alt="ticket"
                  />
                </div>
                <span>events</span>
              </li>
              <li>
                <div className="tab-thumb">
                  <img
                    src={ticket3}
                    alt="ticket"
                  />
                </div>
                <span>sports</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-area">
          <div className="tab-item active">
            <form className="ticket-search-form">
              <div className="form-group large">
                <input type="text" placeholder="Search for Movies" />
                <button type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
              <div className="form-group">
                <div className="thumb">
                  <img src={city} alt="ticket" />
                </div>
                <span className="type">city</span>
                <select className="select-bar">
                  <option value="london">London</option>
                  <option value="dhaka">dhaka</option>
                  <option value="rosario">rosario</option>
                  <option value="madrid">madrid</option>
                  <option value="koltaka">kolkata</option>
                  <option value="rome">rome</option>
                  <option value="khoksa">khoksa</option>
                </select>
              </div>
              <div className="form-group">
                <div className="thumb">
                  <img src={date} alt="ticket" />
                </div>
                <span className="type">date</span>
                <select className="select-bar">
                  <option value="26-12-19">23/10/2020</option>
                  <option value="26-12-19">24/10/2020</option>
                  <option value="26-12-19">25/10/2020</option>
                  <option value="26-12-19">26/10/2020</option>
                </select>
              </div>
              <div className="form-group">
                <div className="thumb">
                  <img src={cinema} alt="ticket" />
                </div>
                <span className="type">cinema</span>
                <select className="select-bar">
                  <option value="Awaken">Awaken</option>
                  <option value="dhaka">dhaka</option>
                  <option value="rosario">rosario</option>
                  <option value="madrid">madrid</option>
                  <option value="koltaka">kolkata</option>
                  <option value="rome">rome</option>
                  <option value="khoksa">khoksa</option>
                </select>
              </div>
            </form>
          </div>
          <div className="tab-item">
            <form className="ticket-search-form">
              <div className="form-group large">
                <input type="text" placeholder="Search for Events" />
                <button type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
              <div className="form-group">
                <div className="thumb">
                  <img src={city} alt="ticket" />
                </div>
                <span className="type">city</span>
                <select className="select-bar">
                  <option value="london">London</option>
                  <option value="dhaka">dhaka</option>
                  <option value="rosario">rosario</option>
                  <option value="madrid">madrid</option>
                  <option value="koltaka">kolkata</option>
                  <option value="rome">rome</option>
                  <option value="khoksa">khoksa</option>
                </select>
              </div>
              <div className="form-group">
                <div className="thumb">
                  <img src={date} alt="ticket" />
                </div>
                <span className="type">date</span>
                <select className="select-bar">
                  <option value="26-12-19">23/10/2020</option>
                  <option value="26-12-19">24/10/2020</option>
                  <option value="26-12-19">25/10/2020</option>
                  <option value="26-12-19">26/10/2020</option>
                </select>
              </div>
              <div className="form-group">
                <div className="thumb">
                  <img src={cinema} alt="ticket" />
                </div>
                <span className="type">event</span>
                <select className="select-bar">
                  <option value="angular">angular</option>
                  <option value="startup">startup</option>
                  <option value="rosario">rosario</option>
                  <option value="madrid">madrid</option>
                  <option value="koltaka">kolkata</option>
                  <option value="Last-First">Last-First</option>
                  <option value="wish">wish</option>
                </select>
              </div>
            </form>
          </div>
          <div className="tab-item">
            <form className="ticket-search-form">
              <div className="form-group large">
                <input type="text" placeholder="Search fo Sports" />
                <button type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
              <div className="form-group">
                <div className="thumb">
                  <img src={cinema} alt="ticket" />
                </div>
                <span className="type">city</span>
                <select className="select-bar">
                  <option value="london">London</option>
                  <option value="dhaka">dhaka</option>
                  <option value="rosario">rosario</option>
                  <option value="madrid">madrid</option>
                  <option value="koltaka">kolkata</option>
                  <option value="rome">rome</option>
                  <option value="khoksa">khoksa</option>
                </select>
              </div>
              <div className="form-group">
                <div className="thumb">
                  <img src={date} alt="ticket" />
                </div>
                <span className="type">date</span>
                <select className="select-bar">
                  <option value="26-12-19">23/10/2020</option>
                  <option value="26-12-19">24/10/2020</option>
                  <option value="26-12-19">25/10/2020</option>
                  <option value="26-12-19">26/10/2020</option>
                </select>
              </div>
              <div className="form-group">
                <div className="thumb">
                  <img src={cinema} alt="ticket" />
                </div>
                <span className="type">sports</span>
                <select className="select-bar">
                  <option value="football">football</option>
                  <option value="cricket">cricket</option>
                  <option value="cabadi">cabadi</option>
                  <option value="madrid">madrid</option>
                  <option value="gadon">gadon</option>
                  <option value="rome">rome</option>
                  <option value="khoksa">khoksa</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ==========Ticket-Search========== */}
  {/* ==========Movie-Main-Section========== */}
  <section className="movie-section padding-top padding-bottom bg-two">
    <div className="container">
      <div className="row flex-wrap-reverse justify-content-center">
        <div className="col-lg-3 col-sm-10  mt-50 mt-lg-0">
          <div className="widget-1 widget-facility">
            <div className="widget-1-body">
              <ul>
                <li>
                  <a href="#0">
                    <span className="img">
                      <img
                        src={side1}
                        alt="sidebar"
                      />
                    </span>
                    <span className="cate">24X7 Care</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <span className="img">
                      <img
                        src={side2}
                        alt="sidebar"
                      />
                    </span>
                    <span className="cate">100% Assurance</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <span className="img">
                      <img
                        src={side3}
                        alt="sidebar"
                      />
                    </span>
                    <span className="cate">Our Promise</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget-1 widget-banner">
            <div className="widget-1-body">
              <a href="#0">
                <img
                  src={sidebanner1}
                  alt="banner"
                />
              </a>
            </div>
          </div>
          <div className="widget-1 widget-trending-search">
            <h3 className="title">Trending Searches</h3>
            <div className="widget-1-body">
              <ul>
                <li>
                  <h6 className="sub-title">
                    <a href="#0">mars</a>
                  </h6>
                  <p>Movies</p>
                </li>
                <li>
                  <h6 className="sub-title">
                    <a href="#0">alone</a>
                  </h6>
                  <p>Movies</p>
                </li>
                <li>
                  <h6 className="sub-title">
                    <a href="#0">music event</a>
                  </h6>
                  <p>event</p>
                </li>
                <li>
                  <h6 className="sub-title">
                    <a href="#0">NBA Games 2020</a>
                  </h6>
                  <p>Sports</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget-1 widget-banner">
            <div className="widget-1-body">
              <a href="#0">
                <img
                  src={sidebanner2}
                  alt="banner"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="article-section padding-bottom">
            <div className="section-header-1">
              <h2 className="title">movies</h2>
              <a className="view-all" href="/moviegrid">
                View All
              </a>
            </div>
            <div className="row mb-30-none justify-content-center">
              <div className="col-sm-6 col-lg-4">
                <div className="movie-grid">
                  <div className="movie-thumb c-thumb">
                    <a href="#0">
                      <img src="" alt="movie" />
                    </a>
                  </div>
                  <div className="movie-content bg-one">
                    <h5 className="title m-0">
                      <a href="#0">alone</a>
                    </h5>
                    <ul className="movie-rating-percent">
                      <li>
                        <div className="thumb">
                          <img
                            src={tomato}
                            alt="movie"
                          />
                        </div>
                        <span className="content">88%</span>
                      </li>
                      <li>
                        <div className="thumb">
                          <img src={cake} alt="movie" />
                        </div>
                        <span className="content">88%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="movie-grid">
                  <div className="movie-thumb c-thumb">
                    <a href="#0">
                      <img src="assets/images/movie/movie02.jpg" alt="movie" />
                    </a>
                  </div>
                  <div className="movie-content bg-one">
                    <h5 className="title m-0">
                      <a href="#0">mars</a>
                    </h5>
                    <ul className="movie-rating-percent">
                      <li>
                        <div className="thumb">
                          <img
                            src={tomato}
                            alt="movie"
                          />
                        </div>
                        <span className="content">88%</span>
                      </li>
                      <li>
                        <div className="thumb">
                          <img src={cake} alt="movie" />
                        </div>
                        <span className="content">88%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="movie-grid">
                  <div className="movie-thumb c-thumb">
                    <a href="#0">
                      <img src="assets/images/movie/movie03.jpg" alt="movie" />
                    </a>
                  </div>
                  <div className="movie-content bg-one">
                    <h5 className="title m-0">
                      <a href="#0">venus</a>
                    </h5>
                    <ul className="movie-rating-percent">
                      <li>
                        <div className="thumb">
                          <img
                            src={tomato}
                            alt="movie"
                          />
                        </div>
                        <span className="content">88%</span>
                      </li>
                      <li>
                        <div className="thumb">
                          <img src={cake} alt="movie" />
                        </div>
                        <span className="content">88%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="article-section padding-bottom">
            <div className="section-header-1">
              <h2 className="title">events</h2>
              <a className="view-all" href="events.html">
                View All
              </a>
            </div>
            <div className="row mb-30-none justify-content-center">
              <div className="col-sm-6 col-lg-4">
                <div className="event-grid">
                  <div className="movie-thumb c-thumb">
                    <a href="#0">
                      <img src={event1} alt="event" />
                    </a>
                    <div className="event-date">
                      <h6 className="date-title">28</h6>
                      <span>Dec</span>
                    </div>
                  </div>
                  <div className="movie-content bg-one">
                    <h5 className="title m-0">
                      <a href="#0">Digital Economy Conference 2020</a>
                    </h5>
                    <div className="movie-rating-percent">
                      <span>327 Montague Street</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="event-grid">
                  <div className="movie-thumb c-thumb">
                    <a href="#0">
                      <img src={event2} alt="event" />
                    </a>
                    <div className="event-date">
                      <h6 className="date-title">28</h6>
                      <span>Dec</span>
                    </div>
                  </div>
                  <div className="movie-content bg-one">
                    <h5 className="title m-0">
                      <a href="#0">web design conference 2020</a>
                    </h5>
                    <div className="movie-rating-percent">
                      <span>327 Montague Street</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="event-grid">
                  <div className="movie-thumb c-thumb">
                    <a href="#0">
                      <img src={event3} alt="event" />
                    </a>
                    <div className="event-date">
                      <h6 className="date-title">28</h6>
                      <span>Dec</span>
                    </div>
                  </div>
                  <div className="movie-content bg-one">
                    <h5 className="title m-0">
                      <a href="#0">digital thinkers meetup</a>
                    </h5>
                    <div className="movie-rating-percent">
                      <span>327 Montague Street</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="article-section">
            <div className="section-header-1">
              <h2 className="title">sports</h2>
              <a className="view-all" href="sports.html">
                View All
              </a>
            </div>
            <div className="row mb-30-none justify-content-center">
              <div className="col-sm-6 col-lg-4">
                <div className="sports-grid">
                  <div className="movie-thumb c-thumb">
                    <a href="#0">
                      <img
                        src={sport1}
                        alt="sports"
                      />
                    </a>
                    <div className="event-date">
                      <h6 className="date-title">28</h6>
                      <span>Dec</span>
                    </div>
                  </div>
                  <div className="movie-content bg-one">
                    <h5 className="title m-0">
                      <a href="#0">football league tournament</a>
                    </h5>
                    <div className="movie-rating-percent">
                      <span>327 Montague Street</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="sports-grid">
                  <div className="movie-thumb c-thumb">
                    <a href="#0">
                      <img
                        src={sport2}
                        alt="sports"
                      />
                    </a>
                    <div className="event-date">
                      <h6 className="date-title">28</h6>
                      <span>Dec</span>
                    </div>
                  </div>
                  <div className="movie-content bg-one">
                    <h5 className="title m-0">
                      <a href="#0">world cricket league 2020</a>
                    </h5>
                    <div className="movie-rating-percent">
                      <span>327 Montague Street</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="sports-grid">
                  <div className="movie-thumb c-thumb">
                    <a href="#0">
                      <img
                        src={sport3}
                        alt="sports"
                      />
                    </a>
                    <div className="event-date">
                      <h6 className="date-title">28</h6>
                      <span>Dec</span>
                    </div>
                  </div>
                  <div className="movie-content bg-one">
                    <h5 className="title m-0">
                      <a href="#0">basket ball tournament 2020</a>
                    </h5>
                    <div className="movie-rating-percent">
                      <span>327 Montague Street</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ==========Movie-Main-Section========== */}
</>

    );
}

export default Home;
