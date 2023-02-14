import React from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../Assets/Images/logosudreloc-colored.png'
import phone from '../Assets/SVG/telephone-call.svg'

const Navbar = () => {
    const menuItems = [
        {title: 'Accueil', link: '/'},
        {title: 'Missions', link: '/missions'},
        {title: 'Salarié', link: '/salarie'},
        {title: 'Entreprise', link: '/entreprise'},
        {title: 'Contact', link: '/contact'},
    ]

    let activeStyle = {
        fontWeight: "bold",
        color: "#1985A1",
    };

    return (
        <div className="w-full h-[6vh] flex my-[1vh]">
            {/*LOGO*/}
            <div className="md:w-1/6 md:h-full w-[120px] flex justify-center items-center">
                <img className="md:h-16 object-cover" src={logo} alt="sud relocation montpellier languedoc"/>
            </div>
            {/*MENU*/}
            <div className="w-4/6 h-full flex justify-center items-center font-header text-sm md:text-3xl">
                {menuItems.map((item, index) => (
                    <div key={index} className="md:mx-8 text-orange-sud active:text-bleu-sud transition ease-in-out md:hover:-translate-y-1 md:hover:scale-105 duration-300">
                        <NavLink to={item.link}
                        style={({ isActive }) => isActive ? activeStyle : undefined}>
                            {item.title}
                        </NavLink>
                    </div>))}
            </div>
            {/*BOUTON APPEL*/}
            <div className="w-1/6 bg-yellow-500 flex justify-center items-center text-xl">
                <button className="flex items-center bg-bleu-sud text-white px-3 py-2 rounded-xl hover:bg-gris-sud-light">
                    <img className="mr-2" src={phone} alt="telephone icon"/>
                    <span className="hidden md:block">
                        Appelez-nous
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;