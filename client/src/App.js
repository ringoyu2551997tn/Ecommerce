import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import {productsData} from "./api/Api";
import{
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  // ScrollRestoration,
}from "react-router-dom";
import Login from "./pages/Login";


const Layout=()=>{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader: productsData,
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/login",
        element:<Login/>,
      }
    ]
  }
])

function App() {
  return (
    <div className="font-bodyFont">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
