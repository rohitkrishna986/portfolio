import QrCodeLogo from '../assests/QrCodeLogo.png';
import BmiLogo from '../assests/BmiLogo.jpg'
import AdviceLogo from '../assests/AdviceLogo.png'
import EcommerceLogo from '../assests/EcommerceLogo.jpg'
import CurrencyLogo from '../projects/currency-convertor/assets/icon.jpg'
import { IoQrCode } from "react-icons/io5";
import { MdCurrencyExchange } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";

const ProjectList = [
    {
        id: 1,
        name: "E-Commerce App",
        createdBy: "Rohit",
        linkPage: "",
        description: "An e-commerce SPA using the MERN stack (MongoDB, Express, React, Node.js) features seamless user functionalities such as product listings, detailed views, authentication, shopping cart, and order management, all managed with React, Redux, and Axios. The backend, powered by Node.js and Express, provides RESTful APIs, JWT-based authentication, and order processing, with MongoDB for data storage. An integrated admin panel, built with React Admin, enables efficient management of products, orders, and users, ensuring a smooth experience for both customers and administrators.",
        projectImage: EcommerceLogo,
        projectIcon : <IoQrCode/>
    },
    {
        id: 2,
        name: "BMI Calculator",
        createdBy: "Rohit",
        linkPage: "/bmi-calculator",
        description: "A BMI Calculator application built with React allows users to easily calculate their Body Mass Index (BMI) by inputting their weight and height. The app provides instant feedback on BMI categories such as underweight, normal weight, overweight, and obesity. With a clean and user-friendly interface, it leverages React's state management to handle user inputs and display results dynamically. Ideal for health-conscious individuals seeking a quick and convenient way to monitor their body weight status.",
        projectImage: BmiLogo,
        projectIcon : <GiWeightLiftingUp/>
    },
    {
        id: 3,
        name: "Currency Convertor",
        createdBy: "Rohit",
        linkPage: "/currency-convertor",
        description: "A Currency Converter application built with React enables users to convert amounts between different currencies quickly and efficiently. By selecting the source and target currencies and entering the amount, users receive real-time conversion results. The app integrates with currency exchange rate APIs to ensure up-to-date information and offers a sleek, responsive interface for an intuitive user experience. Perfect for travelers, businesses, and anyone needing accurate currency exchange calculations on the go.",
        projectImage: CurrencyLogo,
        projectIcon : <MdCurrencyExchange/>
    },
    {
        id: 4,
        name: "Advice App",
        createdBy: "Rohit",
        linkPage: "",
        description: "An Advice Application built with React and an API provides users with random or topic-specific advice. By integrating with an external advice API, the app delivers insightful or motivational tips at the click of a button. The application features a clean, interactive interface that refreshes with new advice each time the user interacts with it. Ideal for those seeking a quick boost of inspiration or helpful suggestions.",
        projectImage: AdviceLogo,
        projectIcon : <IoQrCode/>
    },
    {
        id: 5,
        name: "QR Code Generator",
        createdBy: "Rohit",
        linkPage: "",
        description: "This QR code generator application, built with Vite and React, allows users to create customized QR codes effortlessly. The app features a user-friendly interface where users input their data, and it utilizes an API to generate and fetch the corresponding QR code. With Vite for fast builds and React for dynamic user interactions, the app ensures a smooth and efficient experience.",
        projectImage: QrCodeLogo,
        projectIcon : <IoQrCode/>
    },
];

export default ProjectList;
