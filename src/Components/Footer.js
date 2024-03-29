import React from 'react';
import logoWhite from '../Assets/Images/logosudreloc-white.png'
import logoEmobiliaWhite from '../Assets/Images/logoemobilia-white.png'
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className="min-h-[6vh] flex justify-evenly items-center bg-bleu-sud md:py-4 py-2 px-5 mx-auto">
			<div className="flex justify-center md:h-[60px] h-[20px]">
				<img src={logoWhite} alt="sud relocation logo montpellier languedoc"/>
				<NavLink to="http://www.e-mobilia.com/home.html" target="_blank" rel="noreferrer noopener">
				<img className="md:w-[150px] w-[50px]" src={logoEmobiliaWhite} alt="emobilia logo sud nîmes montpellier languedoc"/>
				</NavLink>
			</div>


            {/*COPYRIGHT*/}
            <span className="text-white text-xs md:text-base font-bodyText">Copyright © 2023. All rights reserved.</span>
            {/*ICONES RESEAUX SOCIAUX*/}
            <span className="hidden md:inline-flex justify-center sm:justify-start">

						<div className="text-orange-sud text-gray-500">
							<svg fill="white" strokeLinecap="round" strokeWidth="2" className="w-7 h-7"
                                 viewBox="0 0 24 24">
							  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
							</svg>
						  </div>

						  <div className="text-orange-sud ml-3 text-gray-500">
							<svg fill="white" strokeLinecap="round" strokeWidth="2" className="w-7 h-7"
                                 viewBox="0 0 24 24">
							  <path
                                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
							</svg>
						  </div>

						  <div className="text-white ml-3 text-gray-500">
							<svg fill="transparent" stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                 className="w-7 h-7" viewBox="0 0 24 24">
							  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
							  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
							</svg>
						  </div>

						  <div className="text-orange-sud ml-3 text-gray-500">
							<svg fill="white" stroke="currentColor" strokeLinecap="round" strokeWidth="0"
                                 className="w-7 h-7" viewBox="0 0 24 24">
							  <path stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
							  <circle cx="4" cy="4" r="2" stroke="none"></circle>
							</svg>
						  </div>

					</span>
        </div>
    );
};

export default Footer;