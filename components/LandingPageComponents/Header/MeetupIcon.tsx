import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeetup } from '@fortawesome/free-brands-svg-icons';

const MeetupIcon = () => {
    return(
        <a href="https://www.meetup.com/en-AU/parr-ty-events/">
            <div className="Meetup_icon">
                <FontAwesomeIcon icon={faMeetup} size="xl" />
            </div>
        </a>
    )
}

export default MeetupIcon;