import React from "react"

import styles from '@/styles/Experience.module.scss';

type Props = {
    establishment:String,
    job_title:String,
    dates:String,
    details:String,
    key_takeaways:string[],
    references:string[]
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
                    {key_takeaways!=null && <h3>Key Takeaways</h3>}
                    {key_takeaways?.map(takeaway => 
                        <li key={takeaway}>{takeaway}</li>
                        )}
                </div>
                {references!=null &&
                <div id={styles.references}>
                    <h3>References</h3>
                    {references?.map(reference =>
                        <li key={reference}>{reference}</li>
                        )}
                </div>
                }
            </div>
        </div>
    )
}

export default Card;