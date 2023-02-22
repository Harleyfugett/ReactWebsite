import { createRoot } from 'react-dom/client';
// import React, { Suspense, useState } from "react";

// import Header from "./Header";
// import Portfolio from './Portfolio';
// import MainPage from './Mainpage';
// import Aboutme from './Aboutme';
import { Homepage, AboutMe, Portfolio } from './components';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StyleSheet } from './components';


const App = () => {
    return (
        <BrowserRouter>
        <div id="parent-element-div">
            <nav>
                <Link to="/">Homepage</Link>
                <Link to="/about-me">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </div>
        </BrowserRouter>
    )
}


// // const Homepage = () => {
// //     const [active, SetActive] = useState(MainPage);
// //     return (
// //         <section>
// //             <div>
// //                 <nav>
// //                     <button class="navButton" onClick={() => SetActive("HomeButton")}>Home</button>
// //                     <button class="navButton" onClick={() => SetActive("AboutMeButton")}>About Me</button>
// //                     <button class="navButton" onClick={() => SetActive("PortfolioButton")}>Portfolio</button>
// //                 </nav>
// //                 <div>
// //                     {active === "HomeButton" && <MainPage data={MainPage} />}
// //                     {active === "AboutMeButton" && <Aboutme data={Aboutme} />}
// //                     {active === "PortfolioButton" && <Portfolio data={Portfolio} />}
// //                 </div>
// //             </div>

//         {/* <Header />
//             <div>
//                 <MainPage />
//                 <Portfolio />
                
//             </div> */}
// //         </section>
// //     )
// // }


const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<App />)