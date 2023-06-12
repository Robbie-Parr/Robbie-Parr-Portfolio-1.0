import React from "react"

import styles from '@/styles/Experience.module.scss';

type Props = {
    establishment:String,
    job_title:String,
    dates:String,
    details:String,
    key_takeaways:[String],
    references:[String]
}

const Card = ({establishment,
                job_title,
                dates,
                details,
                key_takeaways,
                references}:Props) => {
    return(
        <div className="text-center" id={styles.card}>
            <div id={styles.experience_details}>
                <div id={styles.experience_titles}>
                    <h1><b>{establishment}</b></h1>
                    <h3><b>{job_title}</b></h3>
                </div>
                <div id={styles.experience_dates}>
                    <h4>{dates}</h4>
                </div>
            </div>
            <div id={styles.details}>
                <p>{details}</p>
            </div>
            <div id={styles.information}>
                <div id={styles.takeaways}>
                    {key_takeaways!=null && <h2>Key Takeaways</h2>}
                    {key_takeaways?.map(takeaway => 
                        <li>{takeaway}</li>
                        )}
                </div>
                {references!=null &&
                <div id={styles.references}>
                    <h2>References</h2>
                    {references?.map(reference =>
                        <li>{reference}</li>
                        )}
                </div>
                }
            </div>
        </div>
    )
}

export default Card;