import React from 'react';
import ContactForm from "../Components/ContactForm";

const Contact = () => {
    return (
        <div className="min-h-[86vh] flex justify-center items-center bg-gris-sud-light rounded-2xl py-3 px-5 animate-appear">
            <div className="container mx-auto">
                <ContactForm/>
            </div>
        </div>
    );
};

export default Contact;