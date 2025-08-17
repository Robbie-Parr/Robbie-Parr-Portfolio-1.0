import React from "react"

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
        <div id="experienceCard">
            <div id="experience_details">
                <div className="text-center" id="experience_titles">
                    <h1><b>{establishment}</b></h1>
                    <h3><b>{job_title}</b></h3>
                </div>
                <div id="experience_dates">
                    <h4>{dates}</h4>
                </div>
            </div>
            <div id="details">
                <p>{details}</p>
            </div>
            <div id="information">
                <div id="takeaways">
                    {key_takeaways!=null && <h3>Key Takeaways</h3>}
                    {key_takeaways?.map(takeaway => 
                        <li key={takeaway}>{takeaway}</li>
                        )}
                </div>
                {references!=null &&
                <div id="references">
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