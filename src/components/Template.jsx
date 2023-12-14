import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Template = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Outlet/>   
        <Footer />    
      </div>
    </div>
  );
};

export default Template;
