import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      <Navbar />
      <div className="flex-1" style={{ marginTop: "2em" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;


