import QrCodeLogo from "../assests/QrCodeLogo.png";
import BmiLogo from "../assests/BmiLogo.jpg";
import AdviceLogo from "../assests/AdviceLogo.png";
import EcommerceLogo from "../assests/EcommerceLogo.jpg";
import Chat from "../assests/Chat.jpg";
import CurrencyLogo from "../projects/currency-convertor/assets/icon.jpg";
import todoLogo from "../assests/togoLogo.png";
import { IoChatbox, IoQrCode } from "react-icons/io5";
import { MdCurrencyExchange } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaOpencart, FaTeamspeak } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";

const ProjectList = [
  {
    id: 1,
    name: "E-Commerce App",
    createdBy: "Rohit",
    linkPage: "",
    pageRedirect: "https://rohit-portfolio-ecommerce.vercel.app",
    description:
      "An e-commerce SPA using the MERN stack (MongoDB, Express, React, Node.js) features seamless user functionalities such as product listings, detailed views, authentication, shopping cart, and order management, all managed with React, Redux, and Axios. The backend, powered by Node.js and Express, provides RESTful APIs, JWT-based authentication, and order processing, with MongoDB for data storage. An integrated admin panel, built with React Admin, enables efficient management of products, orders, and users, ensuring a smooth experience for both customers and administrators.",
    projectImage: EcommerceLogo,
    projectIcon: <FaOpencart />,
  },
  {
    id: 2,
    name: "Currency Convertor",
    createdBy: "Rohit",
    linkPage: "/currency-convertor",
    description:
      "A Currency Converter application built with React enables users to convert amounts between different currencies quickly and efficiently. By selecting the source and target currencies and entering the amount, users receive real-time conversion results. The app integrates with currency exchange rate APIs to ensure up-to-date information and offers a sleek, responsive interface for an intuitive user experience. Perfect for travelers, businesses, and anyone needing accurate currency exchange calculations on the go.",
    projectImage: CurrencyLogo,
    projectIcon: <MdCurrencyExchange />,
  },
  {
    id: 3,
    name: "Connect Chat App",
    createdBy: "Rohit",
    linkPage: "",
    pageRedirect: "https://rohit-connect-app.vercel.app",
    description:
      "Connect Chat App is a real-time messaging application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io. Designed to be fully responsive, it ensures a seamless user experience across all devices. The app offers instant, secure communication with features such as real-time chat, user authentication, and media sharing. It supports both private and group conversations, with a clean interface that adapts to different screen sizes. Users can manage their profiles, search for contacts, and view message history, all while benefiting from a scalable and secure architecture.",
    projectImage: Chat,
    projectIcon: <IoChatbox />,
  },
  {
    id: 5,
    name: "To-Do List App",
    createdBy: "Rohit",
    linkPage: "",
    pageRedirect: "https://rohit-todo-app.vercel.app",
    description:
      "A MERN (MongoDB, Express.js, React, Node.js) To-Do List app is a full-stack web application that allows users to create, read, update, and delete tasks. Using MongoDB for data storage, Express.js for server-side logic, React for the frontend user interface, and Node.js for the backend, this app provides a seamless experience for managing tasks. Users can interact with a dynamic, responsive UI to manage their to-dos, with real-time updates and persistent storage across sessions.",
    projectImage: todoLogo,
    projectIcon: <GrNotes />,
  },
  {
    id: 6,
    name: "Advice App",
    createdBy: "Rohit",
    linkPage: "/advice-app",
    description:
      "An Advice Application built with React and an API provides users with random or topic-specific advice. By integrating with an external advice API, the app delivers insightful or motivational tips at the click of a button. The application features a clean, interactive interface that refreshes with new advice each time the user interacts with it. Ideal for those seeking a quick boost of inspiration or helpful suggestions.",
    projectImage: AdviceLogo,
    projectIcon: <FaTeamspeak />,
  },
  {
    id: 7,
    name: "QR Code Generator",
    createdBy: "Rohit",
    linkPage: "/qrcode-generator",
    description:
      "This QR code generator application, built with Vite and React, allows users to create customized QR codes effortlessly. The app features a user-friendly interface where users input their data, and it utilizes an API to generate and fetch the corresponding QR code. With Vite for fast builds and React for dynamic user interactions, the app ensures a smooth and efficient experience.",
    projectImage: QrCodeLogo,
    projectIcon: <IoQrCode />,
  },
  {
    id: 8,
    name: "BMI Calculator",
    createdBy: "Rohit",
    linkPage: "/bmi-calculator",
    description:
      "A BMI Calculator application built with React allows users to easily calculate their Body Mass Index (BMI) by inputting their weight and height. The app provides instant feedback on BMI categories such as underweight, normal weight, overweight, and obesity. With a clean and user-friendly interface, it leverages React's state management to handle user inputs and display results dynamically. Ideal for health-conscious individuals seeking a quick and convenient way to monitor their body weight status.",
    projectImage: BmiLogo,
    projectIcon: <GiWeightLiftingUp />,
  },
];

export default ProjectList;
