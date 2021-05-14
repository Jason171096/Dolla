import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/NavBar'
import Sidebar from '../components/SideBar'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import { homeObjAbout, homeObjDiscover, homeObjServices } from '../components/InfoSection/Data'

const Home = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjAbout}/>
            <InfoSection {...homeObjDiscover}/>
            <Services />
            <InfoSection {...homeObjServices}/>
        </>
    )
}

export default Home;
