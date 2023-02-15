import React from 'react';

const ContactForm = () => {
    return (
        <section className="bg-white rounded-2xl">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold font-bodyText text-center text-bleu-sud">
                    Contactez-nous
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl font-bodyText">
                    Dès à présent, contactez-nous pour un 1er échange. Nous vous présenterons comment nous pouvons vous accompagner, vous et/ou vos salariés dans votre projet de mobilité professionnelle.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="company"
                               className="block mb-2 text-base font-bold text-gray-900 font-bodyText text-bleu-sud">
                            Raison sociale
                        </label>
                        <input type="text" id="company"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 font-bodyText"
                               placeholder="Tesla" required/>
                    </div>
                    <div>
                        <label htmlFor="nom"
                               className="block mb-2 text-base font-bold text-gray-900 font-bodyText text-bleu-sud">
                            Nom
                        </label>
                        <input type="text" id="name"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 font-bodyText"
                               placeholder="Dupond" required/>
                    </div>
                    <div>
                        <label htmlFor="prenom"
                               className="block mb-2 text-base font-bold text-gray-900 font-bodyText text-bleu-sud">
                            Prénom
                        </label>
                        <input type="text" id="surname"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 font-bodyText"
                               placeholder="Jean" required/>
                    </div>
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-base font-bold text-gray-900 font-bodyText text-bleu-sud">
                            Email*
                        </label>
                        <input type="email" id="email"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 font-bodyText"
                               placeholder="jean.dupond@gmail.com" required/>
                    </div>
                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-base font-bold text-gray-900 font-bodyText text-bleu-sud">
                            Projet
                        </label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 font-bodyText"
                               placeholder="Quel est votre projet ?" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-base font-bold text-gray-900 font-bodyText text-bleu-sud">
                            Description
                        </label>
                        <textarea id="message" rows="6"
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-orange-sud focus:border-orange-sud font-bodyText"
                                  placeholder="Expliquez-nous en quelques lignes les détails de votre projet..."></textarea>
                    </div>
                    <button type="submit"
                            className="py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-orange-sud sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 transition ease-in-out md:hover:-translate-y-1 md:hover:scale-105 duration-300">
                        Envoyer
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;