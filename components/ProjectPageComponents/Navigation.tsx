import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";

import styles from '@/styles/ProjectSection.module.scss';

import useProject from "./useProject";

type Props = {
    href:string,
}

const Navigation = ({href}:Props) => {

    return(
        <div>
        <div id={styles.navigation}>
            <a href={href} className="w-12">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} size="xl" />
            </a>

            {href !="./" &&
            <div style={{marginLeft:"10%"}}>
                {/*<p style={{fontSize:30}}>Click for Skills</p>*/}
            </div>
            }
          </div>
          </div>
    )
}


export default Navigation;