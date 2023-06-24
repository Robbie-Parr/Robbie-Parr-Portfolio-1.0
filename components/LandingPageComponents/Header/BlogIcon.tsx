import React from "react";
import styles from '@/styles/Header.module.scss';


const BlogIcon = () => {
    return(
        <a href="./blog">
            <div className={styles.Blog_Icon}>
                <h2>Blog</h2>
            </div>
        </a>
    )
}

export default BlogIcon;