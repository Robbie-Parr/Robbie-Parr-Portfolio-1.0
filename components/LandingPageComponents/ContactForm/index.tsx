import React from "react"
import { useForm,SubmitHandler } from "react-hook-form";
import {PhoneIcon, EnvelopeIcon} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from '@/styles/ContactForm.module.scss';


type Props = {}

type Inputs ={
    name:String,
    //email:String,
    subject:String,
    message:String
}

const ContactForm = ({}:Props) => {

    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href=`mailto:RobbieJParr@hotmail.com?subject=${formData.subject} from ${formData.name}&body=${formData.message}`
    }


    return(
        <div className="text-center" id={styles.main}>
            <h1 id={styles.title}>Contact Form</h1>

            <div id={styles.main_body}>
                <h4>
                    If I have a skill you're looking for, or I need to learn a skill for you
                    <span>Get in contact</span>

                </h4>

                <div className="pt-4 flex space-x-8 justify-center sm:flex-col md:flex-col lg:flex-row" id={styles.icons}>
                    <div className="flex items-center space-x-1 justify-center">
                        <PhoneIcon className="h-7 w-7 animate-pulse text-[#f7690a]" />
                        <p className="text-2xl">07864 659097</p>
                    </div>

                    <div className="flex items-center space-x-1" id={styles.linkedIn_section}>
                        <a href="https://www.linkedin.com/in/robbie-parr/">
                            <div className={styles.LinkedIn_icon}>
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

                <form className="flex flex-col space-y-2 mx-auto pt-5" id={styles.form}
                    onSubmit={handleSubmit(onSubmit)}>
                    
                        <input className={styles.contact_form_input} 
                            type="text" placeholder="Name"
                            {...register("name")} />
                        {/*<div className="flex space-x-4">
                        
                        <input className={styles.contact_form_input} 
                            type="email" placeholder="Email"
                            {...register("email")} />
                            
                        </div>*/}
                    
                    

                    <input className={styles.contact_form_input} 
                        type="text" placeholder="Subject"
                        {...register("subject")} />

                    <textarea className={styles.contact_form_input}
                        placeholder="Message"
                        {...register("message")} />
                    
                    <button className="bg-[#f7690a] py-2 rounded-md text-black font-bold ml-64"
                        type="submit">
                        Submit</button>
                </form>


            </div>

        </div>
    )
}

export default ContactForm;