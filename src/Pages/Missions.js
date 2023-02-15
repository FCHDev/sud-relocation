import React from 'react';
// import des svg et des images
import help from '../Assets/SVG/helping-hand.svg'
import coordination from '../Assets/SVG/coordination.svg'
import communication from '../Assets/SVG/communication.svg'
import facilitator from '../Assets/SVG/facilitator.svg'
import house from '../Assets/Images/house.jpg'
import faciliter from '../Assets/Images/faciliter.jpg'
import coordonner from '../Assets/Images/coordonner.jpg'
import communiquer from '../Assets/Images/communiquer.jpg'
import accompagner from '../Assets/Images/agentimmo.jpeg'

const Missions = () => {
    const missionsDetails = [
        {
            title: "Faciliter",
            body: "Faciliter la mobilité professionnelle de vos équipes pour améliorer la performance de votre Entreprise",
            textColor: "text-bleu-sud",
            icon: facilitator,
            pic: faciliter
        },
        {
            title: "Coordonner",
            body: "Coordonner et traiter des tâches multiples tout en assurant l’onboarding de vos recrues, soutenir vos employés et rechercher les futurs talents dont vous avez besoin.",
            textColor: "text-orange-sud",
            icon: coordination,
            pic: coordonner
        },
        {
            title: "Communiquer",
            body: "Communiquer et échanger sur les attentes du salarié, de l'amont du projet, jusqu'à sa réussite.",
            textColor: "text-bleu-sud",
            icon: communication,
            pic: communiquer
        },
        {
            title: "Accompagner",
            body: "Accompagner et guider l'Entreprise et ses salariés dans la sélection d'un nouveau logement. Trouver le lieu de vie idéal pour vous et votre famille.",
            textColor: "text-orange-sud",
            icon: help,
            pic: accompagner
        }
    ]

    return (
        <div className="md:min-h-[88vh] flex-col justify-center items-center bg-gris-sud bg-opacity-5 rounded-2xl md:py-10 md:px-5 animate-appear">
            {/*Partie résumé des missions*/}
            <div className="md:container mx-auto h-1/3 flex flex-col justify-center items-center p-3 bg-white rounded-2xl mb-14 md:mb-32">
                <div className="flex md:flex-row flex-col items-center mx-3">
                    <img className="md:block hidden w-1/4 md:h-full object-cover rounded-xl opacity-80" src={house} alt="une mini maison avec un toit rouge et un jeu de clés posé à côté"/>
                    <div className="md:w-3/4">
                        <h1 className="md:text-5xl text-3xl font-bold text-bleu-sud font-header md:pl-5 pt-2 md:pt-0 pb-5">
                            Simplifier vos démarches
                        </h1>
                        <p className="font-bodyText md:text-xl pb-3 md:pl-5">
                            Avec <span className="text-orange-sud font-bold">Sud Relocation</span> sit amet, consectetur adipisicing elit. Ad aliquid debitis doloremque iure laudantium mollitia nemo quia totam. A ab alias aliquam architecto aut beatae commodi culpa cumque deserunt dolor ducimus eius excepturi iste maxime minus molestias nobis nulla omnis optio perspiciatis quisquam quo ratione recusandae reiciendis similique, sint voluptates.
                        </p>
                        <p className="font-bodyText md:text-xl md:pl-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid debitis doloremque iure laudantium mollitia nemo quia totam. A ab alias aliquam architecto aut beatae commodi culpa cumque deserunt dolor ducimus eius excepturi iste maxime minus molestias nobis nulla omnis optio perspiciatis quisquam quo ratione recusandae reiciendis similique, sint voluptates.
                        </p>
                    </div>
                </div>
            </div>

            {/*Partie détails des missions*/}
            <div className="container mx-auto md:h-2/3 flex flex-wrap justify-between items-center">
                {missionsDetails.map((item, index) => (
                    <div key={index} className="flex md:flex-row flex-col md:w-[750px] justify-center w-full md:h-[300px] h-[360px] shadow-lg rounded-2xl p-5 bg-white m-2">
                        <div className="md:w-2/5">
                            <img className="md:w-full md:h-full h-[200px] w-[200px] mx-auto object-cover rounded-xl opacity-90" src={item.pic} alt={item.title}/>
                        </div>
                        <div className="flex flex-col justify-center mx-5 md:w-3/5">
                            <div className="flex items-center justify-center md:justify-start md:h-1/2">
                                <img className="hidden md:block" src={item?.icon} alt=""/>
                                <h2 className={`font-header font-bold text-2xl md:text-3xl md:ml-10 ${item.textColor}`}>
                                    {item.title}
                                </h2>
                            </div>
                            <p className="md:text-xl h-1/2 text-sm text-center md:text-start font-bodyText">
                                {item.body}
                            </p>
                        </div>
                    </div>

                    ))}
            </div>

        </div>
    );
};

// <ul>
//     <li>Faciliter la mobilité professionnelle de vos équipes pour améliorer la performance de votre
//         Entreprise.
//     </li>
//     <li>Coordonner et traiter des tâches multiples tout en assurant l’onboarding de vos recrues,
//         soutenir vos employés et rechercher les futurs talents dont vous avez besoin.
//     </li>
//     <li>Communiquer et échanger sur les attentes du salarié</li>
//     <li>Accompagner dans la sélection d'un nouveau logement</li>
//     <li>Faire visiter à distance</li>
//     <li>Gérer les prises en charge à l'aéroport</li>
// </ul>

export default Missions;