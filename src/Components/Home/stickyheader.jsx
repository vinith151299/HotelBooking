import React, { useState,useEffect, Fragment } from 'react';
import logo from '../../Assets/images/Asset 2 3.png';
import closeicon from '../../Assets/images/close-icon.png';
import social1 from '../../Assets/images/facebook.png'
import social2 from '../../Assets/images/instagram.png'
import social3 from '../../Assets/images/linkedin.png'
const Stickyheader = () => {
    const [panelOpen, setPanelOpen] = useState(false);

    const togglePanel = () => {
        setPanelOpen(prevPanelOpen => !prevPanelOpen);
        document.body.style.overflow = panelOpen ? 'auto' : 'hidden';
    };

    useEffect(() => {
        const handleScroll = () => {
            const facilitiesTop = document.querySelector('.reservation').offsetTop;
            const scrollTop = window.scrollY;
            const windowWidth = window.innerWidth;

            if (windowWidth > 600) {
                if (scrollTop > facilitiesTop && !panelOpen) {
                    setPanelOpen(true);
                } else if (scrollTop <= facilitiesTop && panelOpen) {
                    setPanelOpen(false);
                }
            } else {
                setPanelOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [panelOpen]);


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

        <section className="section-sticky">
            <div className="sticky" style={{ display: panelOpen ? 'block' : 'none' }}>
                <div className="sticky-content">
                    <button onClick={togglePanel}>Menu</button>
                    <img src={logo} alt="" className="sticky-icon" />
                    <p>Book Now</p>
                </div>
            </div>
            <div style={{ display: panelOpen ? 'block' : 'none' }}>
                <img src={closeicon} alt="close-icon" className="icon-close" onClick={togglePanel} />
            </div>
        </section>
        </Fragment>
    );
};

export default Stickyheader;
