import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/styles/Header.module.scss';

type Props = {}

const BlogIcon = ({}:Props) => {
    return(
        <a href="./blog">
            <div className={styles.Blog_Icon}>
                <h2>Blog</h2>
            </div>
        </a>
    )
}

export default BlogIcon;