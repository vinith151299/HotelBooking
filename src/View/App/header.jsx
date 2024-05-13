import React from 'react'
import Home from '../../Components/Home/home'
import Facilities from '../../Components/Home/facilities'
import Reservation from '../../Components/Home/reservation'
import Spli from '../../Components/Home/spli'
import Booknow from '../../Components/Home/booknow'
import Coustomer from '../../Components/Home/coustomer'
import Footer from '../../Components/Home/footer'
import Residence from '../../Components/Home/residence'
import Stickyheader from '../../Components/Home/stickyheader'
const Header = () => {
  return (
    <div>
      <Home />
      <Reservation />
      <Spli />
      <Facilities />
      <Residence />
      <Booknow />
      <Coustomer />
      <Footer />
      <Stickyheader/>
    </div>
  )
}

export default Header