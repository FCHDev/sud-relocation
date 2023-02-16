import React from 'react';
import agentImmo from '../Assets/Images/agentimmo.jpeg'
import thumb from '../Assets/SVG/thumb-up.svg'
import {NavLink} from "react-router-dom";

const Salarie = () => {
    return (
        <div className="min-h-[88vh] bg-gris-sud bg-opacity-5 rounded-2xl py-3 px-5 animate-appear">
            <section className="container mx-auto bg-white md:my-10 rounded-2xl">
                <div
                    className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img className="w-full rounded-2xl"
                         src={agentImmo}
                         alt="deux poignées de main au-dessus d'une maison miniature"/>
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold font-bodyText text-bleu-sud">
                                Nous vous accompagnons dans le changement
                            </h2>
                            <p className="mb-6 font-light text-gray-500 font-bodyText md:text-lg">
                                Nouveau lieu de travail, nouveau cadre de vie, nouveaux repères… Le salarié qui arrive dans un nouvel environnement doit faire face à de nombreux changements.
                            </p>
                            <p className="mb-6 font-bold text-gray-500 font-bodyText md:text-lg">
                                Vous voulez vous libérez des contraintes ?
                            </p>
                            <NavLink
                               className="inline-flex items-center text-white bg-orange-sud font-bodyText hover:bg-bleu-sud focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-base md:text-lg px-5 py-2.5 text-center" to="/contact">
                                Contactez-nous
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </NavLink>
                        </div>
                </div>
            </section>
            <div className="md:container mx-auto bg-white md:h-[100px] h-[85px] rounded-2xl md:flex md:justify-start items-center mb-3 md:pl-32 px-2 md:px-0 md:mt-24">
                <img className="md:w-[35px] md:block hidden w-[25px] mr-5" src={thumb} alt="pouce en l'air"/>
                <h2 className="mr-5 font-bodyText md:text-3xl font-bold text-orange-sud">
                    Tranquilité d'esprit
                </h2>
                <p className="font-bodyText md:text-xl text-sm">
                    Vous pouvez vous concentrer immédiatement et sereinement sur l’essentiel, votre travail et votre famille
                </p>
            </div>
            <div className="md:container mx-auto bg-white md:h-[100px] h-[85px] rounded-2xl md:flex md:justify-start justify-center items-center mb-3 md:pl-32 px-2 md:px-0">
                <img className="md:w-[35px] md:block hidden w-[25px] mr-5" src={thumb} alt="pouce en l'air"/>
                <h2 className="mr-5 font-bodyText md:text-3xl font-bold text-orange-sud">
                    Meilleure intégration sociale
                </h2>
                <p className="font-bodyText md:text-xl text-xs">
                    Pour toute votre famille
                </p>
            </div>
            <div className="md:container mx-auto bg-white md:h-[100px] h-[85px] rounded-2xl md:flex justify-start items-center mb-3 md:pl-32 px-2 md:px-0">
                <img className="md:w-[35px] md:block hidden w-[25px] mr-5" src={thumb} alt="pouce en l'air"/>
                <h2 className="mr-5 font-bodyText md:text-3xl font-bold text-orange-sud">
                    Gain de temps
                </h2>
                <p className="font-bodyText md:text-xl text-xs">
                    Vous êtes déchargé(e) de toutes les tâches administratives et logistiques
                </p>
            </div>
            <div className="md:container mx-auto bg-white md:h-[100px] h-[85px] rounded-2xl md:flex justify-start items-center mb-3 md:pl-32 px-2 md:px-0">
                <img className="md:w-[35px] md:block hidden w-[25px] mr-5" src={thumb} alt="pouce en l'air"/>
                <h2 className="mr-5 font-bodyText md:text-3xl font-bold text-orange-sud">
                    Maîtrise et optimisation
                </h2>
                <p className="font-bodyText md:text-xl text-xs">
                    Des coûts financiers liés à l'installation
                </p>
            </div>
        </div>
);
};

export default Salarie;