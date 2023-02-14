import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Accueil from "./Pages/Accueil";
import Missions from "./Pages/Missions";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Salarie from "./Pages/Salarie";
import Entreprise from "./Pages/Entreprise";
import Contact from "./Pages/Contact";


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="mx-auto">
                <Routes>
                    <Route exact path="/" element={<Accueil/>}/>
                    <Route path="/salarie" element={<Salarie/>}/>
                    <Route path="/entreprise" element={<Entreprise/>}/>
                    <Route path="/missions" element={<Missions/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
            <Footer/>

        </BrowserRouter>

    );
}

export default App;
// <div className="md:w-1/2 flex justify-center mx-auto bg-gray-500 h-screen">
//     <Navbar />
// </div>