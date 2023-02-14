import React from 'react';
import brad from '../Assets/Images/brad.webp'
import angelina from '../Assets/Images/angelina.jpg'

const ContactCard = () => {
    return (
        <div className="flex flex-col justify-around rounded-2xl mx-auto bg-white shadow-lg">

            <div className="flex px-2 py-1 h-[150px] ">
                <div className="h-full w-full flex items-center justify-center">
                    <img className="md:block hidden w-1/5 rounded-full mr-5" src={angelina} alt="aurélie"/>
                    <div className="w-4/5 flex flex-col">
                        <p className="font-header text-orange-sud font-bold md:text-xl">Aurélie DADI</p>
                        <p className="font-bodyText text-xs md:text-base">+33 (0)6 63 10 02 42
                        </p>
                        <a href="mailto:aurelie.dadi@e-mobilia.com"
                           className="font-bodyText underline text-[9px] md:text-base">aurelie.dadi@e-mobilia.com</a>
                    </div>
                </div>
                <div className="h-full w-full flex items-center justify-center">
                    <img className="md:block hidden w-1/5 rounded-full mr-5" src={brad} alt="grégory"/>
                    <div className="w-4/5 flex flex-col">
                        <p className="font-header text-orange-sud font-bold md:text-xl">Grégory DADI</p>
                        <p className="font-bodyText text-xs md:text-base">+33 (0)7 76 95 40 41
                        </p>
                        <a href="mailto:aurelie.dadi@e-mobilia.com"
                           className="font-bodyText underline text-[9px] md:text-base">gregory.dadi@e-mobilia.com</a>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center pt-2 md:pt-0">
                <div>
                    <span className="font-header text-sm md:text-xl text-bleu-sud py-3 font-bold">
                        Adresse
                    </span>
                    <span className="font-bodyText text-sm md:text-base text-sm">: 53, rue du Paradis - 34740 Vendargues
                </span>
                </div>
            </div>
        </div>

    );
};

export default ContactCard;