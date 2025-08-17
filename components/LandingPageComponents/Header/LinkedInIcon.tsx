import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LinkedInIcon = () => {
    return(
        <a href="https://www.linkedin.com/in/robbie-parr/">
            <div className="LinkedIn_icon">
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </div>
        </a>
    )
}

export default LinkedInIcon;