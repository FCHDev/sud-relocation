import React from 'react';
import brad from '../Assets/Images/brad.webp'
import angelina from '../Assets/Images/angelina.jpg'
import {NavLink} from "react-router-dom";
import map from '../Assets/SVG/google-maps.svg'

const ContactCard = () => {
    return (
        <div className="flex flex-col justify-around rounded-2xl md:mx-auto mx-1 h-[170px] bg-orange-sud shadow-lg md:p-3 w-full">
            <div className="flex px-2 md:py-1 h-[150px] ">
                <div className="md:h-full w-full flex items-center justify-center md:ml-20">
                    <img className="md:block hidden w-1/5 rounded-full mr-5" src={angelina} alt="aurélie"/>
                    <div className="w-4/5 flex flex-col">
                        <p className="font-bodyText text-white font-bold md:text-xl">Aurélie DADI</p>
                        <p className="font-bodyText text-white text-xs md:text-base">+33 (0)6 63 10 02 42
                        </p>
                        <a href="mailto:aurelie.dadi@e-mobilia.com"
                           className="font-bodyText text-white underline text-[9px] md:text-base">aurelie.dadi@e-mobilia.com</a>
                    </div>
                </div>
                <div className="h-full w-full flex items-center justify-center">
                    <img className="md:block hidden w-1/5 rounded-full mr-5" src={brad} alt="grégory"/>
                    <div className="w-4/5 flex flex-col">
                        <p className="font-bodyText text-white font-bold md:text-xl">Grégory DADI</p>
                        <p className="font-bodyText text-white text-xs md:text-base">+33 (0)7 76 95 40 41
                        </p>
                        <a href="mailto:aurelie.dadi@e-mobilia.com"
                           className="font-bodyText text-white underline text-[9px] md:text-base">gregory.dadi@e-mobilia.com</a>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                    <NavLink
                        to="https://www.google.com/maps/place/53+Rue+du+Paradis,+34740+Vendargues/@43.6659693,3.9757857,17z/data=!3m1!4b1!4m6!3m5!1s0x12b6a6c7bb59c59d:0x194bda4927576d7e!8m2!3d43.6659693!4d3.9757857!16s%2Fg%2F11mv_yc_l6"
                        target="_blank" rel="noreferrer noopener"
                        className="flex">
                        <img src={map} alt="google map de l'adresse indiquée au-dessus" className="w-7 mr-3"/>
                        <span className="font-bodyText text-white text-sm md:text-base text-sm">
                        53, rue du Paradis - 34740 Vendargues
                    </span>
                    </NavLink>
            </div>
        </div>

    );
};

export default ContactCard;