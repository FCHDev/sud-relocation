import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../Assets/Images/logosudreloc-colored.png'
import phone from '../Assets/SVG/telephone-call.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    // SVG LOGOS
    const menuBurger =
        <svg version="1.1" id="Capa_1"
             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 50 50"
             fill="#1985A1"
            // style="enable-background:new 0 0 50 50;"
             xmlSpace="preserve">
            <g>
                <rect y="3" width="50" height="2"/>
                <rect y="17" width="50" height="2"/>
                <rect y="31" width="50" height="2"/>
                <rect y="45" width="50" height="2"/>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>

    const closeBurger = <svg version="1.1" id="Layer_1"
                             xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             fill="#1985A1"
                             viewBox="0 0 371.23 371.23"
                             xmlSpace="preserve">
        <polygon points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23
	185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "/>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
    </svg>

    const menuItems = [
        {title: 'Accueil', link: '/'},
        {title: 'Missions', link: '/missions'},
        {title: 'Vous êtes Salarié', link: '/salarie'},
        {title: 'Vous êtes une Entreprise', link: '/entreprise'},
        {title: 'Contact', link: '/contact'},
    ]

    let activeStyle = {
        fontWeight: "bold",
        color: "#1985A1",
    };

    return (
        <div className="w-full lg:min-h-[6vh] h-[8vh] flex my-[1vh] 2xl:my-0">
            {/*LOGO*/}
            <NavLink to="/" className="lg:w-1/6 md:ml-4 md:h-full w-[160px] flex justify-center items-center">
                <img className="md:h-16 object-cover" src={logo} alt="sud relocation montpellier languedoc"/>
            </NavLink>
            {/*MENU*/}

            <div onClick={() => setIsOpen(!isOpen)}
                 className="text-3xl w-8 absolute right-8 top-5 md:top-10 cursor-pointer lg:hidden z-20">
                {isOpen ? closeBurger : menuBurger}
            </div>

            <div className={`
                    lg:w-4/6 
                    lg:flex 
                    lg:items-center
                    lg:pb-0 
                    lg:pl-0 
                    lg:z-auto 
                    lg:text-xl
                    lg:opacity-100
                    lg:pt-0
                    lg:text-lg
                    lg:static
                    lg:text-2xl
                    2xl:text-3xl
                    w-[320px]
                    md:w-full
                    md:pb-9
                    font-header 
                    text-2xl 
                    justify-center
                    pt-5
                    pb-8 
                    absolute 
                    bg-white
                    bg-opacity-90
                    backdrop-blur-sm
                    rounded-2xl
                    left-0
                    pl-9 
                    transition-all duration-500 ease-in z-20 ${isOpen ? 'top-14 md:top-24 opacity-100' : 'top-[-490px]'}`}>
                {menuItems.map((item, index) => (
                    <div key={index}
                         className="py-2 md:py-0 md:mx-8 text-orange-sud active:text-bleu-sud transition ease-in-out lg:hover:-translate-y-1 lg:hover:scale-105 duration-300">
                        <NavLink to={item.link}
                                 style={({isActive}) => isActive ? activeStyle : undefined}
                                 onClick={() => {
                                     setIsOpen(false)
                                 }}>
                            {item.title}
                        </NavLink>
                    </div>))}
            </div>
            {/*BOUTON APPEL*/}
            <div className="w-1/6 hidden lg:flex justify-center items-center text-xl">
                <button
                    className="flex items-center bg-bleu-sud text-white font-bodyText font-bold px-3 py-2 rounded-xl hover:bg-orange-sud">
                    <img className="mr-2" src={phone} alt="telephone icon"/>
                    <span className="md:block text-base 2xl:text-2xl">
                        Appelez-nous
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;

//"w-4/6 h-full flex justify-center items-center font-header text-sm md:text-3xl"
//"text-3xl w-8 absolute right-8 top-3 sm:top-5 cursor-pointer md:hidden z-20"