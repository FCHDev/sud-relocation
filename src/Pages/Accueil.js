import React from 'react';
// import pool2 from '../Assets/Images/pool2.jpg';
// import facade from '../Assets/Images/facade.jpeg';
import beach from '../Assets/Images/beach01.jpg';
import lavandeBanner from '../Assets/Images/lavande-banner.jpg';
import familyHouse from '../Assets/Images/familyHouseSun.jpeg';
import ContactCard from "../Components/ContactCard";
import {NavLink} from "react-router-dom";

const Accueil = () => {
    return (
        <div className="md:min-h-[86vh] flex flex-col pb-5 md:pb-0 animate-appear bg-gris-sud-light">
            {/*Banner*/}
            <div className="mb-5 mt-3 md:mt-0 md:mb-10">
                <img className="object-cover h-[250px] w-full filter hidden md:block" src={lavandeBanner} alt=""/>
            </div>
            {/*Titre de la page version DESKTOP*/}
            <div className="hidden md:flex w-full justify-center mb-5">
                <div className="revealing font-header text-bleu-sud font-bold text-center text-xl md:text-5xl pb-5">
                    Vous relogez vos salariés ?
                </div>
                <div className="revealing font-header text-orange-sud font-bold text-center text-xl md:text-5xl pb-5">
                    <span>
                        Le soleil les attend !
                    </span>
                </div>
            </div>
            {/*Titre de la page version MOBILE*/}
            <div className="md:hidden w-full flex flex-col justify-center">
                <div className="font-header text-bleu-sud font-bold text-center text-2xl md:text-4xl">
                    Vous relogez vos salariés ?
                </div>
                <div className="font-header text-orange-sud font-bold text-center text-2xl md:text-4xl pb-5">
                    <span>
                        Le soleil les attend !
                    </span>
                </div>
            </div>

            {/*Texte de présentation*/}
            <div className="h-full container flex flex-col justify-evenly items-center px-5 mx-auto">
                <div className="flex md:flex-row flex-col items-center rounded-3xl bg-white mb-5">
                    <img src={beach} alt="champ de lavande"
                         className="h-80 rounded-t-3xl md:rounded-t-none md:rounded-tl-3xl md:rounded-bl-3xl object-cover"/>
                    <p className="mt-5 md:my-0 mb-5 md:mx-5 md:font-light md:text-xl font-bodyText md:px-0 px-2">
                        Que vous soyez
                        <NavLink className="text-orange-sud font-bold px-1 md:text-2xl hover:text-bleu-sud" to="/entreprise">
                            employeur
                        </NavLink>
                        cherchant à optimiser vos ressources ou
                        <NavLink className="text-orange-sud font-bold px-1 md:text-2xl hover:text-bleu-sud" to="/salarie">
                            salarié
                        </NavLink>
                        engagé dans une volonté de mobilité, nous sommes disponibles et à votre écoute pour faciliter
                        toutes vos démarches.

                        <br/><br/>
                        <NavLink className="text-orange-sud font-bold px-1 md:text-2xl" to="/contact">
                            Sud Relocation
                        </NavLink>
                        propose du sur-mesure en vous accompagnant dans chacune des étapes pour que votre relocation ou
                        celles de vos talents soient une totale réussite.
                    </p>
                </div>

                <div className="flex md:flex-row flex-col-reverse items-center rounded-3xl bg-white">
                    <p className="mt-3 md:mt-0 md:mx-5 md:font-light md:text-xl font-bodyText md:px-0 px-2">
                        Nouveau lieu de travail, nouveau cadre de vie, nouveaux repères… Le salarié qui arrive dans un nouvel environnement doit faire face à de nombreux changements.
                        <br/><br/>
                        La <span className="font-bold">prise en charge</span> de vos collaborateurs dans le cadre de leur mobilité professionnelle et
                        géographique, permet d’aborder ce changement de vie dans les meilleures conditions, de <span className="font-bold">réduire
                        les coûts</span> et d’alléger la charge de travail du service RH.
                    </p>
                    <img src={familyHouse} alt="champ de lavande"
                         className="h-80 rounded-t-3xl md:rounded-t-none md:rounded-tr-3xl md:rounded-br-3xl object-cover"/>
                </div>
            </div>

            {/*Carte contact*/}
            <div className="w-1/3 h-1/4 mx-auto my-10 flex items-center justify-center">
                <ContactCard/>
            </div>

        </div>
    );
};

export default Accueil;