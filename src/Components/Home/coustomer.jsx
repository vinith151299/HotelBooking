import React, { Fragment } from 'react'
import coustmer1 from '../../Assets/images/Frame 14.png'
import coustmer9 from '../../Assets/images/testi-author 1.png'
import coustmer10 from '../../Assets/images/Test Icon.png'
import coustmer12 from '../../Assets/images/Ellipse 6.png'
const Coustomer = () => {
    return (
        <Fragment>
            <section className="coustomer" id="section7">
                <div className="coustomer-header">
                    <p className="coustomer-header-content">Our Customer Says</p>
                </div>
                <marquee behavior="alternate" className="marq " direction="left">
                    <div className="coustomer-layout">
                        <div className="first-coustomer">
                            <div className="icon-coustomer">
                                <img src={coustmer10} alt="" className="icon-coust" />
                            </div>
                            <img src={coustmer1} alt="" className="first-coustomer-image" />
                            <p className="first-coustomer-childcontent">
                                Lorem ipsum dolor sit amet consectetur. Et neque sem tempus eleifend sit ut diam. Imperdiet dolor
                                pretium diam tortor turpis fusce. Amet augue sociis nulla facilisis libero nunc cras justo feugiat.
                                Laoreet proin faucibus ornare odio.
                            </p>
                            <div className="coustumers">
                                <img src={coustmer9} alt="" className="first-coustomer-image1" />
                                <p className="first-coustomer-childcontent1"> John Alexon</p>
                            </div>
                        </div>

                        <div className="first-coustomer">
                            <div className="icon-coustomer">
                                <img src={coustmer10} alt="" className="icon-coust" />
                            </div>
                            <img src={coustmer1} alt="" className="first-coustomer-image" />
                            <p className="first-coustomer-childcontent">
                                Lorem ipsum dolor sit amet consectetur. Et neque sem tempus eleifend sit ut diam. Imperdiet dolor
                                pretium diam tortor turpis fusce. Amet augue sociis nulla facilisis libero nunc cras justo feugiat.
                                Laoreet proin faucibus ornare odio.
                            </p>
                            <div className="coustumers">
                                <img src={coustmer12} alt="" className="first-coustomer-image1" />
                                <p className="first-coustomer-childcontent1">Allena Gomez</p>
                            </div>
                        </div>

                        <div className="first-coustomer">
                            <div className="icon-coustomer">
                                <img src={coustmer10} alt="" className="icon-coust" />
                            </div>
                            <img src={coustmer1} alt="" className="first-coustomer-image" />
                            <p className="first-coustomer-childcontent">
                                Lorem ipsum dolor sit amet consectetur. Et neque sem tempus eleifend sit ut diam. Imperdiet dolor
                                pretium diam tortor turpis fusce. Amet augue sociis nulla facilisis libero nunc cras justo feugiat.
                                Laoreet proin faucibus ornare odio.
                            </p>
                            <div className="coustumers">
                                <img src={coustmer9} alt="" className="first-coustomer-image1" />
                                <p className="first-coustomer-childcontent1">John Alexon</p>
                            </div>
                        </div>

                        <div className="first-coustomer">
                            <div className="icon-coustomer">
                                <img src={coustmer10} alt="" className="icon-coust" />
                            </div>
                            <img src={coustmer1} alt="" className="first-coustomer-image" />
                            <p className="first-coustomer-childcontent">
                                Lorem ipsum dolor sit amet consectetur. Et neque sem tempus eleifend sit ut diam. Imperdiet dolor
                                pretium diam tortor turpis fusce. Amet augue sociis nulla facilisis libero nunc cras justo feugiat.
                                Laoreet proin faucibus ornare odio.
                            </p>
                            <div className="coustumers">
                                <img src={coustmer12} alt="" className="first-coustomer-image1" />
                                <p className="first-coustomer-childcontent1">Allena Gomez</p>
                            </div>
                        </div>
                    </div>
                </marquee>
            </section>
        </Fragment>
    )
}

export default Coustomer