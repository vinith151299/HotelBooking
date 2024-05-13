import React, { Fragment } from 'react'
import Book1 from '../../Assets/images/play.png'
import Book2 from '../../Assets/images/Rectangle 30.png'
import Book3 from '../../Assets/images/Rectangle 28.png'
const Booknow = () => {
    return (
        <Fragment>

            <section className="booknow">
                <div className="book-video">
                    <div className="booking-icon">
                        <button className="booking-rad">
                            <img src={Book1} alt="" className="play-button" /></button>
                    </div>
                    <div className="booking-content">
                        <p className="booking-child-content">Lorem ipsums dolor sit amet consectetur. Porttitor tellus tempus nisl neque felis.</p>
                        <div>
                            <button className="booking-book">Book Now</button>
                        </div>
                    </div>
                    <div>
                        <img src={Book2} alt="" className="booking-image" />
                        <img src={Book3} alt="" className="booking-image2" />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Booknow