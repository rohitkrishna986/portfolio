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
import Ecommerce from '../projects/e-commerce/Ecommerce.jsx'
import HomeE from '../projects/e-commerce/pages/Home.jsx'
import Login from '../projects/e-commerce/components/Login.jsx'
import Register from '../projects/e-commerce/components/Register.jsx'
import CategoryProduct from '../projects/e-commerce/pages/CategoryProduct.jsx'
import ForgetPassword from '../projects/e-commerce/components/ForgetPassword.jsx'
import ProductDetails from '../projects/e-commerce/pages/ProductDetails.jsx'
import Cart from '../projects/e-commerce/pages/Cart.jsx'
import SearchProduct from '../projects/e-commerce/pages/SearchProduct.jsx'
import AdminPanel from '../projects/e-commerce/pages/AdminPanel.jsx'
import AllUsers from '../projects/e-commerce/pages/AllUsers.jsx'
import AllProducts from '../projects/e-commerce/pages/AllProducts.jsx'


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
            },
            {
                path: 'e-commerce',
                element: <Ecommerce/>,
                children: [
                    {
                        path: '',
                        element: <HomeE />
                    },
                    {
                        path: 'login',
                        element : <Login/>
                    },
                    {
                        path : 'register',
                        element : <Register/>
                    },
                    {
                        path : 'forgot-password',
                        element : <ForgetPassword/>
                    },
                    {
                        path : 'product-category',
                        element : <CategoryProduct/>
                    },{
                        path : 'product/:id',
                        element : <ProductDetails/>
                    },
                    {
                        path : 'cart',
                        element : <Cart/>
                    },
                    {
                        path : 'search',
                        element : <SearchProduct/>
                    },
                    {
                        path : 'admin-panel',
                        element : <AdminPanel/>,
                        children : [
                            {
                                path : 'all-user',
                                element : <AllUsers/>
                            },
                            {
                                path : 'all-product',
                                element : <AllProducts/>
                            }
                        ]
                    },
                ]
            }
        ]
    }
])

export default router;