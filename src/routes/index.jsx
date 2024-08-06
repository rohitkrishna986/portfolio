import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import CurrencyConvertor from "../projects/currency-convertor/CurrencyConvertor.jsx";


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : '',
                element : <Home/>
            },
            {
                path : 'about',
                element : <About/>
            },
            {
                path : 'skills',
                element : <Skills/>
            },
            {
                path : 'contact',
                element : <Contact/>
            },
            {
                path : 'projects',
                element : <Project/>,
            },
            {
                path : 'currency-convertor',
                element : <CurrencyConvertor/>
            },
        ]
    }
])

export default router;