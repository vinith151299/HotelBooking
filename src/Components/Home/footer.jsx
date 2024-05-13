import React, { Fragment } from 'react'
import social1 from '../../Assets/images/facebook.png'
import social2 from '../../Assets/images/instagram.png'
import social3 from '../../Assets/images/linkedin.png'
import logo from '../../Assets/images/Asset 2 3.png'
const Footer = () => {
    return (
        <Fragment>
            <section className="footer" id="section8">
                <div className="footer-grid">
                    <div className="footer-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="foter-rightcontent">
                        <ul>
                            <li>Menu</li>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Amenities</li>
                            <li>Gallery</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="foter-rightcontent">
                        <ul>
                            <li>Quick Link</li>
                            <li>Swimming Pool</li>
                            <li>Wellness Retreat</li>
                            <li>Special Events</li>
                            <li>Ceremony Garden</li>
                            <li>Fire pit</li>
                            <li>Dining Hall</li>
                        </ul>
                    </div>
                    <div className="foter-rightcontent-end">
                        <ul>
                            <li>Address</li>
                            <li>123, ABC Street, Main Road, Canada</li>
                            <li>Phone No.</li>
                            <li>6XX XXX XXXX</li>
                            <li>Email address</li>
                            <li>info@swrcanada.ca</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-last">
                    <p>© 2024 Shambhala Wellness Retreat. All Rights Reserved.</p>
                    <div className="footer-social">
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
            </section>
        </Fragment>
    )
}

export default Footer