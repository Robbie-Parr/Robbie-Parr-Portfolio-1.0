import React from "react"

import {Header,About,Experience,Projects} from "../components/LandingPageComponents"

const Home = () => {
  return(
    <>
        {/* Header section*/}
        <Header/>

        {/* About section */}
        <About/>

        {/* Experience section */}
        <Experience/>
        
        {/*Projects section */}
        <Projects/>
    </>
  )
  
}

export default Home;