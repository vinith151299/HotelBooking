import React, { Fragment } from 'react'
import facilities from '../../Assets/images/Vector.png';
import facilities1 from '../../Assets/images/Vector1.png';
import facilities2 from '../../Assets/images/Vector2.png';
import facilities3 from '../../Assets/images/Layer_1.png';
import facilities4 from '../../Assets/images/maki_swimming.png';
const Facilities = () => {
    return (
        <Fragment>

            <section className="facilities">
                <div className="facilities-header">
                    Facilities
                </div>
                <div className="facilities-icons">
                    <div>
                        <img src={facilities} alt="" className="icon" />
                        <div className="facilities-content">
                            Fire Wifi
                        </div>
                    </div>
                    <div>
                        <img src={facilities1} alt="" className="icon" />
                        <div className="facilities-content">
                            Parking Space
                        </div>
                    </div>
                    <div>
                        <img src={facilities2} alt="" className="icon" />
                        <div className="facilities-content">
                            Room Service
                        </div>
                    </div>
                    <div>
                        <img src={facilities3} alt="" className="icon" />
                        <div className="facilities-content">
                            Smart Key
                        </div>
                    </div>
                    <div>
                        <img src={facilities4} alt="" className="icon" />
                        <div className="facilities-content">
                            Swimming Pool
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Facilities