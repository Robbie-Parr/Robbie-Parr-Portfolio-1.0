import React from "react"
import { useForm,SubmitHandler } from "react-hook-form";
import {PhoneIcon, EnvelopeIcon} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

type Inputs ={
    name:String,
    subject:String,
    message:String
}

const ContactForm = () => {

    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href=`mailto:RobbieJParr@hotmail.com?subject=${formData.subject} from ${formData.name}&body=${formData.message}`
    }


    return(
        <div className="text-center" id="main">
            <h1 id="contactTitle">Contact Form</h1>

            <div id="main_body">
                <div id="main_body_content">
                    <h4>
                        If I have a skill you're looking for, or I need to learn a skill for you:
                        <br/><span className="p-1 text-bold">Get in contact</span>
                    </h4>

                    <div className="pt-4 flex space-x-8 justify-center sm:flex-col md:flex-col lg:flex-row" id="icons">
                        <div className="flex items-center space-x-1 justify-center">
                            <PhoneIcon className="h-7 w-7 animate-pulse text-[#f7690a]" />
                            <p className="text-2xl">07864 659097</p>
                        </div>

                        <div className="flex items-center space-x-1" id="linkedIn_section">
                            <a href="https://www.linkedin.com/in/robbie-parr/">
                                <div className="Contact_LinkedIn_icon">
                                    <FontAwesomeIcon icon={faLinkedin} className="animate-pulse" size="xl" />
                                </div>
                            </a>
                            <p>/robbie-parr/</p>
                        </div>

                        <div className="flex items-center space-x-1 justify-center">
                            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#f7690a]" />
                            <p className="text-2xl">RobbieJParr@hotmail.com</p>
                        </div>
                    </div>

                    <form className="flex flex-col space-y-2 mx-auto pt-5" id="form"
                        onSubmit={handleSubmit(onSubmit)}>
                    
                        <input className="contact_form_input"
                            type="text" placeholder="Name"
                            {...register("name")} />
                    
                        <input className="contact_form_input" 
                            type="text" placeholder="Subject"
                            {...register("subject")} />

                        <textarea className="contact_form_input"
                            placeholder="Message"
                            {...register("message")} />
                    
                        <button className="bg-[#f7690a] py-2 rounded-md text-black font-bold ml-64"
                            type="submit">
                            Submit</button>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default ContactForm;