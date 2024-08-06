import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import CurrencyConvertor from "../projects/currency-convertor/CurrencyConvertor.jsx";
import BmiCalculator from '../projects/bmi-calculator/BmiCalculator.jsx'
import QrCodeGenerator from "../projects/qrcode-generator/QrCodeGenerator.jsx";
import AdviceApp from "../projects/advice-app/AdviceApp.jsx";


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
            {
                path : 'bmi-calculator',
                element : <BmiCalculator/>
            },
            {
                path : 'qrcode-generator',
                element : <QrCodeGenerator/>
            },
            {
                path : 'advice-app',
                element : <AdviceApp/>
            }
        ]
    }
])

export default router;