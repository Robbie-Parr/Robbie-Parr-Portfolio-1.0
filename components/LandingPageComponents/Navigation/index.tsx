import React from "react";
import {motion} from "framer-motion";

import PageLinks from "./PageLinks";

const Navigation = () => {

    const data = [
        
        {title:"Skills",link:"/#skills"},
    ]

    return(
        <motion.nav
            initial={{
                y:"-50%",
                opacity:0,
            }}

            animate={{
                y:0,
                opacity:1,
            }}

            transition={{
                duration:1.2,
                delay:.5,
            }}
        id="container">
            {data.map(props => <PageLinks key={props.title} {...props} />)}
        </motion.nav>
    )
}

export default Navigation;