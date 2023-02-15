import React from 'react';
import ContactForm from "../Components/ContactForm";

const Contact = () => {
    return (
        <div className="min-h-[88vh] flex justify-center items-center bg-gris-sud-light rounded-2xl md:py-3 md:px-5 animate-appear">
            <div className="md:container mx-auto">
                <ContactForm/>
            </div>
        </div>
    );
};

export default Contact;