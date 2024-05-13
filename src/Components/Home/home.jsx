import React, { Fragment, useState } from 'react';
import logo from '../../Assets/images/Asset 2 3.png';
import social1 from '../../Assets/images/facebook.png'
import social2 from '../../Assets/images/instagram.png'
import social3 from '../../Assets/images/linkedin.png'
import closeicon from '../../Assets/images/close-icon.png'
const Home = () => {
  const [panelOpen, setPanelOpen] = useState(false);

  const togglePanel = () => {
    setPanelOpen((prev) => !prev);
  };

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Fragment>

      {panelOpen && (
        <section className="nav-menusection">
          <div className="navmenu-grid">
            <div className="nav-bgsection">
              <div>
                <img src={closeicon} alt="close-icon" className="icon-close" onClick={togglePanel} />
              </div>
              <div>
                <ul>
                  <li><a>Swimming Pool</a></li>
                  <li><a>Wellness Retreat</a></li>
                  <li><a>Special Events</a></li>
                  <li><a>Ceremony Garden</a></li>
                  <li><a>Fire Pit</a></li>
                  <li><a>Dining Hall</a></li>
                </ul>
              </div>
            </div>
            <div className="nav-rightsection">
              <div className="close-popup">
                <img src={logo} alt="logo" />
              </div>
              <div className="address-ctr">
                <p>123, ABC Street, Main Road, Canada Phone No: 6XX XXX XXXX info@swrcanada.ca</p>
              </div>
              <div className="booknow-ctr">
                <p className="fs-16">
                  Lorem ipsum dolor sit amet consectetur. Diam sed turpis in mauris lectus turpis in ac gravida. Quis vel magna augue platea eu.
                </p>
                <button className="booknow-ctr">Book Now</button>
              </div>
              <div className="social-iconsctr">
                <p>Follow us</p>
                <div className="bottomsocial-icons">
                  <img src={social1} alt="facebook" />
                </div>
                <div className="bottomsocial-icons">
                  <img src={social2} alt="instagram" />
                </div>
                <div className="bottomsocial-icons">
                  <img src={social3} alt="linkedin" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="home">
          <div className="child-home">
            <div className="home-blur">
              <div className="slider-outer"></div>
              <div className="top-content">
                <button onClick={togglePanel}>Menu</button>
                <img src={logo} alt="" />
                <p>Book Now</p>
              </div>
              <hr className="home-line" />
              <div className="home-menu-content">
                <p><a onClick={() => smoothScroll("section1")}>Home</a></p>
                <p><a onClick={() => smoothScroll("section3")}>About us</a></p>
                <p><a onClick={() => smoothScroll("section7")}>Amenities</a></p>
                <p><a onClick={() => smoothScroll("section5")}>Gallery</a></p>
                <p><a onClick={() => smoothScroll("section8")}>Contact us</a></p>
              </div>
              <hr className="home-line-bottom" />
            </div>
            <div className="home-title">
              <p>Resort</p>
              <p>Shambhala Wellness Retreat</p>
              <p>Bed and Breakfast</p>
            </div>
          </div>
        </div>
      </section>

    </Fragment>
  );
};

export default Home;
