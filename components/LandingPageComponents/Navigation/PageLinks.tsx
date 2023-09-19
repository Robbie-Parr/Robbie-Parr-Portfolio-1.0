import React from "react";

import styles from '@/styles/NavigationSection.module.scss';

type Props = {
    title:string,
    link:string
}

const PageLinks = ({title,link}:Props) => {
    return(
        <a href={link} id={styles.links}>
            <div>
                {title}
            </div>
        </a>
    )
}

export default PageLinks;