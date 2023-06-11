const getData = async (req, res) => {
    const data = [
        {
            establishment:"York Community Consulting",
            job_title:"Software Developer, Senior Consultant",
            dates:"October 2022 - Current",
            details:`Joined a technology focussed consultancy project in October 2022 as a 
            Senior Consultant and upon completion of the project was promoted to a
            Software Developer in the wider YCC Technology team to continue 
            developing the new YCC website. The website utilises React.JS/Next.Js, 
            SCSS, JSX with a JavaScript backend and firebase data and API endpoints.`,
            key_takeaways:[
                "How to build a client facing ReactJS/Next.Js web application.",
                "Agile methodologies"
            ],
            references:null,
        },
        {
            establishment:"University of York, Baking Society",
            job_title:"President",
            dates:"Three University Terms (1 Year) 18th March 2021 - 24th March 2022",
            details:`I was the President of the Baking Society, where I was 
            tasked with organising society events and organising the 
            society as a whole. Hosting events and being the face of 
            the society. For my year long term.`,
            key_takeaways:[
                "What it's like to be in a leadership role",
                "Importance of good relationships with society members and members of small businesses"
            ],
            references:null,
        },
        {
            establishment:"The Edinburgh Woollen Mill",
            job_title:"Sales Assistant",
            dates:"23rd February 2020 - 20th September 2020",
            details:`Worked as a Sales Assistant for the store. 
            Helping with the selling of goods to customers. 
            Ensuring a excellent customer experience.`,
            key_takeaways:[
                "Customer facing interaction" 
            ],
            references:null,
        },
        {
            establishment:"Shelton Development Services (Cranleigh)",
            job_title:"Work experience as a Software Developer",
            dates:"31 July – 4 August 2017",
            details:`One-week work experience writing software 
            using Python, Pygame, HTML and CSS to recreate a licence system for the company's 
            software products.`,
            key_takeaways:[
                "How to work effectively and efficiently as part of a team"
            ],
            references:[
                "Head of Software Team / Software Architect, Mr Fred Trüter: fred@s-d-s.co.uk"
            ]
        },
        
    ]
    res.status(200).json({data});
}


const handler = (req, res) => {
    switch(req.method){
        case "GET":
            getData(req,res);
            break;
    }
  }
  

export default handler;