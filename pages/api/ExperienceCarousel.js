const getData = async (req, res) => {
    //todo: Get data from firebase Database
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
                "Agile methodologies",
                "Working in a team of Junior Software/Aspiring Full Stack Developers",
                "GitHub",
            ],
            references:null,
        },
        {
            establishment:"University of York, Baking Society",
            job_title:"President",
            dates:"Three University Terms (1 Year) March 2021 - March 2022",
            details:`President of the Baking Society; leading a fully new 
            small interdisciplinary committee team, organising
            the society and the great events we put on, 
            rejuvenating the buzz for in-person events after 
            lockdowns, working with notes from previous,
            uncontactable, committee members. I proudly 
            hosted a multitude of events, being the face of the 
            society.
            `,
            key_takeaways:[
                "What it's like to be in a leadership role",
                "Importance of good relationships with society members and members of small businesses",
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
                "Customer facing interaction",
                "An understanding of till GUI and the importance of having an interface that is clear and concise, abstracting away the low level \"technical jargon\" staff don't need to know to operate the system",
            ],
            references:null,
        },
        {
            establishment:"Shelton Development Services (Cranleigh)",
            job_title:"Work experience, Software Developer",
            dates:"31 July – 4 August 2017",
            details:`One-week work experience writing software 
            using Python, Pygame, HTML and CSS to recreate a licence system for the company's 
            software products.`,
            key_takeaways:[
                "How to work effectively and efficiently as part of a team",
                "How to collaborate and ask for help in a team of Software Developers",
            ],
            references:null,
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