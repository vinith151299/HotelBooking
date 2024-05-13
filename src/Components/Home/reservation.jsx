import React, { Fragment, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendarIcon from '../../Assets/images/solar_calendar-bold.png';

const Reservation = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    const checkInRef = useRef(null);
    const checkOutRef = useRef(null);

 
    const handleCalendarClick = (ref) => {
        if (ref === 'checkIn' && checkInRef.current) {
            checkInRef.current.setFocus(true);
        } else if (ref === 'checkOut' && checkOutRef.current) {
            checkOutRef.current.setFocus(true);
        }
    };

 

    return (
        <Fragment>
            <section className="reservation">
                <div className="reservation-head">
                    <p>RESERVATION</p>
                </div>
                <div className="reservation-book">
                    <div className="reservation-date">
                        <DatePicker
                            selected={checkInDate}
                            onChange={date => setCheckInDate(date)}
                            placeholderText="Check in date"
                            dateFormat="MM/dd/yyyy"
                            ref={checkInRef}
                        />
                            <div onClick={() => handleCalendarClick('checkIn')}>
                            <img src={calendarIcon} alt="Calendar" className="reservation-icon" />
                        </div>
                    </div>
                    <div className="reservation-date">
                        <DatePicker
                            selected={checkOutDate}
                            onChange={date => setCheckOutDate(date)}
                            placeholderText="Check out date"
                            dateFormat="MM/dd/yyyy"
                            ref={checkOutRef}
                        />
                          <div onClick={() => handleCalendarClick('checkOut')}>
                            <img src={calendarIcon} alt="Calendar" className="reservation-icon" />
                        </div>
                    </div>
                    <select className="reservation-date">
                        <option value="" disabled selected>Guest</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                    </select>
                    <button className="booking-book">Book Now</button>
                </div>
                <div className="book-line"></div>
            </section>
        </Fragment>
    );
};

export default Reservation;
